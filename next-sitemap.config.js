/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.marketmykeys.com",

  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,

  exclude: [
    "/api/*",
    "/admin/*",
    "/studio/*",
    "/thank-you",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
    ],
    additionalSitemaps: [
      "https://www.marketmykeys.com/sitemap.xml",
    ],
  },
};
