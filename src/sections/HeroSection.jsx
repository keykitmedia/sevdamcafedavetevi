import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { contact, img } from "../constants";

const HeroSection = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src={img(isTablet ? "hero-neon-dik.jpg" : "hero-neon.jpg")}
          alt="Sevda'M Davet Evi'nde Hikayemiz Başlıyor neon yazılı fiyonklu sahne"
          className="hero-photo"
        />
        <div className="hero-overlay" />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Hikayeniz</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Burada Başlıyor</h1>
            </div>
          </div>

          <h2>
            Kız istemeden kına gecesine, en özel gününüzü Ünye&apos;nin kalbinde
            çiçeklerle, ışıklarla ve 250 kişiye kadar sevdiklerinizle kutlayın.
          </h2>

          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hero-button"
          >
            <p>Tarihinizi Ayırtın</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
