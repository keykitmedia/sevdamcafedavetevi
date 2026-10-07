import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { contact, img } from "../constants";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <img
          src={img("salon-genis.jpg")}
          alt="Sevda'M Davet Evi salonundan genel görünüm"
          loading="lazy"
          className="pin-photo"
        />

        <a
          href={contact.instagramHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram'da Sevda'M Davet Evi"
          className="abs-center md:scale-100 scale-200"
        >
          <img src={`${import.meta.env.BASE_URL}images/sevdam/circle-text.svg`} alt="" className="spin-circle" />
          <div className="play-btn">
            <span className="text-[3vw] leading-none text-milk">♥</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default VideoPinSection;
