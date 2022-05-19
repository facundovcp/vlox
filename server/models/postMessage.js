import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  category: String,
  postImg: String,
  tags: [String],
  upVotes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//Create Posts model base on postSchema
const postMessage = mongoose.model("PostMessage", postSchema);

export default postMessage;
