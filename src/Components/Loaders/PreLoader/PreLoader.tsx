import logo from "../../../assets/Images/Logo/fabicon.png"

const PreLoader = () => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center h-screen">
            <img className="animate-pulse" src={logo} alt="genius-grove-logo" />
            <h1 className="text-2xl font-bold text-gray-600 font-Roboto text-center">Genius Grove</h1>
        </div>
    );
};

export default PreLoader;