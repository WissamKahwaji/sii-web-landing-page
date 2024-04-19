import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";

const ReviewSection = () => {
  const customerReviews = [
    {
      id: 1,
      content:
        "كان العمل مع Sii Media بمثابة تغيير في قواعد اللعبة بالنسبة لأعمالنا! لقد صمموا وطوروا موقعًا إلكترونيًا مذهلاً يعكس هوية علامتنا التجارية بشكل مثالي. لقد كان اهتمام الفريق بالتفاصيل والإبداع والخبرة الفنية رائعًا.",
      author: "آرم جروب",
      stars: 5,
    },
    {
      id: 2,
      content:
        "لقد قمنا بالطلب من شركة Sii Media لتجديد موقعنا القديم، ولا يمكننا أن نكون أكثر سعادة بالنتائج. استمع الفريق لمتطلباتنا وقدم موقعًا إلكترونيًا حديثًا وسريع الاستجابة فاق توقعاتنا. لقد كانوا متواصلين طوال العملية برمتها، مما سهل علينا تقديم الملاحظات والتعاون في عناصر التصميم. تلقى موقعنا الجديد العديد من الثناء من العملاء وعزز بشكل كبير تواجدنا على الإنترنت.",
      author: "باور سيفتي",
      stars: 4,
    },
    {
      id: 4,
      content:
        "لقد تواصلت مع Sii Media لتطوير مواقع التجارة الإلكترونية، وقد قدموا حلاً من الدرجة الأولى مصممًا خصيصًا لتلبية احتياجات أعمالنا. بدءًا من دمج بوابات الدفع وحتى تحسين قوائم المنتجات، كانت خبرتهم واضحة في كل خطوة على الطريق. أكثر ما أثار إعجابي هو التزامهم بالتسليم في الوقت المحدد وفي حدود الميزانية، وقد ارتفعت مبيعاتنا عبر الإنترنت منذ إطلاق الموقع الجديد",
      author: "شركة مونتانا",
      stars: 5,
    },
    {
      id: 5,
      content:
        "تذهب Sii Media إلى أبعد من ذلك عندما يتعلق الأمر بدعم العملاء. إنهم متاحون دائمًا لمعالجة استفساراتنا ومخاوفنا على الفور. إن التزامهم برضا العملاء أمر جدير بالثناء ويجعلهم متميزين في الصناعة. ويسعدنا أن يكون لهم دورنا شريك رقمي.",
      author: "شركة فالوريم للوساطة العقارية",
      stars: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
  };

  return (
    <div className="  w-full  bg-gradient-to-tr from-secondary/40 to-secondary/10 py-8">
      <div className="  text-black  w-3/4 mx-auto ">
        <p className="font-header font-bold text-2xl md:text-3xl text-primary text-center mb-2 md:mt-4">
          بعض آراء عملائنا
        </p>
        <p className="font-header font-semibold text-xs md:text-lg text-center mb-5 text-gray-700">
          اكتشف ما يقوله عملاؤنا عن تجاربهم معنا
        </p>
        <Slider {...settings} className="">
          {customerReviews.map(review => (
            <div
              key={review.id}
              className="text-start p-5 lg:px-14 lg:py-14 bg-gradient-to-r from-slate-200 to-slate-50 shadow-xl shadow-primary/10 rounded-xl "
              style={{ direction: "rtl" }}
            >
              <p
                className="md:mt-4 lg:mt-4 md:text-2xl lg:text-2xl font-bold font-header  "
                style={{ direction: "rtl" }}
              >
                {review.author}
              </p>
              <div className="flex justify-end mt-4">
                {Array.from({ length: review.stars }, (_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
              </div>
              <p
                className="mt-4 md:mt-4 text-xs md:text-2xl lg:mt-4 lg:text-2xl font-header leading-5"
                style={{ direction: "rtl" }}
              >
                {review.content}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSection;
