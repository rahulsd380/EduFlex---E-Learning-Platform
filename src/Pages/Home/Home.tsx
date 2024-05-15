import Categories from "../../Components/Categories/Categories";
import CompanyInfo from "../../Components/CompanyInfo/CompanyInfo";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/HeroSection/Hero";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Overview from "../../Components/HeroSection/Overview/Overview";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";

const Home = () => {

    return ( 
        <div>
            <Hero/> 
            <PopularCourses/>
            <HeroSection/>
            <Overview/>
            <Categories/>
            <CompanyInfo/>
            <Footer/>
        </div>
    );
};

export default Home;