export type TComment = {
  _id:string,
  commenter: string,
    comment: string,
    commentedAt: string,
    appriciated:number,
    disappreciated:number
}

export type TBlog = {
  _id: string;
  title: string;
  category: string;
  author: string;
  tags: string[];
  blogImgUrl: string;
  publishedAt: string;
  status: "draft" | "published";
  blogContent: string;
  comments : TComment[];
};