import userModel from "../models/usersModel.js"
import { v2 as cloudinary } from "cloudinary"

const uploadUserPicture = async (req, res) => {
  try {
    console.log("req.file :>> ", req.file)
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "mern",
    })
    console.log("uploadResult :>> ", uploadResult)
    res.status(200).json({
      message: "image upload successful",
      imageUrl: uploadResult.url,
    })
  } catch (error) {
    res
      .status(500)
      .json({ message: "image couldn't be uploaded", error: error })
  }
}

const encryptPassword = async (password) => {}

const signUp = async (req, res) => {}

export { signUp, uploadUserPicture }
