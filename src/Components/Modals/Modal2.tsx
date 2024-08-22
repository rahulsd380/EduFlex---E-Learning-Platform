import { Dispatch, ReactNode, SetStateAction } from "react";

export type ModalProps = {
  children: ReactNode;
  openModal2: boolean;
  setOpenModal2: Dispatch<SetStateAction<boolean>>;
  classNames?: string;
};

const Modal2: React.FC<ModalProps> = ({
  children,
  openModal2,
  setOpenModal2,
  classNames,
}) => {
  return (
    <div className="mx-auto flex items-center justify-center w-full font-Roboto">
      <div
        onClick={() => setOpenModal2(false)}
        className={`w-full fixed z-[100] flex items-center justify-center ${
          openModal2 ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute overflow-y-auto rounded-lg bg-white p-6 drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openModal2
              ? "opacity-1 translate-y-0 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          } ${classNames}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal2;
