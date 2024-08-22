import shape from "../../../../../assets/Icons/shape.svg";
import remove from "../../../../../assets/Icons/remove.svg";


import JoditEditor from 'jodit-react';
import { Dispatch, SetStateAction, useRef } from 'react';
type TCourseContentProps={
  content : string;
  setContent : Dispatch<SetStateAction<string>>;
  contentError : string;
}

const CourseDescription : React.FC<TCourseContentProps> = ({content, setContent, contentError, tags,setTags}) => {
    const editor = useRef(null);

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

          {/* Tags */}
          <div className="flex flex-col gap-1 w-full">
                <p className="text-body-text font-medium text-sm">Tags</p>
                <div>
                  {/* Curriculum list */}
                  {tags.length > 0 && (
                    <div className="mb-2">
                      {tags.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 mb-1">
                          <img src={shape} alt="bullet" className="size-4" />
                          <p className="text-body-text font-medium text-sm">{item}</p>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(setTags, tags, index)}
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
                        handleAddItem(setTags, tags, e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              </div>



          <div className="flex flex-col gap-3">
                <p className="text-body-text font-medium text-sm">
                  Course Description
                </p>
                <JoditEditor
                  ref={editor}
                  value={content}
                  onChange={(newContent) => setContent(newContent)}
                />
                {contentError && (
                  <span className="text-warning-10 text-start">
                    {contentError}
                  </span>
                )}
              </div>
        </div>
    );
};

export default CourseDescription;