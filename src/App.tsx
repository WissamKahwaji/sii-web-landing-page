import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./layouts/header";
import { useEffect } from "react";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import Footer from "./layouts/footer";
import FormButtonFloat from "./components/ui/FormButtonFloat";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when pathname changes
  }, [pathname]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contactUs");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar />

      <main className="mt-[89px] md:mt-[97px] lg:mt-[117px] ">
        <Outlet />
        <WhatsAppButton number={"+971542998757"} />
        <FormButtonFloat scrollToContact={scrollToContact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
