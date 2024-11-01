import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const menuTl = gsap.timeline();

  useGSAP(() => {
    if (menuOpen) {
      gsap.from(menuRef.current, {
        opacity: 0,
        duration: 0.1,
      });

      const q = gsap.utils.selector(menuRef);
      gsap.from(q("h1"), {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.3,
        // ease: "power2.out",
      });
    }
  }, [menuOpen]);

  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // useGSAP(() => {
  //   gsap.from(navRef.current, {
  //     y: -100,
  //     opacity: 0,
  //     duration: 0.5,
  //     delay: 0.8
  //   })
  // })

  return (
    <nav
      className={`px-[2.5rem] py-[2rem] flex justify-between  ${
        scrolled
          ? `backdrop-blur-sm border-none border-white/50`
          : "bg-transparent"
      }`}
    >
      <div
        className="logo text-white text-xl font-[font-3] cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
      >
        /
      </div>
      <div className="text-white">
        <h1
          className={
            menuOpen
              ? "border-b border-white/40 cursor-pointer font-[font-3] text-xl"
              : " text-xl border-b-0 cursor-pointer font-[font-3]"
          }
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </h1>
      </div>
      <div
        ref={menuRef}
        className={
          menuOpen
            ? "full h-fit bg-yellow-950 shadow-lg border-2 border-white w-[60%] md:w-[30%] absolute right-[2.5rem] top-[4rem] duration-300 ease-in-out flex flex-col  justify-center items-center gap-[2rem] px-[2.5rem] py-[1rem] text-3xl overflow-hidden rounded-lg font-[font-2] transition-opacity"
            : "hidden transition-all ease-in-out duration-300"
        }
      >
        <h1
          onClick={() => {
            window.scrollTo(0, 0);
            setMenuOpen(!menuOpen);
          }}
          className="cursor-pointer hover:text-gray-400  "
        >
          Home
        </h1>
        <h1
          onClick={() => scrollToSection("about")}
          className="cursor-pointer hover:text-gray-400  "
        >
          About
        </h1>
        <h1
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer hover:text-gray-400  "
        >
          Projects
        </h1>
        <h1
          onClick={() => scrollToSection("connect")}
          className="cursor-pointer hover:text-gray-400  "
        >
          Contact
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
