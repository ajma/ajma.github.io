module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addFilter("mdlinks", function(text) {
    if (!text) return text;
    return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  });

  eleventyConfig.addFilter("upper", function(str) {
    return str ? str.toUpperCase() : str;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk"
  };
};
