var mainAft = CSSRulePlugin.getRule(".main::after");
var mainBef = CSSRulePlugin.getRule(".main::before");
const svgAnim = document.querySelector(".svgAnim");

var tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(mainAft, { duration: 1.5, ease: "power3.out", cssRule: { height: 0 } })
    .from(mainBef, { duration: 1, ease: "power1.out", cssRule: { scaleY: 0 } }, "-=1")
    .from(".anim2", { duration: 1, y: -50, ease: "elastic.out", opacity: 0, stagger: .6 }, "-=1")
    .from(".animation", { duration: 2, y: -50, ease: "power3.out", opacity: 0, stagger: .6 }, "-=.5");
