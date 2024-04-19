import linkIcon from "../../assets/icons/external-link.png";
import "tailwindcss/tailwind.css";

const LinkSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-10 md:px-8 md:py-12 space-y-5 md:space-y-10">
      <div className="flex justify-center ">
        <a
          href="https://www.packages.siimedia.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-transparent border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark hover:border-primary transform transition duration-300 hover:scale-105  animate-shake"
        >
          <span className="mr-2">اكتشف خدماتنا الأخرى</span>
          <img src={linkIcon} alt="link" className="w-5 h-6" />
        </a>
      </div>
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-4">
        <p className="text-lg md:text-2xl font-header font-semibold text-gray-300 leading-8">
          اكتشف المزيد من خدماتنا الا محدودة بأفضل العروض وأعلى جوده <br />
          مع شركة{" "}
          <span className="font-bold font-sans text-white text-2xl">
            سيي ميديا
          </span>
        </p>
      </div>
    </div>
  );
};

export default LinkSection;
