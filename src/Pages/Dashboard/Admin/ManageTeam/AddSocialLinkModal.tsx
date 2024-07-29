import cross from "../../../../assets/Icons/cross.svg";

const AddSocialLinkModal = ({ addSocialLinkModal, setAddSocialLinkModal, selectedUrls, setSelectedUrls, currentUrl, setCurrentUrl }) => {


  const handleAddUrl = (e) => {
    e.preventDefault();
    if (currentUrl.trim() !== "") {
      setSelectedUrls([...selectedUrls, currentUrl]);
      setCurrentUrl("");
    }
  };

  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <div onClick={() => setAddSocialLinkModal(false)} className={`fixed z-[100] flex items-center justify-center ${addSocialLinkModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}>
        <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-80 rounded-lg bg-white p-4 drop-shadow-2xl dark:bg-gray-800 dark:text-white ${addSocialLinkModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl text-neutral-60 font-bold capitalize">Add Social Links</h1>
              <button className="size-7">
                <img onClick={() => setAddSocialLinkModal(false)} src={cross} alt="" className="cursor-pointer" />
              </button>
            </div>
            <form onSubmit={handleAddUrl} className="flex flex-col gap-4">
              <input
              value={currentUrl}
              onChange={(e) => setCurrentUrl(e.target.value)}
                placeholder="Enter Social link"
                name="location"
                type="text"
                className="w-full rounded bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none"
              />

          <div className="flex justify-end">
              <button onClick={() => setAddSocialLinkModal(false)} className="px-3 py-2 bg-primary-10 text-white rounded">
                Done
              </button>
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSocialLinkModal;
