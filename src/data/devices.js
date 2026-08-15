export const brands = [
  { id: "apple", name: "Apple iPhone" },
  { id: "samsung", name: "Samsung Galaxy" },
  { id: "google", name: "Google Pixel" },
];

export const devices = {
  apple: [
    { id: "iphone-13", name: "iPhone 13", price: 22000 },
    { id: "iphone-13-pro", name: "iPhone 13 Pro", price: 26000 },
    { id: "iphone-14", name: "iPhone 14", price: 27000 },
    { id: "iphone-14-pro", name: "iPhone 14 Pro", price: 32000 },
    { id: "iphone-15", name: "iPhone 15", price: 34000 },
    { id: "iphone-15-pro", name: "iPhone 15 Pro", price: 39000 },
    { id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", price: 44000 },
    { id: "iphone-16", name: "iPhone 16", price: 42000 },
    { id: "iphone-16-pro", name: "iPhone 16 Pro", price: 48000 },
    { id: "iphone-16-pro-max", name: "iPhone 16 Pro Max", price: 52000 },
  ],
  samsung: [
    { id: "galaxy-s21", name: "Galaxy S21", price: 18000 },
    { id: "galaxy-s22", name: "Galaxy S22", price: 21000 },
    { id: "galaxy-s23", name: "Galaxy S23", price: 25000 },
    { id: "galaxy-s23-ultra", name: "Galaxy S23 Ultra", price: 33000 },
    { id: "galaxy-s24", name: "Galaxy S24", price: 29000 },
    { id: "galaxy-s24-ultra", name: "Galaxy S24 Ultra", price: 38000 },
    { id: "galaxy-s25", name: "Galaxy S25", price: 32000 },
    { id: "galaxy-s25-ultra", name: "Galaxy S25 Ultra", price: 41000 },
    { id: "galaxy-z-flip-6", name: "Galaxy Z Flip 6", price: 36000 },
    { id: "galaxy-z-fold-6", name: "Galaxy Z Fold 6", price: 49000 },
  ],
  google: [
    { id: "pixel-7", name: "Pixel 7", price: 19000 },
    { id: "pixel-7-pro", name: "Pixel 7 Pro", price: 24000 },
    { id: "pixel-8", name: "Pixel 8", price: 23000 },
    { id: "pixel-8-pro", name: "Pixel 8 Pro", price: 29000 },
    { id: "pixel-9", name: "Pixel 9", price: 27000 },
    { id: "pixel-9-pro", name: "Pixel 9 Pro", price: 34000 },
    { id: "pixel-10", name: "Pixel 10", price: 31000 },
    { id: "pixel-10-pro", name: "Pixel 10 Pro", price: 37000 },
  ],
};

export const brandLabel = (brandId) =>
  brands.find((b) => b.id === brandId)?.name ?? brandId;

export const findModel = (brandId, modelId) =>
  devices[brandId]?.find((m) => m.id === modelId);
