import React from 'react';
import ManageCourseCard from './ManageCourseCard';
import img1 from "../../../../assets/Images/Blog/1.png";
import avatar3 from "../../../../assets/Images/Avatar2.png";
import { TCourse } from './manageCourse.types';

// Course dummy data
const coursesData : TCourse[] = [
  {
    image: img1,
    category: "Development",
    title: "Complete Web Development",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi deleniti autem hic fugit ipsam, sint.",
    instructorName: "Rahul Sutradhar",
    instructorTitle: "Developer & Lead Instructor",
    instructorAvatar: avatar3,
    enrolledCount: 2000,
    daysLeft: 10,
    price: 55,
  },
  {
    image: img1,
    category: "Marketing",
    title: "Complete Web Development",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi deleniti autem hic fugit ipsam, sint.",
    instructorName: "Rahul Sutradhar",
    instructorTitle: "Developer & Lead Instructor",
    instructorAvatar: avatar3,
    enrolledCount: 2000,
    daysLeft: 10,
    price: 55,
  },
  {
    image: img1,
    category: "Design",
    title: "Complete Web Development",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi deleniti autem hic fugit ipsam, sint.",
    instructorName: "Rahul Sutradhar",
    instructorTitle: "Developer & Lead Instructor",
    instructorAvatar: avatar3,
    enrolledCount: 2000,
    daysLeft: 10,
    price: 55,
  },
  {
    image: img1,
    category: "Management",
    title: "Complete Web Development",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi deleniti autem hic fugit ipsam, sint.",
    instructorName: "Rahul Sutradhar",
    instructorTitle: "Developer & Lead Instructor",
    instructorAvatar: avatar3,
    enrolledCount: 2000,
    daysLeft: 10,
    price: 55,
  },
  {
    image: img1,
    category: "Programming",
    title: "Complete Web Development",
    rating: 5,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae animi deleniti autem hic fugit ipsam, sint.",
    instructorName: "Rahul Sutradhar",
    instructorTitle: "Developer & Lead Instructor",
    instructorAvatar: avatar3,
    enrolledCount: 2000,
    daysLeft: 10,
    price: 55,
  },
];

const ManageCourses: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10">
      {coursesData.map((course, index) => (
        <ManageCourseCard
          key={index}
          course={course}
        />
      ))}
    </div>
  );
};

export default ManageCourses;
