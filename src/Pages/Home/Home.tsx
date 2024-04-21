import Categories from "../../Components/Categories/Categories";
import CompanyInfo from "../../Components/CompanyInfo/CompanyInfo";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Overview from "../../Components/HeroSection/Overview/Overview";

const Home = () => {

    return ( 
        <div>
            <HeroSection/>
            <Overview/>
            <Categories/>
            {/* <CompanyInfo/> */}
        </div>
    );
};

export default Home;