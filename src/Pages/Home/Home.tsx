// import Categories from "../../Components/Categories/Categories";
import FAQ from "../../Components/FAQ/FAQ";
import Hero from "../../Components/HeroSection/Hero";
// import Overview from "../../Components/HeroSection/Overview/Overview";
import Instructors from "../../Components/Instructors/Instructors";
import OurService from "../../Components/OurService/OurService";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
    return ( 
        <div>
            <Hero/>
            <PopularCourses/>
            <Testimonials/>
            <OurService/>
            <Instructors/>
            <FAQ/>
            {/* <Overview/> */}
            {/* <Categories/> */}
        </div>
    );
};

export default Home;