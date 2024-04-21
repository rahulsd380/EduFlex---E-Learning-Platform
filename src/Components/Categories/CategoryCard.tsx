import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import development from "../../assets/Icons/Catrgory icons/development.svg";
import programming from "../../assets/Icons/Catrgory icons/programming.svg";
import education from "../../assets/Icons/Catrgory icons/education.svg";
import business from "../../assets/Icons/Catrgory icons/business.svg";
import language from "../../assets/Icons/Catrgory icons/language.svg";
import health from "../../assets/Icons/Catrgory icons/health-care.svg";

const CategoryCard = () => {
    const categoryCardDetails = [
        {
            iconBgColor: "#5793F6",
            icon : development,
            category : "Development",
            details : "'Development' embodies progress, growth, and improvement in economic, social, and personal domains, driving positive change globally.",
            link : "/development",
            hoverColor : 'rose-600'
        },
        {
            iconBgColor: "#5793F6",
            icon : programming,
            category : "Programming",
            details : "'Development' embodies progress, growth, and improvement in economic, social, and personal domains, driving positive change globally.",
            link : "/development",
            hoverColor : 'blue-600'
        },
        {
            iconBgColor: "#5793F6",
            icon : education,
            category : "Education",
            details : "'Development' embodies progress, growth, and improvement in economic, social, and personal domains, driving positive change globally.",
            link : "/development",
            hoverColor : 'green-500'
        },
        {
            iconBgColor: "#5793F6",
            icon : business,
            category : "Business & Entrepreneurship",
            details : "'Development' embodies progress, growth, and improvement in economic, social, and personal domains, driving positive change globally.",
            link : "/development",
            hoverColor : 'emerald-500'
        },
        {
          iconBgColor: "#5793F6",
          icon : language,
          category : "Language Learning",
          details : "'Development' embodies progress, growth, and improvement in economic, social, and personal domains, driving positive change globally.",
          link : "/development",
          hoverColor : 'orange-500'
      },
      {
        iconBgColor: "#5793F6",
        icon : health,
        category : "Health & Fitness",
        details : "'Development' embodies progress, growth, and improvement in economic, social, and personal domains, driving positive change globally.",
        link : "/development",
        hoverColor : 'purple-500'
    },
    ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-3 w-11/12 mx-auto">
            {categoryCardDetails.map((detail, index) => (
                <div
                    key={index}
                    className={`bg-white border border-gray-200 rounded-xl p-6 font-Roboto flex flex-col gap-3 transition duration-500 hover:bg-rose-600 hover:text-white text-gray-600`}
                >
                    <img className="w-20" src={detail.icon} alt="" />
                    <h1 className=" font-bold text-xl">{detail.category}</h1>
                    <p className="">{detail.details}</p>
                    <Link
                        to={`/${detail.link}`}
                        className="flex items-center gap-2 font-bold  hover:underline w-28"
                    >
                        Learn More <FaArrowRightLong />
                    </Link>
                </div>
            ))}
        </div>
  );
};

export default CategoryCard;
