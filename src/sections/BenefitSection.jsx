import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Neden Sevda&apos;M? <br />
            Ailelerin bizi tercih etmesinin dört sebebi
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"250 kişilik salon"}
              color={"#f7f1ea"}
              bg={"#b08a5a"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Size özel dekor"}
              color={"#2b2627"}
              bg={"#f7f1ea"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Cafe & ikram"}
              color={"#f7f1ea"}
              bg={"#6b2433"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Merkezi konum"}
              color={"#2b2627"}
              bg={"#e6cfa7"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>…ve sizin hayal ettiğiniz her detay</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
