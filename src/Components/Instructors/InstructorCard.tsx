import { TInstructors } from "./Instructors";

type TInstructorProps = {
  instructor : TInstructors
}

const InstructorCard : React.FC<TInstructorProps> = ({instructor}) => {
  const {image, instructorName, role} = instructor;
  return (
    <div className="bg-white border border-dark-5 rounded-md font-Roboto flex flex-col gap-2 w-[250px]">
      <img src={image} alt="" className="rounded-t-md h-60" />

      <div className="p-2">
        <h1 className="text-xl text-neutral-55 font-semibold">
          {instructorName}
        </h1>
        <p className="text-body-text mt-[2px] text-sm">{role}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
