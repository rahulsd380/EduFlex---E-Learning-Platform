import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const Profile: React.FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result);
      };
      reader.readAsDataURL(files[0]);
      setFile(files[0]);
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative flex w-full h-[200px] rounded-lg bg-neutral-40">
        {image ? (
          <img
            src={image as string}
            alt="Profile"
            className="rounded-lg size-full object-cover"
          />
        ) : ( 
          <label htmlFor="file-input" className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:cursor-pointer">
            No Image
          </label>
        )}
        <label htmlFor="file-input">
          <div className="absolute size-8 bottom-0 -top-2 -right-2 bg-white border border-neutral-40 hover:bg-neutral-20 transition duration-300 hover:shadow-inner p-1 rounded-full cursor-pointer flex items-center justify-center">
            <FaPencilAlt className="text-gray-700 text-sm" />
          </div>
        </label>
        <input
          id="file-input"
          type="file"
          className="hidden"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default Profile;
