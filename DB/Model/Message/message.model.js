import { mongoose } from "mongoose";

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    require: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Message = mongoose.model("message", messageSchema);

export default Message;
