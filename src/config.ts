import type { AccentColor, BaseColor } from "./colors";

// ============================================
// 重要配置：请务必设置以下两个变量
// ============================================

// 配置一：网站部署地址
// 如果部署到 GitHub Pages，设置为：https://<你的GitHub用户名>.github.io/
// 示例：export const SITE = "https://zhangsan.github.io";
export const SITE = "https://chuhsing.com";

// 配置二：基础路径
// 如果仓库名称是 <你的GitHub用户名>.github.io，设置为 '/'
// 否则设置为 '/<你的仓库名称>'
// 示例：export const BASE = "/my-blog";
export const BASE = "";

// ============================================
// 基本设置
// ============================================

// 网站标题：用于 HTML title 标签、meta 标签和页头显示（如果 SITE_NAME 为空）
export const SITE_TITLE = "Pykeguo's blog";

// 网站描述：用于 meta 标签（例如显示在搜索结果中）
export const SITE_DESCRIPTION =
  "This is Pykeguo's blog. Sharing coding knowledge";

// 网站图标：用于页头图标和浏览器标签页图标（favicon）
// 可以是 emoji（如 "🙃"）或 public 目录下的文件路径（如 "/favicon.ico"）
export const SITE_FAVICON = "🍞";

// 作者名称：用于页脚版权信息，格式为 (c) <年份> <名称> - <许可证>
export const NAME = "Pykeguo";

// 许可证信息：用于页脚，说明内容的使用许可
// 例如："保留所有权利" 或 "CC-BY-SA 4.0"
export const LICENSE = "All rights reserved.";

// Giscus 评论系统配置
// 在 https://giscus.app/zh-CN 生成配置
export const GISCUS_CONFIG = {
  repo: "index-null/astro-blog",
  repoId: "R_kgDOSnQk3w",
  category: "Announcements",
  categoryId: "DIC_kwDOSnQk384C93hs",
  mapping: "url",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
  lang: "en",
  loading: "lazy",
};

// 源码链接：指向博客源码的 GitHub 仓库地址（不需要可留空）
export const SOURCE_LINK = "";

// ============================================
// 颜色主题设置
// ============================================

// 基础颜色：设置博客的整体基础色调
// 可选值取决于 colors.ts 中定义的 BaseColor 类型
export const BASE_COLOR: BaseColor = "neutral";

// 强调色：设置博客的强调色（用于链接、按钮等交互元素）
// 可选值取决于 colors.ts 中定义的 AccentColor 类型
export const ACCENT_COLOR: AccentColor = "violet";

// ============================================
// 社交链接设置
// ============================================
// 社交链接：所有非空链接都会显示在页脚
// 取消注释你想要显示的社交链接，留空则不显示

export const SOCIAL_LINKS: {
  FACEBOOK_URL?: string; // Facebook 主页链接
  TWITTER_URL?: string; // Twitter/X 主页链接
  GITHUB_URL?: string; // GitHub 主页链接
  INSTAGRAM_URL?: string; // Instagram 主页链接
  LINKEDIN_URL?: string; // LinkedIn 主页链接
  YOUTUBE_URL?: string; // YouTube 频道链接
  SUBSTACK_URL?: string; // Substack 主页链接
  EMAIL?: string; // 邮箱地址（会生成 mailto 链接）
  SHOW_RSS?: boolean; // 是否显示 RSS 订阅链接
} = {
  SHOW_RSS: true, // 显示 RSS 订阅链接
  GITHUB_URL: "https://github.com/index-null", // GitHub 主页
  EMAIL: "pykeguo@tencent.com", // 联系邮箱
  // FACEBOOK_URL: "https://facebook.com/你的用户名",
  // TWITTER_URL: "https://twitter.com/你的用户名",
  // INSTAGRAM_URL: "https://instagram.com/你的用户名",
  // LINKEDIN_URL: "https://linkedin.com/in/你的用户名",
  // YOUTUBE_URL: "https://youtube.com/@你的频道名",
  // SUBSTACK_URL: "https://你的用户名.substack.com",
};

// ============================================
// 更多设置
// ============================================

// 手动暗黑模式：如果为 true，页头会显示主题切换按钮
// 如果为 false，主题会自动检测系统偏好，读者无法手动切换
export const MANUAL_DARK_MODE = true;

// 搜索功能：如果为 true，启用搜索功能
// 读者可以通过搜索框搜索文章内容
export const SEARCH_ENABLED = true;

// 显示文章图片：如果为 true，在文章列表中显示文章封面图片
// 如果为 false，文章列表将不显示图片，更简洁
export const SHOW_IMAGES = true;

// 每页文章数量：设置分页显示时每页显示的文章数量
// 根据个人喜好调整，建议 6-12 篇
export const POSTS_PER_PAGE = 8;

// 站点名称：在页头显示的名称
// 如果留空，将显示 SITE_TITLE 的值
export const SITE_NAME = " ";

// 页头显示图标：如果为 true，在页头显示 SITE_FAVICON 设置的图标
// 如果为 false，页头将不显示图标
export const SHOW_FAVICON_IN_HEADER = false;
