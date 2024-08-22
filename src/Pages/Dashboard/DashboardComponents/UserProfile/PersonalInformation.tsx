import profileImg from '../../../../assets/Images/profileImg.jpeg'

const PersonalInformation = () => {
    return (
        <div className='flex flex-col gap-4 mt-10 font-Roboto'>

        <div className='flex justify-center mb-5'>
        <div className="size-20 rounded-full bg-primary-15 flex justify-center items-center">
          <img src={profileImg} alt="" className="rounded-full size-20" />
        </div>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-5'>
            {/* Name */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text text-sm">Full Name</p>
          <input
          defaultValue={"Rahul Sutradhar"}
            type="text"
            id="name"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your full name"
          />
        </div>
            {/* Email */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text text-sm">Email</p>
          <input
          defaultValue={"rahulsd380@gmail.com"}
            type="text"
            id="email"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your full name"
          />
        </div>

           </div>

           {/* Address */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text text-sm">Address</p>
          <input
          defaultValue={"Kamalapur, Adarsha Sadar, Cumilla-3501, Bangladesh"}
            type="text"
            id="address"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your full name"
          />
        </div>

        <div className='flex flex-col md:flex-row items-center gap-5'>
            {/* City */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text text-sm">City</p>
          <input
          defaultValue={"Cumilla"}
            type="text"
            id="cumilla"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your full name"
          />
        </div>
            {/* State */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text text-sm">State</p>
          <input
          defaultValue={"rahulsd380@gmail.com"}
            type="text"
            id="state"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your full name"
          />
        </div>

           </div>

        <div className='flex flex-col md:flex-row items-center gap-5'>
            {/* ZIP Code */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text text-sm">ZIP Code</p>
          <input
          defaultValue={"3501"}
            type="text"
            id="zip_code"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your full name"
          />
        </div>
            {/* Country */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-body-text text-sm">Country</p>
          <input
          defaultValue={"Bangladesh"}
            type="text"
            id="country"
            className="bg-dark-5/20 border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded w-full"
            placeholder="Enter your full name"
          />
        </div>

           </div>


           <div className='flex items-center gap-4'>
           <button className="border border-dark-10/30 p-2 focus:border-primary-10 transition duration-300 focus:outline-none rounded bg-primary-10 text-white shadow-xl">
        Save Changes
      </button>
           <button className="border border-dark-10/30 p-2 transition duration-300 focus:outline-none rounded text-primary-10 bg-white">
        Cancel
      </button>
           </div>




        </div>
    );
};

export default PersonalInformation;