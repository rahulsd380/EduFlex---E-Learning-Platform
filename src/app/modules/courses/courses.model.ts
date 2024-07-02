import { Schema, model } from 'mongoose';
import { TCourse } from './course.interface';


const CourseSchema = new Schema<TCourse>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  instructor_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: [
    {
      type: String,
      required: true
    }
  ],
  category: {
    type: String,
    required: true,
    trim: true
  },
  tags: [
    {
      type: String,
      trim: true
    }
  ],
});


const Course = model<TCourse>('Course', CourseSchema);
export default Course;
