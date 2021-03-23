module.exports = function (eleventyConfig) {
  // // Configure any files that should be copied as-is from input to output directory
  // eleventyConfig.addPassthroughCopy("content/**/*.png")

  // // Enable syntax highlighting in markdown code blocks
  // eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"))

  // Configure the markdown parser.
  eleventyConfig.setLibrary(
    "md",
    require("markdown-it")({
      html: true,
      typographer: true, // Automatically turn -- into en-dashes, straight quotes into curly quotes, etc.
    })
  );

  // Minify HTML when NODE_ENV is set to "production" (which it should be when the website is deployed)
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform(
      "minifyHtml",
      require("./transforms/minifyHtml.js")
    );
  }

  return {
    dir: {
      input: "content",
    },
  };
};
