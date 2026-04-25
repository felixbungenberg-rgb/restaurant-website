module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addGlobalData("currentYear", new Date().getFullYear());

  eleventyConfig.addFilter("paragraphs", (text) => {
    if (!text) return "";
    return text
      .split(/\n\n+/)
      .map(p => `<p>${p.trim().replace(/\n/g, "<br>")}</p>`)
      .join("\n");
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
  };
};
