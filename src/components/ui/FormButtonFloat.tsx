import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import requestIcon from "../../assets/icons/icons8-request.png";

interface FormButtonFloatProps {
  scrollToContact: () => void;
}

const FormButtonFloat: React.FC<FormButtonFloatProps> = ({
  scrollToContact,
}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.button
      onClick={scrollToContact}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: showButton ? 1 : 0,
        scale: showButton ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-10 right-3 h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center ${
        showButton ? "block" : "hidden"
      }`}
    >
      <img src={requestIcon} alt="request" className="w-7 h-7" />
    </motion.button>
  );
};

export default FormButtonFloat;
