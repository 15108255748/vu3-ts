const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

module.exports = {
  plugins: [autoprefixer(), pxtorem({
    // baseSize
    rootValue: 192,
    propList: ["*"],
  })]
}