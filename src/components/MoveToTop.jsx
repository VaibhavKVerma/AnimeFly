import React, { useEffect, useState } from "react";
import { MoveToTopIcon } from "../Constants/Svg";

const MoveToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) setShow(true);
    else setShow(false);
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={
        show
          ? "fixed cursor-pointer z-50 left-[calc(50%_-_20px)] top-[calc(100vh_-_40px)] p-[4px] bg-slate-500"
          : "hidden"
      }
    >
      <MoveToTopIcon />
    </div>
  );
};

export default React.memo(MoveToTop);
