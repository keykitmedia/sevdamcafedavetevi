import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { contact } from "../constants";

// Açık zeminli bölümlerde logo koyu renge geçer
const lightSections = [".flavor-section", ".nutrition-section", ".testimonials-section"];

const NavBar = () => {
  const logoRef = useRef();

  useGSAP(() => {
    lightSections.forEach((selector) => {
      ScrollTrigger.create({
        trigger: selector,
        start: "top 40px",
        end: "bottom 40px",
        refreshPriority: -1,
        toggleClass: { targets: logoRef.current, className: "is-dark" },
      });
    });

    // Kaydırdıkça logo yavaşça kaybolur, yukarı çıkınca geri gelir
    gsap.to(logoRef.current, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: 400,
        scrub: true,
      },
    });
  });

  return (
    <nav className="fixed top-0 left-0 z-50 w-full md:p-9 p-4 flex items-start justify-between pointer-events-none">
      <a ref={logoRef} href="#" className="nav-logo pointer-events-auto" aria-label="Sevda'M Davet Evi">
        <span className="nav-logo-script">
          Sevda<span className="text-[#c0263a]">♥</span>M
        </span>
        <span className="nav-logo-sub">Davet Evi</span>
      </a>

      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="nav-cta pointer-events-auto"
      >
        Tarih Sor
      </a>
    </nav>
  );
};

export default NavBar;
