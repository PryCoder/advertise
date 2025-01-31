import { useState, useEffect } from "react";

const RandomGradientChanger = () => {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue(prevHue => (prevHue + 1) % 360); // Increment the hue value and loop after 360
    }, 500); // Update the color every 10ms (adjust speed as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-end items-start h-screen">
      <div 
        className="lg:text-xl bg-gradient-to-r from-gray-500 to-black rounded-lg p-3 shadow-lg text-sm"
        style={{
         
          color: `hsl(${hue}, 100%, 50%)`,
          transition: "color 0.1s linear"
        }}
      >
     Priyanshu Gupta
      </div>
    </div>
  );
};

export default RandomGradientChanger;
