import logo from "../../../assets/Images/Logo/logo.png"

const PreLoader = () => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center h-screen">
            <img className="animate-pulse w-20" src={logo} alt="genius-grove-logo" />
            <h1 className="text-3xl font-bold text-gray-600 font-Roboto text-center">EduFlex</h1>
        </div>
    );
};

export default PreLoader;