"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Rounded from "../../common/RoundedButton";
import { HiBars2 } from "react-icons/hi2";
import "./menu.css";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef(null);
  const t1 = useRef(null);

  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
  };

  const toggleMenu = (targetId) => {
    setIsMenuOpen((prev) => !prev);
    if (targetId) smoothScrollTo(targetId);
  };

  useGSAP(
    () => {
      gsap.set(".menu-links-item-holder", { y: 150 });
      t1.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-links-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      t1.current && t1.current.play();
      document.body.style.overflow = "hidden";
    } else {
      t1.current && t1.current.reverse();
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      {/* Top Bar */}
      <div className="menu-bar">
        <button
          onClick={() => toggleMenu()}
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
          aria-controls="site-menu-overlay"
        >
          <Rounded className="contact_getintouch_circle">
            <HiBars2 />
          </Rounded>
        </button>
      </div>

      {/* Overlay */}
      <div
        id="site-menu-overlay"
        className={`menu-overlay${isMenuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={isMenuOpen ? "false" : "true"}
      >
        <nav className="menu-links">
          {[
            { label: "Home", id: "home" },
            { label: "About", id: "about" },
            { label: "Skills", id: "skills" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <div key={id} className="menu-links-item">
              <div
                className="menu-links-item-holder"
                onClick={() => toggleMenu(id)}
              >
                <a href={`#${id}`}>{label}</a>
              </div>
            </div>
          ))}
        </nav>

        {/* Close Button */}
        <button
          className="menu-close-icon"
          onClick={() => toggleMenu()}
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Menu;
