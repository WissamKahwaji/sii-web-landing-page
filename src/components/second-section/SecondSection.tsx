import { motion } from "framer-motion";
import TitleAndBody from "../ui/TitleAndBody";
// import vedio from "../../assets/vedio.mp4";
import TitleAndButton from "../ui/TitleAndButton";

interface SecondSectionProps {
  scrollToContact: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const SecondSection: React.FC<SecondSectionProps> = ({ scrollToContact }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.3, // Add a slight delay for stagger effect
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      className="px-5 md:px-10 py-10 bg-gradient-to-r from-slate-200 to-slate-50"
      style={{ direction: "rtl" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center">
        <motion.p
          className="text-secondary font-semibold font-header text-base md:text-2xl leading-relaxed"
          variants={itemVariants}
        >
          اجذب العملاء بتجربة موقع ويب استثنائية. دعنا نبني لك منصة رقمية مذهلة
          تعكس مدى ابتكار عملك.. اختر موقعك الآن من انواع تطبيقات المواقع
          التالية
        </motion.p>
      </div>
      <div className="my-8 ">
        {/* <video
          controls
          className="max-w-full md:h-[450px] mx-auto"
          src={vedio}
          typeof="video/mp4"
          muted
          autoPlay
        ></video> */}
      </div>
      <TitleAndButton
        title="صمم موقعك الآن"
        scrollToContact={scrollToContact}
      />
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 mt-12 gap-y-8 md:gap-y-0">
        <motion.div variants={itemVariants}>
          <TitleAndBody
            title="الموقع التعريفي"
            body="هو تواجد مباشر وأساسي عبر الإنترنت يعمل بمثابة تمثيل رقمي لشخص أو شركة أو مؤسسة أو مشروع. ويتكون عادةً من عدد قليل من صفحات الويب التي تحتوي على معلومات أساسية حول الكيان الذي يمثله. تم تصميم مواقع الويب الأساسية لتوفير التفاصيل الأساسية وتسهيل التواصل مع الزوار، بدون وظائف معقدة أو ميزات تفاعلية موجودة في تطبيقات الويب الأكثر تقدمًا."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TitleAndBody
            title="الموقع الديناميكي مثل Facebook & Netflix"
            body="هو نوع من مواقع الويب التي تعرض محتوى مختلفًا للمستخدمين بناءً على تفاعلاتهم وتفضيلاتهم. على عكس مواقع الويب الثابتة، التي تعرض نفس المحتوى لجميع الزوار، تم تصميم مواقع الويب الديناميكية لتكون تفاعلية وشخصية، مما يوفر تجربة مستخدم ديناميكية."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TitleAndBody
            title="المتجر الالكتروني مثل Noon & Amazon"
            body="هي منصة على الإنترنت تسهل شراء وبيع السلع أو الخدمات عبر الإنترنت. فهو يسمح للشركات بعرض منتجاتها، وتمكين المعاملات عبر الإنترنت، وتوفير تجربة تسوق سلسة للعملاء من أي مكان في العالم."
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SecondSection;
