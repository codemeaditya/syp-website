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

document.addEventListener("click", (e) => {

    if (
        !nav.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        nav.classList.remove("active");

    }

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

if(window.innerWidth > 768){

document.addEventListener("mousemove", (e) => {

    mouseX =
        (e.clientX / window.innerWidth - 0.5) * 15;

    mouseY =
        (e.clientY / window.innerHeight - 0.5) * 15;

    heroContent.style.transform =
        `translate(${mouseX}px, ${mouseY}px)`;

});

}


/* =========================
   SMOOTH PAGE LOAD
========================= */

document.body.style.opacity = "0";

window.addEventListener("load", () => {
    
    document.body.style.transition =
        "opacity 0.8s ease";
    
    document.body.style.opacity = "1";
    
});
const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        let count = 0;

        const increment = Math.ceil(target / 80);

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.innerText = count;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }
        };

        updateCounter();
    });

};

const statsSection = document.querySelector(".stats-section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounters();

            observer.unobserve(statsSection);

        }

    });

}, {
    threshold: 0.4
});

observer.observe(statsSection);

/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});
