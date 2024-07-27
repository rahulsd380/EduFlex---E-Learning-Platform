import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo/logo.png";
import location from "../../assets/Icons/location.svg";
import phone from "../../assets/Icons/phone.svg";
import email from "../../assets/Icons/email.svg";
import { footerItems, paymentMethods } from "./footerConstants";
import SocialMediaILinks from "./SocialMediaLinks";

const Footer = () => {

  return (
    <div className="bg-[#222222] mt-20">
      <footer className="max-w-[1500px] w-[90%] mx-auto px-8 md:px-0 py-8 md:py-14 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between gap-7">

        
        <div className="flex flex-col gap-8">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} alt="spotify-hub" className="size-20" />
            <h1 className="font-Roboto text-xl md:text-4xl font-bold text-neutral-5">
              EduFlex
            </h1>
          </Link>
          <p className="text-neutral-40 text-sm max-w-[400px]">
          EduFlex provides powerful tools to manage courses, users, and content, ensuring an efficient and engaging educational journey. Join EduFlex to elevate your learning.
          </p>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <img
                src={location}
                alt="location-icon"
                className="size-5"
              />
              <p className="text-neutral-40">Cumilla-3501, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={phone} alt="location-icon" className="size-5" />
              <a href="tel:+880 1608249337" className="text-neutral-40 hover:underline">+880 1608249337</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={email} alt="location-icon" className="size-5" />
              <p className="text-neutral-40">rahulsd380@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-7 md:gap-20">

        

        <div className="flex flex-col md:flex-row gap-7 md:gap-20">
          {footerItems.map((item, index) => (
            <ul key={index} className="flex flex-col gap-4 md:gap-8">
              <h1 className="font-Roboto text-[18px] font-bold text-neutral-5">
                {item.title}
              </h1>
              <li className="flex flex-col gap-4 text-neutral-40 text-sm">
                {item.items.map(({ label, path }) => (
                  <Link to={`/${path}`} className="hover:underline">
                    {label}
                  </Link>
                ))}
              </li>
            </ul>
          ))}
        </div>

          {/* Newsletter section */}
        <div className="">
          <ul className="flex flex-col gap-4 md;gap-8">
            <h1 className="font-Roboto text-[18px] font-bold text-neutral-5">
              Join Our Newsletter Now
            </h1>
            <li className="flex flex-col gap-3 text-neutral-40 text-sm">
              <p className="hover:underline">
                Get E-mail updates about our latest shop and special offers.
              </p>
            </li>

            {/* Subscribe input field */}  
            <li className="bg-[#2B2B2B] px-4 py-3 rounded-[100px] max-w-full md:max-w-[270px] xl:max-w-[400px] border border-primary-10 transition duration-300 ease-in-out flex items-center justify-between gap-3">
            <input
                type="text"
                placeholder="Enter your e-mail"
                className="bg-[#2B2B2B] focus:outline-none text-neutral-40 w-full"
              />
              <label htmlFor="email" className="text-primary-10 cursor-pointer text-sm font-semibold">
                SUBSCRIBE
              </label>
            </li>

            {/* Social icons */}
            <div className="flex justify-center md:justify-start">
            <SocialMediaILinks/>
            </div>
          </ul>
        </div>

        </div>

        </div>

        <hr className="border border-neutral-55"/>

        {/* Copyright and payment options */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
          <p className="text-neutral-40 text-sm">Copyright © 2018 Plazathemes. All Rights Reserved</p>
          <div className="flex items-center gap-3">
                {
                  paymentMethods.map((payment, index) => (
                    <a key={index} href={payment.href}>
                      <img src={payment.icon} alt="" className="size-14" />
                    </a>
                  ))
                }
          </div>
        </div>


      </footer>
    </div>
  );
};

export default Footer;

