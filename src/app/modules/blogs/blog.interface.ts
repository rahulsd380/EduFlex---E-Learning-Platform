import mongoose from "mongoose";

type TComment = {
    commenter: mongoose.Schema.Types.ObjectId;
    comment: string;
    commentedAt: Date;
    appriciated : number;
    disappreciated : number;
  };

export type TBlog = {
    title : string;
    category : string;
    author : mongoose.Schema.Types.ObjectId;
    tags : string[];
    blogImgUrl : string;
    publishedAt : Date;
    status : 'draft' | 'published';
    blogContent : string;
    comments? : TComment[];
};