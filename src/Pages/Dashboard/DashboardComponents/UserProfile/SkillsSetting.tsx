
const SkillsSetting = ({skills}) => {
  // const skills = [
  //   "HTML",
  //   "CSS",
  //   "JavaScript",
  //   "React",
  //   "Node",
  //   "Express",
  //   "MongoDB",
  // ];
  return (
    <div className="flex flex-col gap-8 mt-10 font-Roboto">
      {/* Your skills */}
      <div className="bg-dark-5/20 border border-dark-10/30 p-3 rounded w-full">
        <p className="text-neutral-60 text-sm">Your Skills</p>
        <div className="flex flex-wrap items-center gap-4 mt-3">
          {
          skills.lenght > 0 ?
          skills.map((skill, index) => (
            <div
              key={index}
              className="p-1 bg-white rounded border border-neutral-55/50 text-body-text text-sm"
            >
              {skill}
            </div>
          ))
          :
          <p  className="text-body-text text-xs">No Skill Added</p>
          }
        </div>
      </div>

      {/* Add new skill */}
      <form className="flex flex-col gap-3 bg-dark-5/20 border border-dark-10/30 p-3 rounded w-full">
        <p className="text-neutral-60 text-sm">Add New Skill</p>
        <div className="flex gap-4">
          <input
            placeholder="Enter Skill"
            name="skill"
            type="text"
            className="w-full rounded bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-3 py-2 bg-primary-10 text-white rounded"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SkillsSetting;
