import { motion } from "framer-motion";
import React from "react";
import Lottie from "lottie-react";
import animyIcon from "../../assets/animated-icons/form2.json";

interface FirstSectionProps {
  scrollToContact: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const FirstSection: React.FC<FirstSectionProps> = ({ scrollToContact }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
    },
  };

  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-tr from-primary/80 to-secondary/5 py-8 space-y-4 md:space-y-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="font-bold font-header text-2xl md:text-3xl text-primary px-2">
          موقعك الإلكتروني رحلتك الرقمية نحو المستقبل
        </p>
        <p className="text-gray-700  font-medium text-base md:text-lg mt-3">
          أجعل وجودك الرقمي لافتاً ومميزاً بأفضل موقع الكتروني بميزات لا حدود
          لها مع فريق{" "}
          <span className="text-secondary font-bold text-lg md:text-2xl">
            سيي ميديا المختص
          </span>
        </p>
        <motion.div
          className="flex flex-col items-center justify-center"
          onClick={e => {
            e.preventDefault();
            scrollToContact(e);
          }}
          variants={buttonVariants}
          whileHover="hover"
        >
          <Lottie animationData={animyIcon} className="h-52 w-60" />
          <div className="p-4 bg-gradient-to-tr from-secondary to-secondary/60 rounded-md animate-shake mx-5 md:mx-auto">
            <p className="text-white font-header font-bold text-lg md:text-2xl ">
              ادعم انطلاقة مشروعك بامتلاك لموقع الكتروني وعزز التفاعل مع عملائك
            </p>
            <p className="text-white font-header font-bold text-lg md:text-2xl ">
              لا تتردد بالتواصل معنا
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FirstSection;
