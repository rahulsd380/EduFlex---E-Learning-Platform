import onlineClass from "../../../assets/Icons/Overview icons/online-class.svg"
import teacher from "../../../assets/Icons/Overview icons/teacher.svg"
import certificate from "../../../assets/Icons/Overview icons/certificate.svg"
import userGroup from "../../../assets/Icons/Overview icons/user-group.svg"


const Overview = () => {
    const overviewInfo = [
        {
            icon : onlineClass,
            title : ["50+", "Online Courses"]
        },
        {
            icon : teacher,
            title : ["Top", "Instructors"]
        },
        {
            icon : certificate,
            title : ["Online", "Certifications"]
        },
        {
            icon : userGroup,
            title : ["4000+", "Membership"]
        },
    ]
    return (
        <div className="bg-blue-500 mb-10 font-Roboto ">
            <div className="max-w-[2000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
            {
                overviewInfo.map((info, index) => 
                    <div key={index} className={` mx-auto pr-6 hover:bg-blue-600 px-4 cursor-pointer transition duration-500 ${index !== overviewInfo.length - 1 ? 'border-b border-r-0 lg:border-b-0 md:border-r  lg:border-r border-[#3DB1EA]' : ''}`}>
                <div className="flex flex-col lg:flex-row items-center gap-3 py-7">
                <div className="bg-[#5793F6] w-20 h-20 rounded-full flex justify-center items-center">
                    <img className="w-12" src={info?.icon} alt="" />
                </div>

                <h1 className="hidden lg:block font-normal text-white text-xl">{info?.title[0]} <br /> {info?.title[1]}</h1>
                <h1 className="block lg:hidden font-normal text-white text-xl">{info?.title[0]} {info?.title[1]}</h1>
                </div>
            </div>
                )
            }
            </div>
        </div>
    );
};

export default Overview;