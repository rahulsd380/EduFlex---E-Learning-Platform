
type AddCourseModalTypes = {
    openAddCourseModal : boolean,
    setOpenAddCourseModal : (value: boolean) => void
}
const AddCourseModal: React.FC<AddCourseModalTypes> = ({openAddCourseModal, setOpenAddCourseModal}) => {
    
    return (
        <div className="mx-auto">
            <div onClick={() => setOpenAddCourseModal(false)} className={`fixed z-[100] w-screen ${openAddCourseModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute max-w-4xl w-full rounded-lg bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${openAddCourseModal ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>
                    
                    <h1 className="mb-2 text-2xl font-semibold">Launch New Course</h1>
                    
                </div>
            </div>
        </div>
    );
};

export default AddCourseModal;