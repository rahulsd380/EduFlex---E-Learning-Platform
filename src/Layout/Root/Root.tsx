import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import PreLoader from '../../Components/Loaders/PreLoader/PreLoader';

const Root = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsPageLoading(false)
        }, 2000)
    }, []);
    return (
        isPageLoading ? 
        <PreLoader/>
        :
        <div className='bg-[#fafbfcd8]'>
            {/* <Navbar/> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;