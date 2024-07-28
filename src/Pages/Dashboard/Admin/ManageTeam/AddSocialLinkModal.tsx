import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import cross from "../../../../assets/Icons/cross.svg";

const AddSocialLinkModal = ({ addSocialLinkModal, setAddSocialLinkModal }) => {
  const [selectedValue, setSelectedValue] = useState("facebook");
  const [selectedIcon, setSelectedIcon] = useState(<FaFacebook />);
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = [
    { name: 'Facebook', value: 'facebook', icon: <FaFacebook /> },
    { name: 'LinkedIn', value: 'linkedin', icon: <FaLinkedin /> },
    { name: 'Instagram', value: 'instagram', icon: <FaInstagram /> },
    { name: 'WhatsApp', value: 'whatsapp', icon: <FaWhatsapp /> },
    { name: 'Twitter', value: 'twitter', icon: <FaTwitter /> }
  ];

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  useEffect(() => {
    const selectedItem = items.find(item => item.value === selectedValue);
    if (selectedItem) {
      setSelectedIcon(selectedItem.icon);
    }
  }, [selectedValue]);

  return (
    <div className="mx-auto flex w-72 items-center justify-center">
      <div onClick={() => setAddSocialLinkModal(false)} className={`fixed z-[100] flex items-center justify-center ${addSocialLinkModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}>
        <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-80 rounded-lg bg-white p-4 drop-shadow-2xl dark:bg-gray-800 dark:text-white ${addSocialLinkModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl text-neutral-60 font-bold capitalize">Add Social Link</h1>
              <button className="size-7">
                <img onClick={() => setAddSocialLinkModal(false)} src={cross} alt="" className="cursor-pointer" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div ref={dropDownRef} className="relative mx-auto w-fit">
                <button onClick={() => setOpen((prev) => !prev)} className="w-full rounded bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none text-2xl">{selectedIcon}</button>
                <ul className={`${open ? 'h-16 overflow-y-scroll visible translate-y-0 duration-300' : 'invisible translate-y-4'} absolute top-12 z-50 w-full space-y-1 rounded-sm bg-sky-400 shadow-md`}>
                  {items.map((item, idx) => (
                    <li onClick={() => setSelectedValue(item.value)} key={idx} className={`cursor-pointer  rounded-sm p-2 text-body-text ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:bg-sky-500`}>
                      {item.icon}
                    </li>
                  ))}
                </ul>
              </div>

              <input
                placeholder="Social link"
                defaultValue={"www.facebook.com"}
                name="location"
                type="text"
                className="w-full rounded bg-dark-5/40 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none"
              />
            </div>
            <div className="flex justify-end">
              <button onClick={() => setAddSocialLinkModal(false)} className="px-3 py-2 bg-primary-10 text-white rounded">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSocialLinkModal;
