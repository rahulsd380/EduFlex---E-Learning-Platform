import { AiOutlineMenu } from "react-icons/ai";

const HamburgerMenu = (): JSX.Element => {
    return (
        <div>
            <AiOutlineMenu className="cursor-pointer text-2xl hover:text-blue-500 transition duration-300"/>
        </div>
    );
};

export default HamburgerMenu;