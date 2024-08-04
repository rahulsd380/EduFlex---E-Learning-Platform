
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import PreLoader from '../../Components/Loaders/PreLoader/PreLoader';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    // useEffect(() => {
    //     window.addEventListener('load', () => {
    //         setIsPageLoading(false);
    //     })
    
    //     return () => {
    //       window.removeEventListener('load', () => {
    //         setIsPageLoading(false);
    //       })
    //     }
    //   },[isPageLoading]);


    useEffect(() => {
        const handleLoad = () => {
            setIsPageLoading(false);
        };
    
        window.onload = handleLoad;
    
        return () => {
          window.onload = null;
        };
      }, [isPageLoading]);
      
    return (
        isPageLoading ? 
        <PreLoader/>
        :
        <div className='bg-[#fafbfcd8]'>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;