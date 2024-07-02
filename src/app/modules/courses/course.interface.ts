import { Types } from "mongoose";

export type TCourse = {
    title: string;
    description: string;
    price: number;
    instructor_id: Types.ObjectId;
    content: string[];
    category: string;
    tags: string[];
  }