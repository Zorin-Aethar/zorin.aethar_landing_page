import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div
        href="#top"
        className="fixed bottom-3 right-5 shadow-lg h-[50px] w-[50px] bg-gradient-to-r from-[#00C4EE] to-[#3B4CE8] rounded-full flex items-center justify-center cursor-pointer"
        onClick={scrollToTop}
      >
        <FaArrowUp color="#fff" />
      </div>
    )
  );
}
