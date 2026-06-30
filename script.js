/* =========================
   TYPEWRITER EFFECT
========================= */

const typewriter = document.getElementById("typewriter");

const text =
    "Where Young Minds Debate, Lead, Innovate and Shape the Future of India.";

let index = 0;

function typeText() {
    
    if (index < text.length) {
        
        typewriter.innerHTML += text.charAt(index);
        
        index++;
        
        setTimeout(typeText, 45);
        
    }
    
}

window.addEventListener("load", () => {
    
    typeText();
    
});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {
    
    revealElements.forEach((element) => {
        
        const windowHeight =
            window.innerHeight;
        
        const elementTop =
            element.getBoundingClientRect().top;
        
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            
            element.classList.add("active");
            
        }
        
    });
    
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   HAMBURGER MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

/* Open / Close menu */
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* Link click par menu band */
document.querySelectorAll("#nav a").forEach(link => {
    
    link.addEventListener("click", () => {
        
        nav.classList.remove("active");
        
    });
    
});

/* Bahar click karne par menu band */

document.addEventListener("click", (e) => {
    
    if (
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        
        nav.classList.remove("active");
        
    }
    
});
/* =========================
   OUTSIDE CLICK CLOSE
========================= */

document.addEventListener("click", (e) => {
    
    if (
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        
        nav.classList.remove("show");
        
    }
    
});


/* =========================
   CLOSE MENU ON LINK CLICK
========================= */

const navLinks =
    document.querySelectorAll("#nav a");

navLinks.forEach((link) => {
    
    link.addEventListener("click", () => {
        
        nav.classList.remove("show");
        
    });
    
});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    
    let current = "";
    
    sections.forEach((section) => {
        
        const sectionTop =
            section.offsetTop - 150;
        
        const sectionHeight =
            section.clientHeight;
        
        if (
            pageYOffset >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }
        
    });
    
    navLinks.forEach((link) => {
        
        link.classList.remove("active");
        
        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
        
    });
    
});


/* =========================
   HERO PARALLAX
========================= */

window.addEventListener("scroll", () => {
    
    const hero =
        document.querySelector(".hero");
    
    let scrollY =
        window.pageYOffset;
    
    hero.style.backgroundPositionY =
        scrollY * 0.4 + "px";
    
});


/* =========================
   HERO FLOAT ANIMATION
========================= */

const heroContent =
    document.querySelector(".hero-content");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
    
    mouseX =
        (e.clientX / window.innerWidth - 0.5) * 15;
    
    mouseY =
        (e.clientY / window.innerHeight - 0.5) * 15;
    
    heroContent.style.transform =
        `translate(${mouseX}px, ${mouseY}px)`;
    
});


/* =========================
   SMOOTH PAGE LOAD
========================= */

document.body.style.opacity = "0";

window.addEventListener("load", () => {
    
    document.body.style.transition =
        "opacity 0.8s ease";
    
    document.body.style.opacity = "1";
    
});
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");
const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

}

update();

});
