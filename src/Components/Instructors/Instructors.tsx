import InstructorsCard from "./InstructorsCard";

type TInstructors = {
  id: number;
  img: string;
  instructorName: string;
  title: string;
  companyInfo: string;
  fbProfile: string;
  linkedinProfile: string;
};

const Instructors = () => {
  const instructors : TInstructors[] = [
    {
      id: 1,
      img: "https://example.com/image1.jpg",
      instructorName: "Rahul Sutradhar",
      title: "Senior Developer",
      companyInfo:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      fbProfile: "https://www.facebook.com/rahulsd836",
      linkedinProfile: "https://www.linkedin.com/in/rahul-sutradhar-a99749202",
    },
    {
      id: 2,
      img: "https://example.com/image2.jpg",
      instructorName: "Jane Smith",
      title: "Product Manager",
      companyInfo:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      fbProfile: "https://facebook.com/janesmith",
      linkedinProfile: "https://linkedin.com/in/janesmith",
    },
    {
      id: 3,
      img: "https://example.com/image3.jpg",
      instructorName: "Alice Johnson",
      title: "UI/UX Designer",
      companyInfo:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      fbProfile: "https://facebook.com/alicejohnson",
      linkedinProfile: "https://linkedin.com/in/alicejohnson",
    },
  ];

  return (
    <div className="font-Roboto max-w-[1500px] w-[90%] mx-auto mt-20">
      <div className="flex flex-col gap-2 my-5 text-center">
        <p className="text-[#20B486] font-semibold text-base">Tutors</p>
        <h1 className="text-3xl text-[#101828] font-bold capitalize">
          Meet The Instructors
        </h1>
        <p className="text-[#667085] text-lg font-normal max-w-[700px] mx-auto">
          On Weekend UX, instructors from all over the world instruct millions
          of students. We offer the knowledge and abilities.
        </p>
      </div>

      <InstructorsCard instructors={instructors} />
    </div>
  );
};

export default Instructors;
