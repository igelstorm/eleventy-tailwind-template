let plugins = [
  require("postcss-nested"),
  require("tailwindcss"),
  require("autoprefixer"),
];

if (process.env.NODE_ENV === "production") {
  plugins = [...plugins, require("cssnano")];
}

module.exports = {
  plugins: plugins,
};
