// EASE VARIABLES ------------------ //
const powerOut = Power4.out;
const powerIn = Power4.in;
const backEaseOutMedium = Back.easeOut.config(2.5);
const backEaseExtreme = Back.easeOut.config(12);
let easeInOut = "power4.inOut";

// SHOW CONTAINER ------------------ //
document.getElementById("container").style.opacity = 1;

// ANIMATION FUCTIONS ------------------ //
function changeInnerText(newText) {
    const target = document.getElementById("text-box-top-text");
    target.innerHTML = "";
    target.innerHTML = newText;
}

function makeOrange() {
    let textbox = document.getElementById('text-box-top');
    textbox.classList.remove("dark-blue");
    textbox.classList.add('orange');
}

function initAnimation() {
    let tl = new TimelineMax({});
    tl.from(".main-container", 0.25, { scale: 0 }, "+=0.5")
        // .from("#div-container, .month", 0.5, { opacity: 0, y: 20, transformOrigin: "50% 50%" }, "-=0.15")
        .to('#text-box-top', 0.5, { y: -40 }, "-=0.55");
}

function spinAnimation(newLable) {
    let tl = new TimelineMax({});
    tl.to("#div-container", 2, { y: "-=1620", ease: easeInOut }, "spin-1")
        .to('.month', 0.25, { opacity: 0, y: 20, transformOrigin: "50% 50%" }, "spin-1+=0.25")
        .to('#text-box-top', 0.5, { y: 40 }, "spin-1+=0.25")
        .call(changeInnerText, [newLable], "spin-1+=0.5")
        .to('#text-box-top', 0.5, { y: -40 }, "spin-1+=1.25")
        .to('.month', 0.25, { opacity: 1, y: 0, transformOrigin: "50% 50%" }, "spin-1+=1.35")
        .to('#text-box-top', 0.5, {}); //  DELAY
    return tl;
}

function lastSpinAnimation(newLable) {
    let tl = new TimelineMax({});
    tl.to("#div-container", 2, { y: "-=1620", ease: easeInOut }, "spin-1")
        .to('.month', 0.25, { opacity: 0, y: 20, transformOrigin: "50% 50%" }, "spin-1+=0.25")
        .to('#text-box-top', 0.5, { y: 40 }, "spin-1+=0.25")
        .call(changeInnerText, [newLable], "spin-1+=0.5")
        .call(makeOrange, null, "-=1.5")
        .to('#text-box-top', 0.5, { y: -40 }, "spin-1+=1.25")
        .to('.month', 0.25, { opacity: 1, y: 0, transformOrigin: "50% 50%" }, "spin-1+=1.35");
    return tl;
}

function slingPrice() {
    let tl = new TimelineMax({});
    tl.to("#sling-price-ghost", 0.5, { scale: 5, opacity: 0 })
        .to("#sling-price-shadow", 0.5, { x: -3, y: 3, ease: backEaseExtreme }, "-=0.25")
        .to(".sling-price-wrapper", 0.2, { scale: 1.1, ease: powerOut })
        .to(".sling-price-wrapper", 0.2, { scale: 1, ease: powerIn }, "+=0.2");
    return tl;
}

function changeBG() {
    let tl = new TimelineMax({});
    tl.to('#container', 0.3, { backgroundColor: 'rgba(0, 30, 96, 1)' });
    return tl;
}

function header() {
    let tl = new TimelineMax({});
    tl.from("#header", 0.25, { scaleX: 0, transformOrigin: "center", ease: powerOut })
        .from("#subhead", 0.25, { scaleX: 0, transformOrigin: "center", ease: powerOut })
        .to("#cta-button, #cta-button-under ", .2, { scale: 1, ease: backEaseOutMedium })
        .to("#cta-text ", .2, { scale: 1, ease: backEaseOutMedium })
        .to("#restrictions ", .2, { scale: 1, ease: backEaseOutMedium }, "-=0.2")
        .add(TweenMax.to("#mask-shimmer", 5, { x: 1200, ease: powerOut }));
    return tl;
}

function logoBlink() {
    let logoBlink = new TimelineMax({});
    logoBlink.staggerTo(".icon", 0.3, { scale: 0, transformOrigin: "50% 50%" }, 0.1, "+=0.5")
        .staggerTo(".icon", 0.3, { scale: 1, ease: Back.easeOut.config(3.5), transformOrigin: "50% 50%" }, 0.1, "-=0.5");
    return logoBlink;
}

// ANIMATION TIMELINE ------------------ //
let main = new TimelineMax({});
main.add(initAnimation())
    .add(logoBlink())
    .add(spinAnimation("Hulu TV"), "+=.50")
    .add(spinAnimation("YouTube TV"))
    .add(lastSpinAnimation("Sling"))
    .add(changeBG())
    .add(slingPrice(), "-=0.35")
    .add(logoBlink(), "-=0.4")
    .add(header(), "-=1");



