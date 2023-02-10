const Fontmin = require("fontmin");

// 自定义
const filePath = "./HONORSansCN-Regular.ttf";
const fontName = "font";
const extractText = "我是提取的字体，只有我生效";
const exportPath = "./fonts";

const fontmin = new Fontmin()
  .src(filePath)
  .use(
    Fontmin.glyph({
      text: extractText,
      hinting: false // keep ttf hint info (fpgm, prep, cvt). default = true
    })
  )
  .use(Fontmin.ttf2eot())
  .use(Fontmin.ttf2svg())
  .use(
    Fontmin.ttf2woff({
      deflate: true // deflate woff. default = false
    })
  )
  .use(
    Fontmin.css({
      fontFamily: fontName,
      base64: true
    })
  )
  .dest(exportPath);

fontmin.run();