import { BsTwitterX } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMediaIcons = [
    {
      icon: <MdWhatsapp className="h-6 w-6" />,
      link: "https://wa.me/+971542998757",
    },
    {
      icon: <FiFacebook className="h-6 w-6" />,
      link: "https://www.facebook.com/SiiMedia.ae",
    },
    {
      icon: <FiInstagram className="h-6 w-6" />,
      link: "https://www.instagram.com/siimedia/",
    },
    {
      icon: <FiLinkedin className="h-6 w-6" />,
      link: "https://www.linkedin.com/company/sii-media",
    },
    {
      icon: <FaSnapchat className="h-6 w-6" />,
      link: "https://t.snapchat.com/O0pjBC6s",
    },
    {
      icon: <BsTwitterX className="h-6 w-5" />,
      link: "https://twitter.com/siimedia",
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-secondary/50  to-secondary/20 text-center pt-3 pb-3 px-2 space-y-3">
      <p className="font-header font-bold text-primary text-sm md:text-lg mt-4 md:mt-8 mb-8">
        تفضلوا بزيارتنا أو التواصل عبر وسائل التواصل الإجتماعي
      </p>
      <div className="flex flex-row space-x-4 items-center justify-center">
        {socialMediaIcons.map((socialMedia, index) => (
          <Link
            key={index}
            to={socialMedia.link ?? ""}
            className="flex items-center text-primary hover:text-primary transition duration-300"
          >
            {socialMedia.icon}
          </Link>
        ))}
      </div>
      <div className="">
        <p className="font-body text-lg md:text-2xl text-gray-700 my-2">
          Dubai- Businesses Bay- Opal Tower- office 1608
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.802897644364!2d55.288398869188605!3d25.188018192405522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6831f6693c85%3A0xb5b269f7897f4978!2zT3BhbCBUb3dlciAtINin2YTYrtmE2YrYrCDYp9mE2KrYrNin2LHZiiAtINiv2KjZig!5e0!3m2!1sar!2sae!4v1709622847553!5m2!1sar!2sae"
          className="w-full md:w-3/4 mx-auto h-[350px] md:h-[470px]"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
