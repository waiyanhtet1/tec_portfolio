const up_navbar = document.querySelector(".nav-upper");
const navbar = document.querySelector(".navbar");

const navbar_toggle = document.querySelector(".navbar-toggle");
const navbar_menu = document.querySelector(".navbar-menu");

var time_navbar = 0;

window.onscroll = function (){
if(window.scrollY >= 0 ) {
    up_navbar.style.backgroundColor = "#fff";
    navbar.style.backgroundColor = "#fff";
} else {
    up_navbar.style.backgroundColor = "transparent";
    navbar.style.backgroundColor = "transparent";
}
if(window.scrollY > 295){
    up.style.display = "block";
} else {
    up.style.display = "none";
}

}

up.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"  
    });
});

// navbar_toggle.addEventListener("click",function(){
//     if(time_navbar == 0){
//         navbar_menu.style.display = "block";
//         navbar_menu.style.backgroundColor = "#fff";
//         time_navbar = 1;
//     } else if (time_navbar == 1){
//         navbar_menu.style.display = "none";
//         time_navbar = 0;
//     }
// });

const navSlide = () => {
    navbar_toggle.addEventListener("click", ()=> {
        navbar_menu.classList.toggle('navbar-menu-active');
        gsap.from(".navbar-menu ul li", {x:-30,opacity:0, duration:1});
    navbar_toggle.classList.toggle('toggle');

    });
}
navSlide();

// gsap
gsap.registerPlugin(ScrollTrigger);

// service
var service_tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".service",
        markers : false,
        start : "top 30%",
        toggleActions: 'play none none reset'
    }
});
service_tl.from(".service small, .service h1", {opacity:0, duration:1 ,scale:0.5})
            .from(".service-content .box", {
            duration: 0.5,
            scale: 0.5, 
            opacity: 0, 
            delay: 0.2, 
            stagger: 0.2,
            rotation: 90,
            });

  // footer
var footer_tl = gsap.timeline({
    defaults:{   
        opacity:0, 
        ease:'back',
        duration:1,
        scale:0.5
    },
    scrollTrigger:{
        trigger: ".footer",
        markers : false,
        start : "top 70%",
        toggleActions: 'play none none reset'
    }
});
footer_tl.from(".footer .logo", {x:-30})
         .from (".footer .address, .footer .company",{y:-30})
         .from(".footer .email", {x:30});