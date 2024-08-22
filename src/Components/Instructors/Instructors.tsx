import Heading from "../Heading";
import InstructorCard from "./InstructorCard";
import image from "../../assets/Images/profileImg.jpeg";

// type TInstructors = {
//   id: number;
//   img: string;
//   instructorName: string;
//   title: string;
//   companyInfo: string;
//   fbProfile: string;
//   linkedinProfile: string;
// };

export type TInstructors = {
  _id : string
  image : string;
  instructorName: string;
  role : string;
}

const Instructors = () => {
  const instructors : TInstructors[] = [
    {
      _id: "1",
      image: image,
      instructorName: "Rahul Sutradhar",
      role: "Senior Developer",
    },
    {
      _id: "2",
      image: image,
      instructorName: "Jane Smith",
      role: "Product Manager",
    },
    {
      _id: "3",
      image: image,
      instructorName: "Alice Johnson",
      role: "UI/UX Designer",
    },
  ];

  return (
    <div className="font-Roboto max-w-[1500px] w-[90%] mx-auto mt-20">
      <Heading
      subTitle="Tutors"
      heaing="Meet The Instructors"
      description="On Weekend UX, instructors from all over the world instruct millions of students. We offer the knowledge and abilities."
      />

      <div className="flex items-center flex-wrap gap-14 justify-center mt-10">
      {
        instructors.map(instructor => 

          <InstructorCard key={instructor._id} instructor={instructor}/>
        )
      }
      </div>

      {/* <InstructorsCard instructors={instructors} /> */}
    </div>
  );
};

export default Instructors;
