import React from "react";
import { motion } from "framer-motion";
// import requestIcon from "../../assets/icons/request-for-proposal.png";
import requestClickIcon from "../../assets/animated-icons/web-request.json";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";

type TitleAndButtonProps = {
  title: string;
  scrollToContact: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const TitleAndButton: React.FC<TitleAndButtonProps> = ({
  title,
  scrollToContact,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="font-header uppercase py-3 px-6 rounded text-white shadow-lg drop-shadow bg-primary border-2 border-white w-fit flex flex-row justify-center items-center mx-auto cursor-pointer delay-100 animate-wiggle "
      variants={buttonVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      onClick={e => {
        e.preventDefault();
        scrollToContact(e);
      }}
    >
      {/* <img src={requestIcon} alt={title} className="w-10 h-10 mr-2" /> */}
      <Lottie animationData={requestClickIcon} className="w-14 h-14 mr-2" />
      {title}
    </motion.div>
  );
};

export default TitleAndButton;
