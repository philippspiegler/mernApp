import userModel from "../models/usersModel.js"
import { v2 as cloudinary } from "cloudinary"
import { encryptPassword, verifyPassword } from "../utils/encryptPassword.js"
import { issueToken } from "../utils/jwt.js"
import carsModel from "../models/wheelsModel.js"

const uploadUserPicture = async (req, res) => {
  try {
    // console.log("req.file :>> ", req.file)
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "mern",
    })
    // console.log("uploadResult :>> ", uploadResult)
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

const uploadNewCarImage = async (req, res) => {
  try {
    console.log("req.files :>> ", req.files)
    const uploadResult = await cloudinary.uploader.upload(req.files.path, {
      folder: "mern",
    })
    res
      .status(200)
      .json({ message: "images upload successful", imageUrl: uploadResult.url })
  } catch (error) {
    res
      .status(500)
      .json({ message: "images couldn't be uploaded", error: error })
  }
}

const signUp = async (req, res) => {
  console.log("req.body in signUp", req.body)

  try {
    const existingUser = await userModel.findOne({ email: req.body.email })
    console.log("exisitingUser :>> ", existingUser)
    if (existingUser) {
      res.status(409).json({ message: "user already exists" })
    } else {
      const hashedPassword = await encryptPassword(req.body.password)
      const newUser = new userModel({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
        avatarPicture: req.body.avatarPicture,
      })
      console.log("newUser :>> ", newUser)
      try {
        console.log("newUser try  :>> ", newUser)
        const savedUser = await newUser.save()
        res.status(201).json({
          user: {
            userName: savedUser.userName,
            email: savedUser.email,
            avatarPicture: savedUser.avatarPicture,
          },
          message: "user registered successfully",
        })
      } catch {
        res.status(501)
      }
    }
  } catch (error) {
    res.status(500).json({ message: "user already exists", error: error })
  }
}

const login = async (req, res) => {
  console.log("req.body :>> ", req.body)
  try {
    const existingUser = await userModel.findOne({ email: req.body.email })
    if (!existingUser) {
      res.status(401).json({ message: "user not found" })
    } else {
      const verified = await verifyPassword(
        req.body.password,
        existingUser.password
      )
      if (!verified) {
        res.status(401).json({ message: "wrong password" })
      }
      if (verified) {
        console.log("user is logged in")
        const token = issueToken(existingUser.id)
        console.log("token :>> ", token)
        res.status(201).json({
          message: "logged in",
          user: {
            userName: existingUser.userName,
            id: existingUser._id,
            avatarPicture: existingUser.avatarPicture,

            token,
          },
        })
      }
    }
  } catch (error) {
    res.status(501).json({ message: "login failed" })
  }
}

const getProfile = async (req, res) => {
  console.log("req.user in getProfile", req.user)
  try {
    const existingUser = await userModel.findOne({ _id: req.user._id })
    res.status(201).json(existingUser)
  } catch (error) {
    res.status(401).json({ msg: "error getting profile", error })
  }
}

const writeComment = async (req, res) => {
  console.log("req in writeComment :>> ", writeComment)
  try {
    const comment = await carsModel.findOne({ comments: req.params.comments })
    res.status(201).json(comment)
  } catch (error) {
    res.status(401).json({ msg: "no comments yet for this car" })
  }
}

export { signUp, uploadUserPicture, login, getProfile, uploadNewCarImage }
