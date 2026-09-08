import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const srcDir = "D:\\暂存\\展览图";
const outDir = path.join(rootDir, "public", "images", "projects", "deepcore");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const tasks = [
  // Image 1: HK Festival wide installation — crop to 16:9 focused on the rig
  {
    src: "1.首届香港国际AI艺术节，中国香港，2025.11.jpg",
    out: "hk-ai-festival-01.webp",
    crop: { left: 0, top: 150, width: 1279, height: 720 },
    resize: { width: 1600, height: 900, fit: "cover" },
  },
  // Image 2: HK Festival visitors — crop to 3:2 focused on people with headsets
  {
    src: "2.首届香港国际AI艺术节，中国香港，2025.11.jpg",
    out: "hk-ai-festival-02.webp",
    crop: { left: 0, top: 700, width: 1279, height: 850 },
    resize: { width: 1440, height: 960, fit: "cover" },
  },
  // Image 3: Hengqin-Macao — already landscape, slight resize
  {
    src: "3.横琴—澳门国际数字艺术博览会，中国珠海，2026.4.png",
    out: "hengqin-macao-expo-01.webp",
    crop: null,
    resize: { width: 1600, height: 1067, fit: "cover" },
  },
];

(async () => {
  for (const t of tasks) {
    let pipeline = sharp(path.join(srcDir, t.src));
    if (t.crop) pipeline = pipeline.extract(t.crop);
    await pipeline
      .resize(t.resize.width, t.resize.height, t.resize)
      .webp({ quality: 85 })
      .toFile(path.join(outDir, t.out));
    console.log(`OK ${t.out}`);
  }
  console.log("Done.");
})();
