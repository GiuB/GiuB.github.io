jQuery(document).ready(function($) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gsap-show-children").forEach(function(section) {
    gsap.from(section.querySelectorAll("*"), {
      scrollTrigger: section,
      autoAlpha: 0,
      y: 25,
      duration: 0.3,
      stagger: 0.2,
      toggleActions: "restart reset restart reset",
    });
  });

  gsap.utils.toArray(".gsap-show-inview").forEach(function(section) {
    gsap.from(section, {
      scrollTrigger: section,
      autoAlpha: 0,
      y: 125,
      duration: 0.6,
      stagger: 0.2,
      toggleActions: "restart reset restart reset",
    });
  });

  gsap.utils.toArray(".gsap-timeline").forEach(function(section) {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
      },
      autoAlpha: 0,
      y: 60,
      duration: 0.6,
      stagger: 0.2,
      once: true,
      toggleActions: "play pause pause pause",
    });
  });
});