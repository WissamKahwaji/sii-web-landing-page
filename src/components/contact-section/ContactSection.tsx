import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [mobileError, setMobileError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (mobile: string) => {
    setFormData(prevData => ({
      ...prevData,
      mobile,
    }));
    setMobileError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate mobile number
    if (
      !formData.mobile ||
      !/^\+?\d+$/.test(formData.mobile) ||
      formData.mobile.length <= 10
    ) {
      setMobileError("Invalid mobile number");
      return;
    }

    console.log(formData);
    try {
      const response = await fetch(
        `https://www.siipackagesback.siidevelopment.com/about/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            name: formData.firstName + " " + formData.lastName,
            companyName: formData.companyName,
            mobile: formData.mobile,
            message: formData.message,
            subject: `New Inquiry from ${formData.firstName} ${formData.lastName}`,
          }),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully");
        alert("Your Inquiry sent successfully!");
      } else {
        console.error("Failed to send email");
        alert("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send request. Please try again.");
    }
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      mobile: "",
      message: "",
    });
  };
  return (
    <div
      id="contactUs"
      className="py-1 md:p-16 w-full bg-primary/10"
      style={{ direction: "rtl" }}
    >
      <div className="w-[98%] m-auto max-w-[1400px]">
        <div className="grid grid-cols-1 pb-8 text-center pt-4">
          <h3 className="mb-4 md:text-2xl text-xl font-bold font-header text-primary capitalize">
            تواصل معنا الان !
          </h3>
          <p className="text-secondary max-w-xl mx-auto font-header  text-base md:text-lg">
            نحب أن نسمع منك! سنتواصل معك في أقرب وقت خلال 24 - 48 ساعة.
          </p>
          <p className=" text-gray-600 mt-2 text-sm md:text-lg">
            اتخذ قرار التغيير و تواصل مع فريق{" "}
            <span className="font-sans text-primary font-bold">
              سيي ميديا الاحترافي
            </span>
          </p>
        </div>
        <div className="mx-auto md:mx-auto my-5 md:my-10 w-[90%] md:w-1/2">
          <div className="border border-primary mt-2 md:mt-0 p-4 md:p-6 lg:p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 font-header text-secondary">
              تواصل معنا
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-12 gap-3 md:gap-5">
                <div className="col-span-6 mb-5">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="الاسم الأول"
                    required
                    className="w-full p-2 border border-gray-600 rounded h-10 outline-none bg-transparent focus:border-primary text-[15px]"
                  />
                </div>
                <div className="col-span-6 mb-5">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="اسم العائلة"
                    required
                    className="w-full p-2 border border-gray-600 rounded h-10 outline-none bg-transparent focus:border-primary text-[15px]"
                  />
                </div>
              </div>

              <div className="col-span-6 mb-5">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="اسم الشركة"
                  className="w-full p-2 border border-gray-600 rounded h-10 outline-none bg-transparent focus:border-primary text-[15px]"
                />
              </div>
              <div className="lg:col-span-6 mb-5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="الإيميل"
                  required
                  className="w-full p-2 border border-gray-600 rounded h-10 outline-none bg-transparent focus:border-primary text-[15px]"
                />
              </div>
              <div className="lg:col-span-6 mb-5">
                <PhoneInput
                  containerStyle={{ direction: "ltr" }}
                  country={"ae"}
                  value={formData.mobile}
                  onChange={handlePhoneChange}
                  inputProps={{ required: true, autoFocus: false }}
                  placeholder="رقم الجوال"
                  inputStyle={{
                    width: "100%",
                    border: "1px solid #4B5563",
                    borderRadius: "0.375rem",
                    fontSize: "15px",
                    outline: "none",
                    backgroundColor: "transparent",
                    direction: "ltr",
                  }}
                  buttonStyle={{
                    margin: 3,
                    direction: "ltr",
                  }}
                />
                {mobileError && (
                  <p className="text-red-500 text-sm">{mobileError}</p>
                )}
              </div>

              <div className="lg:col-span-6 mb-5">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-600 rounded h-28 outline-primary bg-transparent focus:border-primary text-[15px]"
                  placeholder="رسالتك"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary border border-white w-full text-white py-3 px-5 rounded-md hover:bg-primary transition-colors duration-300 delay-100 animate-pulse"
              >
                أرسل رسالة واحصل على العرض
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
