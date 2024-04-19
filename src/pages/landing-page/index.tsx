import { useRef } from "react";
import ContactSection from "../../components/contact-section/ContactSection";
import LinkSection from "../../components/link-section/LinkSection";
import FirstSection from "../../components/first-section/FirstSection";
import ReviewSection from "../../components/review-section/ReviewSection";
import SecondSection from "../../components/second-section/SecondSection";
import SamplesSection from "../../components/sample-section/SamplesSection";
import ThirdSection from "../../components/third-section/ThirdSection";
import Timer from "../../components/timer/Timer";

const LandingPage = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <FirstSection scrollToContact={scrollToContact} />

      <SecondSection scrollToContact={scrollToContact} />
      <SamplesSection scrollToContact={scrollToContact} />
      <ThirdSection scrollToContact={scrollToContact} />
      <ReviewSection />
      <div ref={contactSectionRef}>
        <ContactSection />
      </div>
      <LinkSection />
      <Timer />
    </div>
  );
};

export default LandingPage;
