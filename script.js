// Navbar background on scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        nav.style.background = "rgba(15,23,42,.95)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";
    } else {
        nav.style.background = "rgba(15,23,42,.8)";
        nav.style.boxShadow = "none";
    }
});

// Scroll animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll("section,.project,.card").forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});

// Active menu

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){
current=section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){
link.classList.add("active");
}

});

});

// Smooth button animation

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});
