const palettes = [
  {
    result: [
      [248, 246, 243],
      [137, 203, 139],
      [65, 49, 82],
      [80, 27, 69],
      [182, 75, 131],
    ],
  },
  {
    result: [
      [250, 250, 251],
      [113, 132, 148],
      [131, 154, 159],
      [110, 126, 137],
      [68, 83, 96],
    ],
  },
  {
    result: [
      [216, 240, 232],
      [81, 178, 151],
      [77, 82, 119],
      [90, 37, 68],
      [171, 22, 189],
    ],
  },
  {
    result: [
      [251, 250, 251],
      [136, 152, 172],
      [67, 139, 153],
      [131, 122, 107],
      [35, 32, 45],
    ],
  },
  {
    result: [
      [234, 233, 241],
      [130, 158, 195],
      [93, 96, 149],
      [120, 111, 204],
      [24, 26, 51],
    ],
  },
  {
    result: [
      [247, 247, 242],
      [155, 167, 172],
      [193, 184, 45],
      [202, 66, 60],
      [51, 52, 72],
    ],
  },
  {
    result: [
      [249, 247, 244],
      [160, 192, 230],
      [199, 52, 177],
      [182, 138, 201],
      [43, 67, 162],
    ],
  },
  {
    result: [
      [244, 245, 246],
      [174, 151, 141],
      [114, 171, 232],
      [130, 115, 123],
      [116, 52, 40],
    ],
  },
  {
    result: [
      [240, 239, 238],
      [156, 87, 100],
      [156, 131, 181],
      [113, 47, 77],
      [44, 19, 50],
    ],
  },
  {
    result: [
      [239, 239, 234],
      [78, 203, 185],
      [122, 126, 137],
      [100, 153, 172],
      [66, 72, 81],
    ],
  },
  {
    result: [
      [244, 243, 244],
      [167, 172, 188],
      [202, 83, 82],
      [229, 135, 122],
      [90, 96, 154],
    ],
  },
  {
    result: [
      [242, 241, 241],
      [152, 185, 200],
      [28, 144, 215],
      [210, 137, 82],
      [27, 33, 79],
    ],
  },
  {
    result: [
      [239, 215, 125],
      [146, 182, 195],
      [172, 105, 79],
      [132, 113, 44],
      [27, 35, 29],
    ],
  },
  {
    result: [
      [247, 248, 247],
      [158, 163, 190],
      [165, 93, 136],
      [161, 146, 181],
      [82, 43, 120],
    ],
  },
  {
    result: [
      [240, 240, 235],
      [156, 156, 156],
      [126, 97, 92],
      [131, 147, 148],
      [25, 34, 28],
    ],
  },
  {
    result: [
      [247, 249, 248],
      [161, 154, 148],
      [165, 166, 168],
      [146, 121, 106],
      [49, 44, 49],
    ],
  },
  {
    result: [
      [243, 241, 241],
      [176, 214, 100],
      [147, 151, 154],
      [124, 124, 127],
      [51, 81, 82],
    ],
  },
  {
    result: [
      [242, 243, 240],
      [136, 117, 115],
      [112, 104, 107],
      [103, 103, 118],
      [40, 42, 63],
    ],
  },
  {
    result: [
      [246, 246, 245],
      [170, 165, 207],
      [231, 149, 167],
      [190, 92, 162],
      [85, 78, 161],
    ],
  },
  {
    result: [
      [240, 241, 236],
      [145, 130, 110],
      [163, 159, 129],
      [138, 104, 82],
      [68, 73, 84],
    ],
  },
  {
    result: [
      [251, 250, 250],
      [169, 162, 152],
      [238, 108, 58],
      [171, 133, 110],
      [70, 63, 67],
    ],
  },
  {
    result: [
      [245, 248, 248],
      [244, 180, 51],
      [113, 178, 177],
      [47, 132, 147],
      [99, 63, 78],
    ],
  },
  {
    result: [
      [244, 246, 241],
      [205, 158, 170],
      [189, 151, 165],
      [182, 140, 158],
      [26, 13, 28],
    ],
  },
  {
    result: [
      [248, 249, 249],
      [150, 144, 131],
      [135, 138, 165],
      [127, 130, 160],
      [75, 102, 141],
    ],
  },
  {
    result: [
      [249, 249, 249],
      [198, 124, 127],
      [163, 163, 174],
      [132, 132, 130],
      [78, 73, 80],
    ],
  },
  {
    result: [
      [242, 242, 239],
      [140, 132, 127],
      [170, 189, 144],
      [157, 111, 92],
      [69, 103, 119],
    ],
  },
  {
    result: [
      [249, 247, 248],
      [168, 178, 228],
      [126, 120, 126],
      [109, 166, 236],
      [50, 107, 197],
    ],
  },
  {
    result: [
      [252, 252, 252],
      [166, 215, 220],
      [235, 71, 134],
      [199, 139, 98],
      [44, 47, 67],
    ],
  },
  {
    result: [
      [243, 242, 242],
      [144, 143, 133],
      [155, 151, 142],
      [131, 118, 109],
      [51, 48, 52],
    ],
  },
  {
    result: [
      [236, 235, 232],
      [166, 117, 85],
      [127, 133, 142],
      [123, 87, 84],
      [42, 42, 49],
    ],
  },
  {
    result: [
      [242, 242, 240],
      [181, 167, 203],
      [145, 132, 178],
      [148, 139, 155],
      [75, 98, 156],
    ],
  },
];

const mongoose = require("mongoose");
const Palette = require("../models/palette");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allPalettes = await Palette.find();

    if (allPalettes.length) {
      await Palette.collection.drop();
      console.log("Eliminamos las anteriores paletas");
    }

    await Palette.insertMany(palettes);

    console.log("Todas las paletas han sido insertadas con éxito🍭");
  })
  .finally(() => {
    mongoose.disconnect();
  });
