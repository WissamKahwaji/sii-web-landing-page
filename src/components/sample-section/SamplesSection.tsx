import app1 from "../../assets/samples/app1.png";
import app2 from "../../assets/samples/app2.png";
import app3 from "../../assets/samples/app3.png";
import app4 from "../../assets/samples/app4.png";
import app5 from "../../assets/samples/app5.png";
import app6 from "../../assets/samples/app6.png";
import app7 from "../../assets/samples/app7.png";
import app8 from "../../assets/samples/app8.png";
import app9 from "../../assets/samples/app9.png";
import app10 from "../../assets/samples/app10.png";
import app11 from "../../assets/samples/app11.png";
import app12 from "../../assets/samples/app12.png";
import app13 from "../../assets/samples/app13.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TitleAndButton from "../ui/TitleAndButton";
interface SamplesSectionProps {
  scrollToContact: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const SamplesSection: React.FC<SamplesSectionProps> = ({ scrollToContact }) => {
  const appSamples = [
    app1,
    app2,
    app3,
    app4,
    app5,
    app6,
    app7,
    app8,
    app9,
    app10,
    app11,
    app12,
    app13,
  ];
  const RESPONSIVE = {
    xxl: {
      breakpoint: { max: 5000, min: 1536 },
      items: 1,
    },
    xl: {
      breakpoint: { max: 1536, min: 1280 },
      items: 1,
    },
    lg: {
      breakpoint: { max: 1280, min: 1024 },
      items: 1,
    },
    md: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    sm: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
    },
    xs: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="bg-seconBackground px-3 text-center py-8">
      <p className="text-2xl md:text-3xl font-header font-bold text-primary text-center mb-5">
        بعض من أعمالنا
      </p>
      <p className="text-secondary font-header font-semibold text-base md:text-2xl">
        حقق تواجد فعال مع جمهورك من خلال متجرك الالكتروني المتكامل
      </p>
      <Carousel
        responsive={RESPONSIVE}
        infinite
        autoPlay
        className="pb-4 mt-8 md:mx-20 mx-4"
      >
        {appSamples.map((sample, index) => (
          <div className="object-cover rounded-md border border-primary hover:shadow-lg md:mx-2 h-[310px] md:h-[610px]">
            <img
              src={sample}
              alt={`sample-${index}`}
              className="w-full h-full object-contain transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </Carousel>
      <div className="p-4 w-fit bg-primary md:mx-auto mt-4 mb-6 mx-4 rounded-sm">
        <p className="font-header text-lg md:text-2xl text-white my-3 md:my-6 animate-pulse">
          انطلق نحو النجاح عبر الويب معنا. نحن شركاءك الموثوقين في تحويل فكرتك
          إلى واقع رقمي لا يُنسى.
        </p>
      </div>
      <TitleAndButton
        title="اطلب موقعك الخاص"
        scrollToContact={scrollToContact}
      />
    </div>
  );
};

export default SamplesSection;
