import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/HeroSection/Hero";
import Overview from "../../Components/HeroSection/Overview/Overview";
import OurService from "../../Components/OurService/OurService";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";

const Home = () => {

    return ( 
        <div>
            {/* <Hero/> */}
            <PopularCourses/>
            <OurService/>
            {/* <Overview/> */}
            {/* <Categories/> */}
            <Footer/>
        </div>
    );
};

export default Home;