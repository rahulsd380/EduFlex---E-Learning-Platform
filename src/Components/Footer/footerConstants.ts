import visa from "../../assets/Icons/Payment Methods/visa.svg";
import mastercard from "../../assets/Icons/Payment Methods/mastercard.svg";
import skrill from "../../assets/Icons/Payment Methods/skrill.svg";
import stripe from "../../assets/Icons/Payment Methods/stripe.svg";
import googlePay from "../../assets/Icons/Payment Methods/google-pay.svg";


import facebook from "../../assets/Icons/Sicial Media/facebook.svg";
import linkedin from "../../assets/Icons/Sicial Media/linkedin.svg";
import instagram from "../../assets/Icons/Sicial Media/instagram.svg";
import twitter from "../../assets/Icons/Sicial Media/twitter.svg";
import youtube from "../../assets/Icons/Sicial Media/youtube.svg";
import whatsapp from "../../assets/Icons/Sicial Media/whatsapp.svg";


export const footerItems = [
  {
    title: "Important Links",
    items: [
      {
        label: "About Us",
        path: "about-us",
      },
      {
        label: "All Products",
        path: "all-products",
      },
      {
        label: "Cart",
        path: "cart",
      },
      {
        label: "Manage products",
        path: "dashboard",
      },
    ],
  },
  {
    title: "Important Links",
    items: [
      {
        label: "My Orders",
        path: "my-orders",
      },
      {
        label: "Terms & Conditions",
        path: "terms-conditions",
      },
      {
        label: "Privacy Policy",
        path: "privacy-policy",
      },
      {
        label: "Returns & Exchanges",
        path: "returns-exchanges",
      },
    ],
  },
];

export const socialMediaIcons = [
  {
    icon: facebook,
    href: "https://www.facebook.com",
    bgColor: "#3b5998",
  },
  {
    icon: linkedin,
    href: "https://www.linkedin.com",
    bgColor: "#0077b5",
  },
  {
    icon: instagram,
    href: "https://www.instagram.com",
    bgColor: "#e1306c",
  },
  {
    icon: twitter,
    href: "https://www.twitter.com",
    bgColor: "#1da1f2",
  },
  {
    icon: youtube,
    href: "https://www.youtube.com",
    bgColor: "#ff0000",
  },
  {
    icon: whatsapp,
    href: "https://www.whatsapp.com",
    bgColor: "#25d366",
  },
];

export const paymentMethods = [
  {
    icon: visa,
    href: "",
  },
  {
    icon: mastercard,
    href: "",
  },
  {
    icon: skrill,
    href: "",
  },
  {
    icon: stripe,
    href: "",
  },
  {
    icon: googlePay,
    href: "",
  },
];
