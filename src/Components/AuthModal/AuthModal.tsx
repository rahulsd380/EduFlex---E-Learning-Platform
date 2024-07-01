import { Dispatch, SetStateAction } from "react";
import Login from "./Login";
import crossBtn from "../../assets/Icons/Auth Modal/cross-green.svg";
import Signup from "./Signup";
import OTP from "./OTP";
// import crossBtn from "../../assets/Icons/Auth Modal/cross.svg";

export type TModalTypes = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  modalType: "Login" | "Signup" | "OTP" | "ForgotPassword";
  setModalType: Dispatch<SetStateAction<"Login" | "Signup" | "OTP">>;
};

const AuthModal: React.FC<TModalTypes> = ({
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
          className={`font-Roboto w-[529px] h-[575px] overflow-y-auto absolute rounded-2xl bg-white p-6 text-center drop-shadow-2xl  
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
          <div>
            <h1 className="text-secondary-800 text-[28px] font-bold text-center">
              <span className="bg-primary-10 px-2 text-white mr-3">
                {modalType === "Login"? "Login"
                  :
                  modalType === "Signup"? "Signup"
                  :
                  modalType === "OTP" ? "Verify"
                  : ""}
              </span>
              {modalType === "Login" || modalType === "Signup" ? "To EduFlex" : "OTP"}
            </h1>
          </div>

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
              <Login setModalType={setModalType} />
            ) : modalType === "Signup" ? (
              <Signup setModalType={setModalType} />
            ) : (
              <OTP setModalType={setModalType} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
