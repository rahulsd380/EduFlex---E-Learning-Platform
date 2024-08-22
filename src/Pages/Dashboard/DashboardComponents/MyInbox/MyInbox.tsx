import { Link } from "react-router-dom";


const MyInbox = () => {
    return (
        <div className='bg-white shadow-md rounded-lg p-4 w-full font-Roboto flex flex-col gap-5'>
            <div className="flex items-center justify-between border-b border-dark-5 pb-2">
           <h1 className="text-xl text-body-text font-semibold">My Inbox</h1>
           <Link to={"/"} className="text-body-text text-sm hover:underline">See All</Link>
           </div>

           {
            [1,2,3].map(item => 

                <div className="flex gap-3 w-full border-b border-neutral-40/30 pb-2">
                <div className="size-10 rounded-full bg-neutral-55/20"></div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-60 font-medium">Rahul Sutradhar</p>
                    <p className="text-neutral-60 text-sm">August 9</p>
                  </div>
                  <p className="text-body-text text-xs">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            )
           }


        </div>
    );
};

export default MyInbox;