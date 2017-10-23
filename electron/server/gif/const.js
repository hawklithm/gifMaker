module.exports = {
  // GIF署名（Signature）和版本号（Version)
  GIF_SIGNATURE: [0x47, 0x49, 0x46, 0x38, 0x39, 0x61],
  // 逻辑屏幕标识符(Logical Screen Descriptor)
  LSD: [0x03, 0x00, 0x03, 0x00, 0xb3, 0x00, 0x00],
  // 全局颜色列表(Global Color Table)
  GCT: [0x00, 0x00, 0x00, 0x80, 0x00, 0x00, 0x00, 0x80, 0x00, 0x80, 0x80, 0x00, 0x00, 0x00, 0x80, 0x80, 0x00, 0x80,
    0x00, 0x80, 0x80, 0xc0, 0xc0, 0xc0, 0x80, 0x80, 0x80, 0xff, 0x00, 0x00, 0x00, 0xff, 0x00, 0xff, 0xff, 0x00, 0x00,
    0x00, 0xff, 0xff, 0x00, 0xff, 0x00, 0xff, 0xff, 0xff, 0xff, 0xff],
  // AE: [0x21, 0xff, 0x0b, 0x4e, 0x45, 0x54, 0x53, 0x43, 0x41, 0x50, 0x45, 0x32, 0x2e, 0x30, 0x03, 0x01,
  //   0x00, 0x01, 0x00],
  // 图形控制扩展(Graphic Control Extension)
  // 标识 0x21 0xf9 0x04  间隔时长单位0.01s  0x0a 0x00  透明色索引 0x0f 结束符 0x00
  GCE: [0x21, 0xf9, 0x04, 0x09, 0x0a, 0x00, 0x0f, 0x00],
  ID: [0x2c, 0x00, 0x00, 0x00, 0x00, 0x0a, 0x00, 0x0a, 0x00, 0x00],
  // LZW 压缩算法 https://segmentfault.com/a/1190000011425787
  IMAGEDATA: [0x04, 0x1c, 0x10, 0x80, 0x47, 0x2b, 0x05, 0x49, 0xda, 0x9b,
    0xba, 0xae, 0x58, 0xe7, 0x4d, 0x4f, 0x28, 0x8e, 0xe6, 0x29, 0xa5, 0x19,
    0x69, 0x7e, 0x1c, 0x0c, 0x92, 0xdb, 0x13, 0x01, 0x00],

  FUCK4: [0x04, 0x0a, 0xf0, 0xc9, 0x49, 0xab, 0xbd, 0x38, 0xeb, 0xcd, 0x7b, 0x8e, 0x00, 0x3b],
  END: [0x3b]
};