/*----------------------------IMPORTATION----------------------------*/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/*-------------------------------START-------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  var tl = gsap.timeline();

  // BOX-PIN
  gsap.to(".first", {
    scrollTrigger: {
      trigger: ".first",
      pin: true,
      start: "top top",
      end: "1700% bottom",
      id: "first",
    },
  });

  gsap.utils.toArray(".box").forEach((box, index) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        start: "top+=" + 1000 * (index + 1),
        end: "+=1000",
        id: index,
        scrub: true,
      },
    });

    //--centre-les-box-au-centre----

    const windowHeight = window.innerHeight;
    tl.to(box, {
      y: -(windowHeight / 1),
      ease: "none",
    });

    tl.from(box, {
      scale: 1.4,
      ease: "none",
      opacity: 0,
    });

    tl.to(box, {
      rotate: gsap.utils.random(-4, 1),
      ease: "none",
    });
  });

  // tl.to(".zero", {
  //   scrollTrigger: {
  //     start: "top+=1000",
  //     end: "+=1000",
  //   },
  //   y: "-907px",
  // });

  // ------------------------TESTE--------------------------
  // ------------------------1--------------------------

  gsap.from(".texte-01", {
    scrollTrigger: {
      start: "top+=1200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-01", {
    scrollTrigger: {
      start: "top+=2400",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });

  // ------------------------2--------------------------

  gsap.from(".texte-02", {
    scrollTrigger: {
      start: "top+=2200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-02", {
    scrollTrigger: {
      start: "top+=3400",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });

  // ------------------------3--------------------------

  gsap.from(".texte-03", {
    scrollTrigger: {
      start: "top+=3200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-03", {
    scrollTrigger: {
      start: "top+=4400",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });

  // ------------------------3--------------------------

  gsap.from(".texte-04", {
    scrollTrigger: {
      start: "top+=4200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-04", {
    scrollTrigger: {
      start: "top+=5400",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });

  // ------------------------5--------------------------

  gsap.from(".texte-05", {
    scrollTrigger: {
      start: "top+=6200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-05", {
    scrollTrigger: {
      start: "top+=7400",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });
  // ------------------------6--------------------------

  gsap.from(".texte-06", {
    scrollTrigger: {
      start: "top+=6200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-06", {
    scrollTrigger: {
      start: "top+=7400",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });

  // ------------------------7--------------------------

  gsap.from(".texte-07", {
    scrollTrigger: {
      start: "top+=7200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-07", {
    scrollTrigger: {
      start: "top+=8400",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });

  // ------------------------8--------------------------
  gsap.from(".texte-08", {
    scrollTrigger: {
      start: "top+=8200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-08", {
    scrollTrigger: {
      start: "top+=9400",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });

  // ------------------------9--------------------------
  gsap.from(".texte-09", {
    scrollTrigger: {
      start: "top+=9200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-09", {
    scrollTrigger: {
      start: "top+=11200",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });

  // ------------------------10--------------------------
  gsap.from(".texte-10", {
    scrollTrigger: {
      start: "top+=11200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-10", {
    scrollTrigger: {
      start: "top+=12200",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });

  // ------------------------11--------------------------

  gsap.from(".texte-11", {
    scrollTrigger: {
      start: "top+=12200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-11", {
    scrollTrigger: {
      start: "top+=13200",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });

  // ------------------------11--------------------------
  gsap.from(".texte-12", {
    scrollTrigger: {
      start: "top+=13200",
      end: "+=600",
      scrub: true,
    },
    top: "70%",
    opacity: 0,
  });

  gsap.to(".texte-12", {
    scrollTrigger: {
      start: "top+=14200",
      end: "+=600",
      scrub: true,
    },
    opacity: 0,
  });
});
