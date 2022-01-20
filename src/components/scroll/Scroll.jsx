import React, { useEffect, useState } from "react";
import Logo from '../Logo.jsx'
import "./Scroll.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="ScrollTop" onClick={scrollToTop}>
          <span className="topIcon"> <Logo /> </span>
        </div>
      )}
    </div>
  );
}

