// =======================================
// LOADING SCREEN
// =======================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        delay: 1,
        onComplete: () => {
            loader.style.display = "none";
        }
    });

});

// =======================================
// TYPING EFFECT
// =======================================

new Typed(".typing",{

    strings:[
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "UI Engineer",
        "Laravel Developer",
        "React Developer"
    ],

    typeSpeed:70,
    backSpeed:40,
    backDelay:1500,
    loop:true

});

// =======================================
// CUSTOM CURSOR
// =======================================

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

window.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";

    cursor2.style.left=e.clientX+"px";
    cursor2.style.top=e.clientY+"px";

});

// =======================================
// CURSOR HOVER EFFECT
// =======================================

document.querySelectorAll("a,button,.card").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        gsap.to(cursor,{
            scale:2,
            duration:.2
        });

        gsap.to(cursor2,{
            scale:1.5,
            duration:.2
        });

    });

    item.addEventListener("mouseleave",()=>{

        gsap.to(cursor,{
            scale:1
        });

        gsap.to(cursor2,{
            scale:1
        });

    });

});

// =======================================
// HERO ANIMATION
// =======================================

gsap.from(".hero-text p",{

    opacity:0,

    y:60,

    duration:1

});

gsap.from(".hero-text h1",{

    opacity:0,

    y:80,

    duration:1,

    delay:.2

});

gsap.from(".hero-text h2",{

    opacity:0,

    y:60,

    duration:1,

    delay:.4

});

gsap.from(".buttons",{

    opacity:0,

    y:60,

    duration:1,

    delay:.6

});

gsap.from(".hero-image",{

    opacity:0,

    x:150,

    duration:1.2

});