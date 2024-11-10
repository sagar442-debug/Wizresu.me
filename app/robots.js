export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/sign-in", "/sign-up", "/dashboard"],
    },
    sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  };
}
