const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.on("eleventy.after", async () => {
    const resume = require("./src/_data/resume.js");
    const logoDir = path.join(__dirname, "_site/images/logos");
    fs.mkdirSync(logoDir, { recursive: true });
    await Promise.all(
      resume.companies.map(async (company) => {
        const dest = path.join(logoDir, `${company.id}.png`);
        if (fs.existsSync(dest)) return;
        const res = await fetch(company.logoUrl);
        fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
        console.log(`[logos] Downloaded ${company.id}.png`);
      })
    );
  });

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
