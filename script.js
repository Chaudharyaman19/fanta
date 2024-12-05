var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
  },
});
tl.to(".fanta", { top: "120%", left: "0%" }, "orange");
tl.to(".orange", { top: "170%", left: "23%" }, "orange");
tl.to(
  ".orange1",
  { width: "15%", height: "30%", top: "172%", right: "2%" },
  "orange"
);
tl.to(".leaf", { rotate: "150deg", top: "110%", left: "85%" }, "orange");
tl.to(".leaf1", { rotate: "130deg", top: "110%", left: "0%" }, "orange");
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
  },
});
tl2.from(".lemon", { rotate: "-90deg", left: "-100%", top: "110%" }, "ca");

tl2.from(".coca", { rotate: "-90deg", left: "-100%", top: "110%" }, "ca");
tl2.from(".lemon1", { rotate: "90deg", left: "100%", top: "110%" }, "ca");
tl2.from(".pepsi", { rotate: "90deg", left: "100%", top: "110%" }, "ca");
tl2.to(".fanta", { left: "31%", top: "216%" }, "ca");
tl2.to(".orange", { left: "43%", top: "210%" }, "ca");
