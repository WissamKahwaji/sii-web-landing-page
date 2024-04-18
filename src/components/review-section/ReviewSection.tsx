import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSection = () => {
  const customerReviews = [
    {
      id: 1,
      content:
        "كان العمل مع Sii Media بمثابة تغيير في قواعد اللعبة بالنسبة لأعمالنا! لقد صمموا وطوروا موقعًا إلكترونيًا مذهلاً يعكس هوية علامتنا التجارية بشكل مثالي. لقد كان اهتمام الفريق بالتفاصيل والإبداع والخبرة الفنية رائعًا.",
      author: "آرم جروب",
    },
    {
      id: 2,
      content:
        "لقد قمنا بالطلب من شركة Sii Media لتجديد موقعنا القديم، ولا يمكننا أن نكون أكثر سعادة بالنتائج. استمع الفريق لمتطلباتنا وقدم موقعًا إلكترونيًا حديثًا وسريع الاستجابة فاق توقعاتنا. لقد كانوا متواصلين طوال العملية برمتها، مما سهل علينا تقديم الملاحظات والتعاون في عناصر التصميم. تلقى موقعنا الجديد العديد من الثناء من العملاء وعزز بشكل كبير تواجدنا على الإنترنت.",
      author: "باور سيفتي",
    },
    // {
    //   id: 3,
    //   content:
    //     "تقدم Sii Media باستمرار محتوى عالي الجودة يلقى صدى لدى جمهورنا. فريقهم استباقي ومبدع ويفهم صوت علامتنا التجارية بشكل مثالي. إنه لمن المنعش العمل مع مثل هذا الشريك المحترف والموثوق. نتطلع إلى مواصلة تعاوننا!",
    //   author: "باي رونا",
    // },
    {
      id: 4,
      content:
        "لقد تواصلت مع Sii Media لتطوير مواقع التجارة الإلكترونية، وقد قدموا حلاً من الدرجة الأولى مصممًا خصيصًا لتلبية احتياجات أعمالنا. بدءًا من دمج بوابات الدفع وحتى تحسين قوائم المنتجات، كانت خبرتهم واضحة في كل خطوة على الطريق. أكثر ما أثار إعجابي هو التزامهم بالتسليم في الوقت المحدد وفي حدود الميزانية، وقد ارتفعت مبيعاتنا عبر الإنترنت منذ إطلاق الموقع الجديد",
      author: "شركة مونتانا",
    },
    {
      id: 5,
      content:
        "تذهب Sii Media إلى أبعد من ذلك عندما يتعلق الأمر بدعم العملاء. إنهم متاحون دائمًا لمعالجة استفساراتنا ومخاوفنا على الفور. إن التزامهم برضا العملاء أمر جدير بالثناء ويجعلهم متميزين في الصناعة. ويسعدنا أن يكون لهم دورنا شريك رقمي.",
      author: "شركة فالوريم للوساطة العقارية",
    },
    // Add more reviews as needed
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
    <div className="relative w-full h-[340px] md:h-[450px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/80 to-purple-400 z-1"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-2 w-3/4 mx-auto">
        <p className="font-header font-bold text-2xl md:text-3xl text-primary text-center mb-2 md:mt-4">
          بعض آراء عملائنا
        </p>
        <p className="font-header font-semibold text-xs md:text-lg text-center mb-5 text-gray-300">
          اكتشف ما يقوله عملاؤنا عن تجاربهم معنا من خلال تقييمات العملاء الثاقبة
          هذه
        </p>
        <Slider {...settings}>
          {customerReviews.map(review => (
            <div
              key={review.id}
              className="text-start p-3 lg:px-14 lg:py-14"
              style={{ direction: "rtl" }}
            >
              <p
                className="md:mt-4 lg:mt-4 md:text-2xl lg:text-2xl font-bold font-header  "
                style={{ direction: "rtl" }}
              >
                {review.author}
              </p>
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
