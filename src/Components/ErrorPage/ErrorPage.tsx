import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-screen'>
            <h1 className='text-rose-500 text-xl font-Roboto font-semibold text-center'>Page not found!!</h1> 

            <Link to={'/'} className='bg-primary-10 px-4 py-3 text-white rounded-md'>Back To Home</Link>
        </div>
    );
};

export default ErrorPage;