import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
type Props = {
  number: string;
};
const WhatsAppButton = (props: Props) => {
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowWhatsAppButton(true);
      } else {
        setShowWhatsAppButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${props.number}`, "_blank");
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: showWhatsAppButton ? 1 : 0,
        scale: showWhatsAppButton ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-28 right-3 h-14 w-14 rounded-full bg-secondary text-white flex items-center justify-center ${
        showWhatsAppButton ? "block" : "hidden"
      }`}
      onClick={openWhatsApp}
    >
      <FaWhatsapp className="text-3xl" />
    </motion.button>
  );
};

export default WhatsAppButton;
