import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const srcDir = "D:\\暂存\\展览图";
const outDir = path.join(rootDir, "public", "images", "projects", "deepcore");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Target sizes are specified per image below.

const tasks = [
  // === 上海敦煌 (Shanghai Dunhuang) ===
  {
    src: "上海敦煌1.png",
    out: "ex-shanghai-dunhuang-01.webp",
    resize: { width: 1400, height: 1050, fit: "cover" },
  },
  {
    src: "上海敦煌2.png",
    out: "ex-shanghai-dunhuang-02.webp",
    resize: { width: 1400, height: 1170, fit: "cover" },
  },
  {
    src: "上海敦煌3.png",
    out: "ex-shanghai-dunhuang-03.webp",
    resize: { width: 1400, height: 1860, fit: "cover" },
  },
  // === 北京双年展 (Beijing Biennale) ===
  {
    src: "北京双年展1.png",
    out: "ex-beijing-biennale-01.webp",
    resize: { width: 1400, height: 790, fit: "cover" },
  },
  {
    src: "北京双年展2.png",
    out: "ex-beijing-biennale-02.webp",
    resize: { width: 1400, height: 650, fit: "cover" },
  },
  {
    src: "北京双年展3.png",
    out: "ex-beijing-biennale-03.webp",
    resize: { width: 1400, height: 786, fit: "cover" },
  },
  // === 可能世界 (Archives of Possible Worlds) ===
  {
    src: "可能世界1.png",
    out: "ex-archives-possible-worlds-01.webp",
    resize: { width: 1400, height: 1030, fit: "cover" },
  },
  {
    src: "可能世界2.png",
    out: "ex-archives-possible-worlds-02.webp",
    resize: { width: 1400, height: 880, fit: "cover" },
  },
  {
    src: "可能世界3.png",
    out: "ex-archives-possible-worlds-03.webp",
    resize: { width: 1400, height: 790, fit: "cover" },
  },
  // === 横琴—澳门 (Hengqin-Macao) - already done, skip
  // === 意大利米兰 (Milan CDSA) ===
  {
    src: "意大利米兰1.png",
    out: "ex-milan-cdsa-01.webp",
    resize: { width: 1400, height: 790, fit: "cover" },
  },
  // === 杭州文博会 (Hangzhou Cultural Expo) ===
  {
    src: "杭州文博会.png",
    out: "ex-hangzhou-expo-01.webp",
    resize: { width: 1400, height: 935, fit: "cover" },
  },
  // === 海南科技 (Hainan Tech) ===
  {
    src: "海南科技1.png",
    out: "ex-hainan-tech-01.webp",
    resize: { width: 1400, height: 930, fit: "cover" },
  },
  {
    src: "海南科技2.png",
    out: "ex-hainan-tech-02.webp",
    resize: { width: 1400, height: 935, fit: "cover" },
  },
  {
    src: "海南科技3.png",
    out: "ex-hainan-tech-03.webp",
    resize: { width: 1400, height: 935, fit: "cover" },
  },
  // === 金海豚 (Golden Dolphin Awards) ===
  {
    src: "金海豚1.png",
    out: "ex-golden-dolphin-01.webp",
    resize: { width: 1400, height: 1870, fit: "cover" },
  },
  {
    src: "金海豚2.png",
    out: "ex-golden-dolphin-02.webp",
    resize: { width: 1400, height: 935, fit: "cover" },
  },
  {
    src: "金海豚3.png",
    out: "ex-golden-dolphin-03.webp",
    resize: { width: 1400, height: 938, fit: "cover" },
  },
  // === 金鸡 (Golden Rooster) ===
  {
    src: "金鸡1.png",
    out: "ex-golden-rooster-01.webp",
    resize: { width: 1400, height: 920, fit: "cover" },
  },
  {
    src: "金鸡2.png",
    out: "ex-golden-rooster-02.webp",
    resize: { width: 1400, height: 1770, fit: "cover" },
  },
  {
    src: "金鸡3.png",
    out: "ex-golden-rooster-03.webp",
    resize: { width: 1400, height: 790, fit: "cover" },
  },
  // === 58 11 (unclear, include as-is) ===
  {
    src: "58 11.png",
    out: "ex-58-11-01.webp",
    resize: { width: 1400, height: 930, fit: "cover" },
  },
  // === 珠海1 (likely another Hengqin shot) ===
  {
    src: "珠海1.png",
    out: "ex-zhuhai-01.webp",
    resize: { width: 1400, height: 930, fit: "cover" },
  },
];

(async () => {
  let count = 0;
  for (const t of tasks) {
    try {
      await sharp(path.join(srcDir, t.src))
        .resize(t.resize.width, t.resize.height, t.resize)
        .webp({ quality: 82 })
        .toFile(path.join(outDir, t.out));
      console.log(`✓ ${t.out}`);
      count++;
    } catch (err) {
      console.error(`✗ ${t.out}: ${err.message}`);
    }
  }
  console.log(`\nDone. ${count} images processed.`);
})();
