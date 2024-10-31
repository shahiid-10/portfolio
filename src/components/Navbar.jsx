import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("working")
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

  const scrollToSection = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close the menu after clicking
    }
  };

  return (
    <nav
      className={`px-[2.5rem] py-[2rem] flex justify-between sticky top-0 z-10 ${
        scrolled
          ? `backdrop-blur-md border-b border-white/50`
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
        className={
          menuOpen
            ? "full h-fit bg-white/15 w-[60%] md:w-[30%] absolute right-[2.5rem] top-[4rem] transition-all duration-300 ease-in-out flex flex-col  justify-center items-center gap-[2rem] px-[2.5rem] py-[1rem] text-3xl overflow-hidden rounded-lg font-[font-2] z-10"
            : "hidden transition-all ease-in-out duration-300"
        }
      >
        <h1 onClick={() => scrollToSection("/")} className="cursor-pointer">
          Home
        </h1>
        <h1 onClick={() => scrollToSection("about")} className="cursor-pointer">
          About
        </h1>
        <h1
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer"
        >
          Projects
        </h1>
        <h1
          onClick={() => scrollToSection("connect")}
          className="cursor-pointer"
        >
          Contact
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
