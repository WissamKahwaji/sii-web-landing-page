import { useState, useEffect, useCallback } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date("April 26, 2024 23:59:59").getTime();

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = deadline - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    } else {
      // Timer expired, handle this case
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  }, [deadline]); // Include 'deadline' in the useCallback dependencies

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [calculateTimeLeft]); // Include 'calculateTimeLeft' in the useEffect dependencies

  return (
    <div className="text-center my-8  mx-4 md:mx-auto md:w-fit p-4 md:p-8 bg-gradient-to-r from-secondary/80  to-secondary/20 border  border-primary/50 rounded-md shadow-md shadow-primary/50">
      <h2 className="text-lg font-bold mb-4 md:mb-8 font-header">
        هذا العرض سينتهي قريبا !! تواصل معنا الان
      </h2>
      <div className="flex justify-center space-x-4 font-header text-primary">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{days}</span>
          <span className="text-sm">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{hours}</span>
          <span className="text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{minutes}</span>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold">{seconds}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
