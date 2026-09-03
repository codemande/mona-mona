// Convention: VITE_API_BASE_URL holds the full base URL, including any
// `/api` segment the deployed backend requires. Every path passed to
// apiFetch below starts with a leading slash (e.g. "/device-brands/get-all-website").
// The real deployed value — and whether it includes `/api` — still needs
// confirming with the backend team before this can be relied on.
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export class ApiError extends Error {
  constructor(status, body) {
    super(`API request failed with status ${status}`);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

function buildUrl(path) {
  const base = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
}

export async function apiFetch(path, options = {}) {
  const { headers, ...rest } = options;

  const response = await fetch(buildUrl(path), {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!response.ok) {
    let body = null;
    try {
      body = await response.json();
    } catch {
      body = await response.text().catch(() => null);
    }
    throw new ApiError(response.status, body);
  }

  return response.json();
}
