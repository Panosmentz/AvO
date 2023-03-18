import { useEffect, useState } from "react";

const UnderConstruction = () => {
  const [text, setText] = useState("Under construction");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((text) => {
        if (text.endsWith("...")) {
          return "Under construction";
        } else {
          return text + ".";
        }
      });
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <h1 className="animate-pulse text-4xl font-bold text-white">{text}</h1>
    </div>
  );
};

export default UnderConstruction;
