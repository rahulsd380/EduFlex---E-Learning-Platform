import { Dispatch, SetStateAction } from "react";
import Login from "./Login";
import crossBtn from "../../assets/Icons/Auth Modal/cross-green.svg";
import Signup from "./Signup";
import OTP from "./OTP";
import SuccessMessage from "./SuccessMessage";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import { TModalTypes } from "./authModal.types";
// import crossBtn from "../../assets/Icons/Auth Modal/cross.svg";

export type TAuthModalTypes = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  modalType: "Login" | "Signup" | "OTP" | "ForgotPassword" | "ResetPassword" | "Success";
  setModalType: TModalTypes
};

const AuthModal: React.FC<TAuthModalTypes> = ({
  openModal,
  setOpenModal,
  modalType,
  setModalType,
}) => {
  return (
    <div className="mx-auto flex items-center justify-center">
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100 `}
      >
        <div
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(107, 114, 128, 0.5) rgba(255, 255, 255, 0.1)",
          }}
          onClick={(e_) => e_.stopPropagation()}
          className={`font-Roboto w-[480px] h-[575px] overflow-y-auto absolute rounded-2xl bg-white p-6  drop-shadow-2xl  
            ${
              openModal
                ? "opacity-1 translate-y-0 duration-300"
                : "translate-y-20 opacity-0 duration-150"
            }`}
        >
          {/* Close button */}
          <div className="flex justify-end">
            <div
              onClick={() => setOpenModal(false)}
              className="cursor-pointer w-7"
            >
              <img src={crossBtn} alt="close-btn" className="w-7 h-7" />
            </div>
          </div>

          {/* Auth modal heading */}
          {
            modalType === "Success" ?
            ""
            :
            <div className="flex flex-col gap-1">
            <h1 className="text-secondary-800 text-[28px] font-bold text-center">
              <span className="bg-primary-10 px-2 text-white mr-3 py-1">
                {
                modalType === "Login"? "Login"
                  :
                  modalType === "Signup"? "Sign Up"
                  :
                  modalType === "ForgotPassword"? "Forgot"
                  :
                  modalType === "ResetPassword"? "Reset"
                  :
                  modalType === "OTP" ? "Verify"
                  : ""
                  }
              </span>
              {
                modalType === "Login" || modalType === "Signup"
                 ? ""
                  :
                  modalType === "ForgotPassword"? "Password?"
                  :
                  modalType === "ResetPassword"? "Password"
                  : "OTP"
              }
            </h1>

            <p className="text-sm max-w-[345px] text-gray-800 mx-auto text-center">Let's get started in a mission of being the gratest man your bloodline has ever seen!</p>
          </div>
          }
          

          <div className="flex flex-col gap-8 mt-8">
            {/* {modalType === "Login" || modalType === "Signup" ? (
              <div>
                Tab btn
                <div className="py-3 flex justify-center gap-8 rounded-lg border-[1px] border-secondary-100">
                  <button
                    onClick={() => setUserType("Student")}
                    className={`text-base font-500 text-center flex-1 ${
                      userType === "Student"
                        ? "text-primary-500"
                        : "text-secondary-400"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    onClick={() => setUserType("Employer")}
                    className={`text-base font-500 text-center flex-1 ${
                      userType === "Employer"
                        ? "text-primary-500"
                        : "text-secondary-400"
                    }`}
                  >
                    Employer
                  </button>
                </div>
              </div>
            ) : (
              ""
            )} */}

            {/* <Login/> */}

            {modalType === "Login" ? (
              <Login setModalType={setModalType} setOpenModal={setOpenModal} />
            ) : modalType === "Signup" ? (
              <Signup setModalType={setModalType} />
            ) : modalType === "OTP" ? (
              <OTP setModalType={setModalType} />
            ) : modalType === "ForgotPassword" ? (
              <ForgotPassword setModalType={setModalType} />
            ) : modalType === "ResetPassword" ? (
              <ResetPassword setModalType={setModalType} />
            ) : (
              <SuccessMessage setModalType={setModalType}/>
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
