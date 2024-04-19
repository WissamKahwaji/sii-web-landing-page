import Lottie from "lottie-react";
import pointIcon from "../../assets/animated-icons/point3.json";
export type TitleAndBodyProps = {
  title: string;
  body: string;
};

const TitleAndBody = (props: TitleAndBodyProps) => {
  return (
    <div className="flex flex-col md:border-l-2 border-secondary/20 px-2 space-x-2">
      <div className="flex flex-row justify-start items-center">
        <Lottie animationData={pointIcon} className="w-12 h-8" />
        <p className="text-2xl font-header text-secondary mb-4 text-start">
          {props.title}
        </p>
      </div>
      <p className="font-header text-base md:text-lg leading-7 text-gray-900 text-justify">
        {props.body}
      </p>
      <hr className="border-primary mt-2 md:border-none" />
    </div>
  );
};

export default TitleAndBody;
