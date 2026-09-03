let handler = null;

export function registerErrorHandler(fn) {
  handler = fn;
}

export function notifyError(message) {
  handler?.(message);
}
