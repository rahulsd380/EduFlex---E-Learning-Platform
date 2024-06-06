import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import PreLoader from '../../Components/Loaders/PreLoader/PreLoader';

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
    //   },[isPageLoading])


    useEffect(() => {
        const handleLoad = () => {
            setIsPageLoading(false);
        };
    
        window.onload = handleLoad;
    
        // Cleanup function to remove the onload event if needed
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
        </div>
    );
};

export default Root;