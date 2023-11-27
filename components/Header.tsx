"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FC, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import BurgerMenu from "./ui/BurgerMenu";
import { RequestButton } from "./ui/Button";

interface NavLinkProps {
  href: string;
  text: string;
  bgColored?: "colored" | "white";
  setIsOpen: (isOpen: boolean) => void;
}
const NavLink: FC<NavLinkProps> = ({
  href,
  text,
  bgColored = "colored",
  setIsOpen,
  ...props
}) => (
  <motion.div
    whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(255, 69, 0, 0.5)" }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Link
      to={href}
      smooth={true}
      duration={700}
      onClick={() => setIsOpen(false)}
      {...props}
      className={cn(
        "cursor-pointer transition duration-300 2xl:text-lg",
        bgColored === "colored"
          ? "text-white hover:text-dark-blue"
          : "text-dark-blue hover:text-flame",
      )}
    >
      {text}
    </Link>
  </motion.div>
);

const Header = () => {
  const [background, setBackground] = useState<"colored" | "white">("colored");
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 1) {
      setBackground("white");
    } else {
      setBackground("colored");
    }
    if (latest > previous && latest > 300) {
      setHidden(true);
      setIsOpen(false);
    } else {
      setHidden(false);
    }
  });

  const links = [
    {
      href: "about",
      text: "About us",
    },
    {
      href: "features",
      text: "Services",
    },
    {
      href: "portfolio",
      text: "Portfolio",
    },
    {
      href: "contact",
      text: "Contact",
    },
  ];

  return (
    <motion.header
      key="header"
      variants={{
        hidden: { y: "-100%" },
        visible: { y: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className={cn(
        "sticky top-0 z-50 transition-colors duration-500",
        background === "colored"
          ? "border-b border-gray-100 bg-gradient-to-r from-custom-bg1 to-custom-bg2"
          : "bg-gray-100",
      )}
    >
      <div className="container mx-auto flex items-center justify-between gap-20 py-2">
        <a
          onClick={() => scroll.scrollToTop()}
          className="group mx-5 cursor-pointer"
        >
          <svg
            className={cn(
              "h-[45px] w-[50px] transition duration-300",
              background === "colored"
                ? "fill-white group-hover:fill-dark-blue"
                : "fill-dark-blue group-hover:fill-cyan-500",
            )}
            viewBox="0 0 340 306"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M139 40L169 40C185.569 40 199 53.4315 199 70C199 86.5685 185.569 100 169 100L139 100L99 100L99 200H139V140H169C207.66 140 239 108.66 239 70C239 31.3401 207.66 1.20049e-05 169 5.24537e-06L139 0V40ZM139 40L99 40L99 80L139 80L139 40ZM224.505 2.47V4.525H221.715V13H219.15V4.525H216.36V2.47H224.505ZM237.717 2.47V13H235.152V6.685L232.797 13H230.727L228.357 6.67V13H225.792V2.47H228.822L231.777 9.76L234.702 2.47H237.717ZM42.9 239.6C38.7 235.6 32 233.6 22.8 233.6H0V305H15.1V279.6H21.6C26.8 279.6 31.1667 278.967 34.7 277.7C38.2333 276.433 41.0667 274.7 43.2 272.5C45.4 270.233 46.9667 267.7 47.9 264.9C48.8333 262.033 49.3 259.033 49.3 255.9C49.3 248.967 47.1667 243.533 42.9 239.6ZM15.1 246H22C26.1333 246 29.1667 246.867 31.1 248.6C33.0333 250.267 34 252.867 34 256.4C34 258.933 33.4333 261 32.3 262.6C31.1667 264.2 29.5667 265.367 27.5 266.1C25.4333 266.833 22.9667 267.2 20.1 267.2H15.1V246ZM77.093 305V234.8H59.993V305H77.093ZM139.985 248.5V234.8H85.6852V248.5H104.285V305H121.385V248.5H139.985ZM165.667 262.7V248.5H191.567V234.8H148.567V305H191.567V291.3H165.667V275.9H188.567V262.7H165.667ZM204.269 251.3C201.269 256.7 199.769 262.867 199.769 269.8C199.769 276.733 201.269 282.9 204.269 288.3C207.269 293.7 211.435 297.933 216.769 301C222.169 304 228.269 305.5 235.069 305.5C243.402 305.5 250.535 303.333 256.469 299C262.402 294.6 266.369 288.6 268.369 281H249.569C248.169 283.933 246.169 286.167 243.569 287.7C241.035 289.233 238.135 290 234.869 290C229.602 290 225.335 288.167 222.069 284.5C218.802 280.833 217.169 275.933 217.169 269.8C217.169 263.667 218.802 258.767 222.069 255.1C225.335 251.433 229.602 249.6 234.869 249.6C238.135 249.6 241.035 250.367 243.569 251.9C246.169 253.433 248.169 255.667 249.569 258.6H268.369C266.369 251 262.402 245 256.469 240.6C250.535 236.2 243.402 234 235.069 234C228.269 234 222.169 235.533 216.769 238.6C211.435 241.6 207.269 245.833 204.269 251.3ZM339.641 305V234.8H322.541V262.3H295.941V234.8H278.841V305H295.941V276.1H322.541V305H339.641Z"
            />
            <path
              d="M104 10L114 10C125.046 10 134 18.9543 134 30V30L124 30C112.954 30 104 21.0457 104 10V10Z"
              className={cn(
                "transition duration-300",
                background === "colored"
                  ? "fill-accent group-hover:fill-white"
                  : "fill-flame group-hover:fill-black",
              )}
            />
          </svg>
        </a>

        {/* Desktop Nav */}
        <nav className="ml-auto hidden gap-16 xl:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              setIsOpen={setIsOpen}
              bgColored={background}
              href={link.href}
              text={link.text}
            />
          ))}
        </nav>
        <div className="mx-5">
          <RequestButton to="contact" className="hidden xl:inline-flex" />
        </div>

        {/* Mobile Nav */}
        <BurgerMenu
          bgColored={background}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <nav
          className={clsx(
            "right-0 top-16 z-50 flex w-full animate-vanish flex-col items-center justify-center gap-5 rounded-b-lg bg-gray-700 py-10 text-xl text-white xl:hidden",
            isOpen ? "absolute" : "hidden",
          )}
        >
          {links.map((link) => (
            <NavLink
              key={link.href}
              setIsOpen={setIsOpen}
              href={link.href}
              text={link.text}
            />
          ))}
          <RequestButton setIsOpen={setIsOpen} to="contact" />
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
