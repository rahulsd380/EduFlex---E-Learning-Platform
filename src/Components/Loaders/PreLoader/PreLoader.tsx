import logo from "../../../assets/Images/Logo/fabicon.png"

const PreLoader = () => {
    return (
        <div className="flex justify-center items-center animate-pulse h-screen">
            <img src={logo} alt="" />
        </div>
    );
};

export default PreLoader;