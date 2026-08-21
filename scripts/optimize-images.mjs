#!/usr/bin/env node
// Optimizes src/assets/* images to WebP at their real display size, and
// requantizes the name-locked public/ images in place. Safe to re-run:
// already-converted files are skipped. Run after adding new images to
// src/assets/ — see README for details.
import sharp from "sharp";
import { existsSync, statSync } from "node:fs";
import { unlink, rename } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const ASSETS = path.join(ROOT, "src", "assets");
const PUBLIC = path.join(ROOT, "public");

const kb = (bytes) => (bytes / 1024).toFixed(1) + " KB";
const pct = (before, after) => (100 - (after / before) * 100).toFixed(1) + "%";

let totalBefore = 0;
let totalAfter = 0;

// --- src/assets/: convert mislabeled/oversized source -> right-sized WebP,
// then delete the original. Basename is preserved, extension changes.
const ASSET_JOBS = [
  // journeys: sources are actually JPEG wearing a .png extension, 2048x2048
  { src: "journeys/journey-buy.png", width: 800, height: 800, quality: 78 },
  { src: "journeys/journey-existing.png", width: 800, height: 800, quality: 78 },
  { src: "journeys/journey-fix.png", width: 800, height: 800, quality: 78 },
  { src: "journeys/journey-protect.png", width: 800, height: 800, quality: 78 },
  // misc: also actually JPEG wearing .png, decorative/aria-hidden, slated for eventual replacement
  { src: "misc/map-placeholder.png", width: 1600, height: 900, quality: 70 },
  // hero: genuine PNG with alpha — this is the LCP image, higher quality + alpha preserved
  { src: "hero/hero-devices.png", width: 1360, height: 907, quality: 85, alphaQuality: 100 },
  // lifestyle: genuine JPEGs, 1792x2400 portrait photos rendered ~497px wide via ImageBand
  { src: "lifestyle/lifestyle-customer.jpg", width: 1200, height: 1600, quality: 78 },
  { src: "lifestyle/lifestyle-handover.jpg", width: 1200, height: 1600, quality: 78 },
  { src: "lifestyle/lifestyle-repair.jpg", width: 1200, height: 1600, quality: 78 },
  { src: "lifestyle/lifestyle-store.jpg", width: 1200, height: 1600, quality: 78 },
  // business: same shape/usage as lifestyle
  { src: "business/business-financing.jpg", width: 1200, height: 1600, quality: 78 },
  { src: "business/business-partner.jpg", width: 1200, height: 1600, quality: 78 },
  // partners: logos rendered at ~128px inner chip width. make_way_repair_centre.jpeg
  // is deliberately excluded — see PartnerLogos.jsx comment, left untouched.
  { src: "partners/OxygenX.jpg", width: 320, height: 320, quality: 82 },
  { src: "partners/Veend.jpeg", width: 320, height: 320, quality: 82 },
  { src: "partners/axa_mansard.png", width: 320, height: 320, quality: 82 },
  { src: "partners/prince_phones_gadget.jpeg", width: 320, height: 320, quality: 82 },
];

async function convertAssetToWebp({ src, width, height, quality, alphaQuality }) {
  const srcPath = path.join(ASSETS, src);
  const dir = path.dirname(srcPath);
  const base = path.basename(src, path.extname(src));
  const outPath = path.join(dir, `${base}.webp`);

  if (!existsSync(srcPath)) {
    if (existsSync(outPath)) {
      console.log(`  SKIP (already optimized): ${src}`);
      return null;
    }
    console.log(`  WARN (source missing, no .webp found either): ${src}`);
    return null;
  }

  const before = statSync(srcPath).size;
  const webpOpts = { quality, effort: 5 };
  if (alphaQuality) {
    webpOpts.alphaQuality = alphaQuality;
    webpOpts.effort = 6;
  }

  await sharp(srcPath)
    .resize(width, height, { fit: "inside", withoutEnlargement: true })
    .webp(webpOpts)
    .toFile(outPath);

  const after = statSync(outPath).size;
  await unlink(srcPath);

  console.log(`  ${src} -> ${path.basename(outPath)}: ${kb(before)} -> ${kb(after)} (${pct(before, after)} smaller)`);
  return { before, after };
}

// --- public/: name-locked, unhashed URLs. Resize/requantize IN PLACE,
// filename and extension never change. Written to a .tmp file then
// renamed over the original so we never read and write the same path
// mid-stream.
const PUBLIC_JOBS = [
  // logos: 1605x368 source rendered at 140x32 (header) / 157x36 (footer) CSS px.
  // Target ~3x the larger of the two renders for retina headroom.
  { file: "mona.png", width: 440, height: 101, resize: true },
  { file: "mona-white-C8WIf_xA.png", width: 480, height: 110, resize: true },
  // spec-mandated dimensions (manifest / apple-touch-icon) — requantize only
  { file: "android-chrome-512x512.png", resize: false },
  { file: "apple-touch-icon.png", resize: false },
  { file: "android-chrome-192x192.png", resize: false },
];

// Left untouched deliberately: favicon-16x16.png, favicon-32x32.png,
// favicon.ico — too small to matter / risky to re-encode a multi-res .ico.

async function requantizePublicPng({ file, width, height, resize }) {
  const filePath = path.join(PUBLIC, file);
  if (!existsSync(filePath)) {
    console.log(`  WARN (not found): public/${file}`);
    return null;
  }
  const before = statSync(filePath).size;
  const tmpPath = `${filePath}.tmp`;

  let pipeline = sharp(filePath);
  if (resize) {
    pipeline = pipeline.resize(width, height, { fit: "inside", withoutEnlargement: true });
  }
  await pipeline.png({ palette: true, quality: 90, compressionLevel: 9 }).toFile(tmpPath);

  const after = statSync(tmpPath).size;
  if (after >= before) {
    // Idempotent re-run guard: if a previous run already shrank this file,
    // don't let a second pass grow it back via re-encoding.
    await unlink(tmpPath);
    console.log(`  SKIP (already optimal): public/${file} (${kb(before)})`);
    return null;
  }
  await rename(tmpPath, filePath);
  console.log(`  public/${file}: ${kb(before)} -> ${kb(after)} (${pct(before, after)} smaller)`);
  return { before, after };
}

console.log("== src/assets/ -> WebP ==");
for (const job of ASSET_JOBS) {
  const result = await convertAssetToWebp(job);
  if (result) {
    totalBefore += result.before;
    totalAfter += result.after;
  }
}

console.log("\n== public/ (name-locked, requantize in place) ==");
for (const job of PUBLIC_JOBS) {
  const result = await requantizePublicPng(job);
  if (result) {
    totalBefore += result.before;
    totalAfter += result.after;
  }
}

console.log(`\n== Total ==`);
console.log(`${kb(totalBefore)} -> ${kb(totalAfter)} (${pct(totalBefore, totalAfter)} smaller)`);
