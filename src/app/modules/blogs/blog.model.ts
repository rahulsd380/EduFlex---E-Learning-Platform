import mongoose, { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

const CommentSchema = new Schema({
  commenter: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
  appriciated : {type: Number, default : 0},
    disappreciated : {type: Number, default : 0},
});

const BlogSchema = new Schema<TBlog>({
  title: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  tags: { type: [String], required: true },
  blogImgUrl: { type: String },
  publishedAt: { type: Date, required: true },
  status: { type: String, enum: ["draft", "published"], default: 'draft' },
  blogContent: { type: String, required: true },
  comments: [CommentSchema]
});

const Blog = model<TBlog>('Blog', BlogSchema);
export default Blog;