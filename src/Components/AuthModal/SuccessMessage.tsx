import Confetti from "react-confetti";
import success from "../../assets/Icons/success.svg";
import React from "react";
import { TSignupLoginModalTypes } from "./Signup";

const SuccessMessage : React.FC<TSignupLoginModalTypes> = ({ setModalType }) => {
  return (
    <div className="font-Roboto">
      <Confetti width={500} height={550} />

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center">
        <img src={success} alt="" className="size-[200px]"/>
        </div>
        <div>
        <h1 className="text-2xl font-semibold text-neutral-55 text-center">Registration Successfull!!</h1>
        <p className="text-sm max-w-[345px] text-gray-800 mx-auto text-center mt-1">Explore & learn awesome skills today!</p>
        </div>

        <button onClick={() => setModalType("Login")} className="bg-white hover:bg-primary-10 transition duration-300 hover:text-white border border-primary-10/50 px-4 py-3 text-body-text max-w-[150px] mx-auto rounded-md">Sign In Now</button>
      </div>
    </div>
  );
};

export default SuccessMessage;
