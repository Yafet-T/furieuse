/*----------------------------IMPORTATION----------------------------*/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/*-------------------------------START-------------------------------*/

var tl = gsap.timeline();

// BOX-PIN
gsap.to(".first", {
  scrollTrigger: {
    trigger: ".first",
    markers: {
      startColor: "yellow",
      endColor: "pink",
      fontSize: "15px",
    },
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
      markers: true,
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

tl.to(".zero", {
  scrollTrigger: {
    markers: true,
    start: "top+=1000",
    end: "+=1000",
    id: "two",
    scrub: true,
  },
  y: "-907px",
});
