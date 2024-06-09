const mongoose = require("mongoose");
const ImageSchema = mongoose.Schema({
  userId: {
    type: mongoose.ObjectId,
    require: true,
  },
  BannerPath: {
    type: String,
  },
  imagePath: {
    type: String,
  },
  image2Path: {
    type: String,
  },
});
const Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
