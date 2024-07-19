import User from "../../../DB/Model/User/user.model.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { AppError, catchAysncErrorr } from "../../Utils/ErrorHandling.js";

export const registration =catchAysncErrorr( async(req , res) =>{
    const {userName , email , password} = req.body
    const hashPass = bcrypt.hashSync(password, 9);

    const existEmail = await User.findOne({ email });
    if (existEmail) {
       throw new AppError('Email already exists' , 400);
    }

  const regist = await User.create({
    userName,
    email,
    password:hashPass
   
  });

  res.json({ message: "Accuont Created Success", regist });
})


export const login =catchAysncErrorr( async(req , res) =>{
    const {email , password} = req.body
   
    const user = await User.findOne({email});
  
    if (!user) {
      throw new AppError(
        "Email not found, please signup",
        400
      );
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.json({ message: "Invalid password" });
    }
  
    jwt.sign(
      { userId: user._id, name: user.userName, role: user.role },
      "secret_token",
      (error, token) => {
        res.json({ message: "Login Successfully", token });
      }
    );
})
