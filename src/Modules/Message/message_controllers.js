import Message from "../../../DB/Model/Message/message.model.js";
import { catchAysncErrorr } from "../../Utils/ErrorHandling.js";

export const createMessage = catchAysncErrorr( async (req, res)=> {
  
     const {content , receiverId} = req.body

     const message = await Message.create({
        content , receiverId
     })
     res.json({message:"sussecc" , message})
     
})
export const getmessage = catchAysncErrorr( async (req, res)=> {
  
       const {receiverId} = req.body

        const messages = await Message.findOne({ receiverId });

        res.status(200).json({ messages });
     
})

export const deleteMessage = catchAysncErrorr( async (req, res)=> {
  
    const messageDelete = await Message.deleteOne();
    res.json({ message: "Message Deleted Successfully" });
     
})