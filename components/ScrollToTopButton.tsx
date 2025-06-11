'use client';

import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoArrowUpCircle } from "react-icons/io5";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "2.5rem",
        right: "2.5rem",
        zIndex: 9999,
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
        cursor: "pointer",
        transition: "box-shadow 0.2s, transform 0.2s, background 0.2s",
        padding: 0,
      }}
      tabIndex={0}
      onMouseOver={e => {
        e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(255,77,48,0.45)";
        e.currentTarget.style.background = "#FFF3F0";
        e.currentTarget.style.transform = "scale(1.12)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <IoArrowUpCircle
        size={40}
        color="#FF4D30"
        style={{
          transition: "color 0.2s, transform 0.2s",
          filter: "drop-shadow(0 2px 8px rgba(255,77,48,0.25))",
        }}
      />
    </button>
  );
};

export default ScrollToTopButton;