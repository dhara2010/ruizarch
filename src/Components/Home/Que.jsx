import React, { useState } from "react";
import { useScrollAnimation } from "./ScrollAnimation";

const Que = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className={`transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} >
      <h4 onClick={() => setOpen(!open)} className="uppercase font-bold cursor-pointer flex group">
        +{" "}
        <span className="ml-5 inline-block transition-transform duration-500 ease-in-out group-hover:translate-x-5">
          {title}
        </span>
      </h4>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96" : "max-h-0"}`}>
        <p className="text-neutral-400 p-4">{content}</p>
      </div>
      <hr className="hr-line3 mt-5" />
    </div>
  );
};

export default Que;
