import shape from "../../../../../assets/Icons/shape.svg";
import prerequisiteIcon from "../../../../../assets/Icons/Prerequisites.svg";
import learningObjectiveIcon from "../../../../../assets/Icons/learning-objectives.svg";
import remove from "../../../../../assets/Icons/remove.svg";


const CourseContent = ({courseCurriculum, setCourseCurriculum, prerequisites, setPrerequisites, learningObjectives, setLearningObjectives}) => {

    // Type for handleAddItem
const handleAddItem = (
    setter: React.Dispatch<React.SetStateAction<string[]>>, 
    state: string[],
    value: string
  ): void => {
    if (value.trim() !== "") {
      setter([...state, value]);
    }
  };
  
  const handleRemoveItem = (
    setter: React.Dispatch<React.SetStateAction<string[]>>, 
    state: string[],
    index: number
  ): void => {
    const updatedList = state.filter((_, i) => i !== index);
    setter(updatedList);
  };


    return (
        <div className="flex flex-col gap-4">
              {/* Course Curriculum */}
              <div className="flex flex-col gap-1 w-full">
                <p className="text-body-text font-medium text-sm">Course Curriculum</p>
                <div>
                  {/* Curriculum list */}
                  {courseCurriculum.length > 0 && (
                    <div className="mb-2">
                      {courseCurriculum.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 mb-1">
                          <img src={shape} alt="bullet" className="size-4" />
                          <p className="text-body-text font-medium text-sm">{item}</p>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(setCourseCurriculum, courseCurriculum, index)}
                            className="text-red-500"
                          >
                            <img src={remove} alt="" className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Input for adding curriculum */}
                  <input
                    type="text"
                    className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                    placeholder="Enter course curriculum."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddItem(setCourseCurriculum, courseCurriculum, e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              </div>

              {/* Prerequisites */}
              <div className="flex flex-col gap-1 w-full">
                <p className="text-body-text font-medium text-sm">Prerequisites</p>
                <div>
                  {/* Prerequisites list */}
                  {prerequisites.length > 0 && (
                    <div className="mb-2">
                      {prerequisites.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 mb-1">
                          <img src={prerequisiteIcon} alt="bullet" className="size-4" />
                          <p className="text-body-text font-medium text-sm">{item}</p>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(setPrerequisites, prerequisites, index)}
                            className="text-red-500"
                          >
                            <img src={remove} alt="" className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Input for adding prerequisites */}
                  <input
                    type="text"
                    className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                    placeholder="Enter course prerequisites."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddItem(setPrerequisites, prerequisites, e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              </div>

              {/* Learning Objectives */}
              <div className="flex flex-col gap-1 w-full">
                <p className="text-body-text font-medium text-sm">Learning Objectives</p>
                <div>
                  {/* Learning objectives list */}
                  {learningObjectives.length > 0 && (
                    <div className="mb-2">
                      {learningObjectives.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 mb-1">
                          <img src={learningObjectiveIcon} alt="bullet" className="size-4" />
                          <p className="text-body-text font-medium text-sm">{item}</p>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(setLearningObjectives, learningObjectives, index)}
                            className="text-red-500"
                          >
                            <img src={remove} alt="" className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Input for adding learning objectives */}
                  <input
                    type="text"
                    className="bg-dark-5/30 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
                    placeholder="Enter course learning objectives."
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddItem(setLearningObjectives, learningObjectives, e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              </div>
            </div>
    );
};

export default CourseContent;