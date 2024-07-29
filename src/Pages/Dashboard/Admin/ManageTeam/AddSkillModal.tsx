import cross from "../../../../assets/Icons/cross.svg";

interface AddSkillModalProps {
  addSkillModal: boolean;
  setAddSkillModal: (value: boolean) => void;
  currentSkill: string;
  setCurrentSkill: (value: string) => void;
  selectedSkills: string[];
  setSelectedSkills: (skills: string[]) => void;
}

const AddSkillModal: React.FC<AddSkillModalProps> = ({
  addSkillModal,
  setAddSkillModal,
  currentSkill,
  setCurrentSkill,
  selectedSkills,
  setSelectedSkills
}) => {
  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentSkill.trim() !== "") {
      setSelectedSkills([...selectedSkills, currentSkill]);
      setCurrentSkill("");
    }
  };

  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <div onClick={() => setAddSkillModal(false)} className={`fixed z-[100] flex items-center justify-center ${addSkillModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}>
        <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-80 rounded-lg bg-white p-4 drop-shadow-2xl dark:bg-gray-800 dark:text-white ${addSkillModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl text-neutral-60 font-bold capitalize">Add Skill</h1>
              <button className="size-7">
                <img onClick={() => setAddSkillModal(false)} src={cross} alt="" className="cursor-pointer" />
              </button>
            </div>
            <form onSubmit={handleAddSkill} className="flex flex-col gap-4">
              <input
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                placeholder="Enter Skill"
                name="skill"
                type="text"
                className="w-full rounded bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none"
              />

              <div className="flex justify-end">
                <button type="submit" className="px-3 py-2 bg-primary-10 text-white rounded">
                  Add
                </button>
              </div>
            </form>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">Selected Skills:</h2>
              <ul className="list-disc list-inside">
                {selectedSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSkillModal;
