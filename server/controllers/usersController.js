import userModel from "../models/usersModel.js"
import { v2 as cloudinary } from "cloudinary"

const uploadUserPicture = async (req, res) => {
  console.log("req.body :>> ", req.body)
  console.log("req.file :>> ", req.file)
}

const encryptPassword = async (password) => {}

const signUp = async (req, res) => {}

export { signUp, uploadUserPicture }
