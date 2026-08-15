import { brands, devices, findModel } from "../data/devices.js";
import { stores } from "../data/stores.js";

const DELAY = 350;

const wait = (ms = DELAY) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getBrands() {
  await wait();
  return brands;
}

export async function getModelsByBrand(brandId) {
  await wait();
  return devices[brandId] ?? [];
}

export async function getProtectionPrice(brandId, modelId) {
  await wait();
  const model = findModel(brandId, modelId);
  if (!model) throw new Error("Model not found");
  return { price: model.price, model };
}

export async function getStores(filters = {}) {
  await wait();
  const { state, city, service, query } = filters;
  return stores.filter((store) => {
    if (state && store.state !== state) return false;
    if (city && store.city !== city) return false;
    if (service && !store.services.includes(service)) return false;
    if (query && !store.name.toLowerCase().includes(query.toLowerCase()))
      return false;
    return true;
  });
}

export async function submitContact(payload) {
  await wait(600);
  return { success: true, payload };
}

export async function submitPartnerApplication(payload) {
  await wait(600);
  return { success: true, payload };
}

export async function submitFinancing(payload) {
  await wait(600);
  return { success: true, payload };
}

export async function submitLogin(payload) {
  await wait(600);
  return { success: true, payload };
}
