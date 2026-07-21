#!/usr/bin/env bun
import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const BLOG_DIR = resolve(__dirname, "../src/content/blog");
const LOCALES = ["en", "zh-cn"];

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error("Usage: bun run new <title>");
  process.exit(1);
}

// Generate slug from title
let slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\u4e00-\u9fff]+/gi, "-") // Support Chinese characters
  .replace(/^-|-$/g, "");

// Fallback: if slug is empty (e.g., non-Latin characters), use timestamp
if (!slug) {
  slug = `post-${Date.now()}`;
}

const now = new Date();
const pubDate = `${now.toLocaleDateString("en-US", { month: "short" })} ${String(now.getDate()).padStart(2, "0")} ${now.getFullYear()}`;

const created = [];

for (const locale of LOCALES) {
  const localeDir = resolve(BLOG_DIR, locale);
  mkdirSync(localeDir, { recursive: true });

  const filePath = resolve(localeDir, `${slug}.mdx`);

  const localeLabel = locale === "zh-cn" ? "中文" : "English";

  const content = `---
# ---- REQUIRED ----
title: "${title}"
description: ""
pubDate: "${pubDate}"
tags: []
lang: "${locale}"

# ---- OPTIONAL ----
published: true
# hidden: false
# shortDescription: ""
# updatedDate: ""
# heroImage: "/src/assets/posts/image.jpg"
# hideHero: false
# noImage: false
# customOGImage: "/src/assets/posts/image.jpg"
---

${localeLabel} version
Write your content here.
`;

  writeFileSync(filePath, content, "utf-8");
  created.push(filePath);
  console.log(`✅ [${locale}] Created ${filePath}`);
}

console.log(`\n🎉 Done! ${created.length} files created for "${title}".`);
