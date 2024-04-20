import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import BusinessIcon from "@mui/icons-material/Business";
import CarRentalRoundedIcon from "@mui/icons-material/CarRentalRounded";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import TitleAndButton from "../ui/TitleAndButton";
import sslIcon from "../../assets/icons/ssl.png";
import profileIcon from "../../assets/icons/profile.png";
import settingsIcon from "../../assets/icons/user.png";
import seoIcon from "../../assets/icons/seo-report.png";
import contentIcon from "../../assets/icons/research.png";
import trainingIcon from "../../assets/icons/training.png";
import contractIcon from "../../assets/icons/contract.png";
import contract1Icon from "../../assets/icons/contract1.png";
import programming from "../../assets/icons/programming.png";
import conding from "../../assets/icons/coding.png";
import folder from "../../assets/icons/folder.png";
import verified from "../../assets/icons/verified.png";
import easy from "../../assets/icons/easy.png";
import languageIcon from "../../assets/icons/languages.png";
import monitorIcon from "../../assets/icons/monitor.png";
import panel from "../../assets/icons/admin-panel.png";

import credit from "../../assets/icons/credit-card.png";
import tools from "../../assets/icons/tools.png";
// import dailyIcon from "../../assets/icons/24-hours-support.png";
import image2 from "../../assets/image24.png";
import Lottie from "lottie-react";
import daily from "../../assets/animated-icons/24.json";
interface ThirdSectionProps {
  scrollToContact: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ThirdSection: React.FC<ThirdSectionProps> = ({ scrollToContact }) => {
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const { ref: appTypeRef, inView: appTypeInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const appType = [
    {
      title: "المراكز طبية",
      icon: <LocalPharmacyIcon className="w-6 h-6 mx-2 text-secondary" />,
    },
    {
      title: "تجارة إلكترونية",
      icon: <ShoppingBagIcon className="w-6 h-6 mx-2 text-secondary" />,
    },
    {
      title: "المراكز التعليمية",
      icon: <AccountBalanceIcon className="w-6 h-6 mx-2 text-secondary" />,
    },
    {
      title: "الشحن والتوصيل",
      icon: <DeliveryDiningIcon className="w-6 h-6 mx-2 text-secondary" />,
    },
    {
      title: "الشركات العقارية",
      icon: <BusinessIcon className="w-6 h-6 mx-2 text-secondary" />,
    },
    {
      title: "تأجير السيارات",
      icon: <CarRentalRoundedIcon className="w-6 h-6 mx-2 text-secondary" />,
    },
    {
      title: "المراكز التجارية",
      icon: <StoreMallDirectoryIcon className="w-6 h-6 mx-2 text-secondary" />,
    },
    {
      title: "المطاعم",
      icon: <FoodBankIcon className="w-6 h-6 mx-2 text-secondary" />,
    },
    {
      title: "خدمات منزلية",
      icon: <HomeWorkRoundedIcon className="w-6 h-6 mx-2 text-secondary" />,
    },
    {
      title: "شركات التأمين",
      icon: <LocationCityRoundedIcon className="w-6 h-6 mx-2 text-secondary" />,
    },
  ];

  const features = [
    {
      title: "كود نظيف 100%",
      icon: programming,
    },
    {
      title: "أحدث أنواع البرمجيات",
      icon: conding,
    },
    {
      title: "مساحة غير محدودة",
      icon: folder,
    },
    {
      title: "ملكية تامة للعميل",
      icon: verified,
    },
    {
      title: "لوحة تحكم مرنة",
      icon: panel,
    },
    {
      title: "حلول الدفع والتوصيل",
      icon: credit,
    },
    {
      title: "24/7 صيانة وضمان",
      icon: tools,
    },
    {
      title: "شهادة تعريف أمان SSL",
      icon: sslIcon,
    },
    {
      title: "ندير لك الاستضافة والدومين و الميلات",
      icon: profileIcon,
    },
    {
      title: "جودة التصميم وسرعة الموقع",
      icon: settingsIcon,
    },
    {
      title: "تحسين الظهور على محرك البحث",
      icon: seoIcon,
    },
    {
      title: "سهولة في الاستخدام",
      icon: easy,
    },
    {
      title: "احصائيات وتقارير مفصلة",
      icon: monitorIcon,
    },
    {
      title: "يدعم اللغتين العربية و والإنجليزية",
      icon: languageIcon,
    },
    {
      title: "اختيار محتوى مناسب",
      icon: contentIcon,
    },
    {
      title: "نقوم بتدريبك مجانا",
      icon: trainingIcon,
    },
    {
      title: "نلتزم بالشفافية",
      icon: contractIcon,
    },
    {
      title: "عقد يحفظ حقوقك",
      icon: contract1Icon,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-slate-50" style={{ direction: "rtl" }}>
      <div className="bg-secondary/10 py-8 text-center space-y-6">
        <p className="text-primary text-2xl md:text-3xl font-bold font-header">
          ضمان غير محدود المدة
        </p>
        <div className="flex flex-row gap-x-2 justify-center items-center">
          <p className="font-header font-semibold text-secondary text-lg md:text-2xl">
            دعم فني{" "}
          </p>
          {/* <img
            src={dailyIcon}
            alt="24/7"
            className="w-10 h-10 md:w-14 md:h-14"
          /> */}
          <Lottie animationData={daily} className="w-16 h-16 md:w-20 md:h-20" />
          <p className="font-header font-semibold text-secondary text-lg md:text-2xl">
            تحديثات مستمرة
          </p>
        </div>
        <p className=" font-header text-gray-700 px-5 text-center md:px-16 text-base md:text-lg ">
          سواء كنت تسعى لإطلاق مشروع جديد أو ترغب في تحسين وجودك على الإنترنت،
          نحن هنا لتحويل أفكارك إلى واقع رقمي جذاب وفعّال. ابدأ اليوم واستمتع
          بتجربة{" "}
          <span className="text-primary font-semibold">موقع ويب استثنائية</span>{" "}
          <br />
          مع فريق{" "}
          <span className="font-sans text-primary font-bold text-2xl">
            سيي ميديا !
          </span>
        </p>
      </div>
      <div className="bg-primary/10 py-10 px-2 md:px-20">
        <p className="text-2xl font-header font-bold text-primary text-center px-2 md:px-0 mt-8">
          ضمن عقود موثقة تضمن لك انجاز مشروعك على أكمل وجه
        </p>
        <p className="text-base font-header font-bold text-secondary text-center px-2 md:px-0 mt-7 mb-12">
          لتحصل على تصميم متجانس يراعي الهوية و أساسيات التصميم <br />
          والعديد من المميزات الأخرى
        </p>
        <div
          className="grid grid-flow-row grid-cols-3 md:grid-cols-6 gap-8 md:gap-8 mt-8"
          ref={featuresRef}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center p-2 md:gap-y-5"
              variants={itemVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 md:w-10 md:h-10 text-primary"
              />
              <div className="border-t pt-2 h-8 md:h-16 border-secondary">
                <p className="text-[8.2px] md:text-base font-header text-primary font-bold text-center">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-lg md:text-lg font-header  text-gray-600 mt-6 md:mt-12 text-center ">
          استثمر في <span className="text-primary font-semibold">موقع ويب</span>{" "}
          فريد يبرزك بين المنافسين. <br />
          استعد لتحقيق أحلامك الرقمية <br />
          مع فريق{" "}
          <span className="font-sans text-primary font-bold">سيي ميديا</span>
        </p>
      </div>

      <div className="px-2 md:px-20 py-10" ref={appTypeRef}>
        <p className="text-center font-header text-2xl text-primary font-semibold">
          نقوم بإنشاء موقعك <br />
          بأي فكرة تخطر ببالك
        </p>
        <div className="p-4 bg-gradient-to-tr from-secondary to-secondary/70 rounded-sm mt-3 mx-5 md:mx-auto md:w-fit">
          <p className="text-center font-header font-semibold text-base md:text-base text-white">
            دعنا نحول أفكارك إلى واقع رقمي مبتكر يبرز علامتك التجارية ويجذب
            العملاء
          </p>
        </div>
        <div className="mt-14 grid grid-flow-row grid-cols-1 md:grid-cols-2 space-x-4">
          <img src={image2} alt="mobile" />
          <div className="mt-5 md:mt-0 mx-auto w-full md:mr-4">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
              {appType.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-3 my-2 "
                  variants={itemVariants}
                  initial="hidden"
                  animate={appTypeInView ? "visible" : "hidden"}
                >
                  {item.icon}
                  <p className="text-sm md:text-lg text-gray-800 font-header">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center font-header text-base md:text-2xl text-secondary font-semibold mt-6">
          وجميع مجالات الأعمال الأخرى
        </p>
      </div>
      <div className="mb-6">
        <TitleAndButton
          title="تواصل معنا الآن"
          scrollToContact={scrollToContact}
        />
      </div>
    </div>
  );
};

export default ThirdSection;
