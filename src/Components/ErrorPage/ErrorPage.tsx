import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
      <div className="flex justify-center gap-12">
        <h1 className="text-[330px] leading-none font-bold text-[#20B486]">4</h1>

        <div className="size-80 bg-[#e0f5eb] rounded-full flex items-center justify-center">
          <div className="size-60 bg-gradient-to-r from-[#a0f4bc] to-[#20B486] rounded-full"></div>
        </div>
        <h1 className="text-[330px] leading-none font-bold text-[#20B486]">4</h1>

      </div>

      <div className='flex flex-col justify-center mt-10'>
      <h1 className="text-3xl leading-none font-bold text-body-text text-center">Oh... This is not the way of heaven!</h1>
      <Link to={'/'} className="mt-6 px-4 py-3 bg-gradient-to-r from-[#238566] to-[#20B486] rounded-md text-white font-semibold max-w-[170px] mx-auto">
        Try Another Path
      </Link>
      </div>
    </div>
    );
};

export default ErrorPage;