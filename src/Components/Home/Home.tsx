import { useEffect, useState } from "react";
import PreLoader from "../Loaders/PreLoader/PreLoader";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsPageLoading(false)
        }, 2000)
    }, [])
    return ( 
        isPageLoading ? 
        <PreLoader/>
         
        :
        <div>
            <Navbar/>
            
        </div>
    );
};

export default Home;