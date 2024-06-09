const { User, Image } = require("../model")
const { successResponse, errorResponse } = require("../../helperFunction/helperFunction")

const addUser = async (req, res) => {
  const { name, phone, email, location } = req.body
  const image = req.files
  try {
    if (!name | !phone | !email) {
      return errorResponse(res, "all field are required", 400)
    }
    const user = new User({ name, phone, email, location });
    await user.save();
    const imageData = {
      userId: user._id,
      BannerPath: image[0].path,
      imagePath: image[1].path,
      image2Path: image[2].path,
    }
    const imageUpload = new Image(imageData);
    image.save();
    return successResponse(res, `User created`, 201);

  } catch (error) {
    return errorResponse(res, error.message, 400)
  }
}

const getAllUsers = () => {
  try {
    const user = User.find().populate('Image');
    return successResponse(res, `Get User`, 200, User);

  } catch (error) {
    return errorResponse(res, error.message, 400)

  }
}

module.exports = {
  addUser,
  getAllUsers
}
