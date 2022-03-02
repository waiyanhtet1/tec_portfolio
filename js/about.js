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
if(window.scrollY > 324){
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

// about 
var about_tl = gsap.timeline({
    defaults:{   
        opacity:0, 
        ease:'back', 
        duration:0.5
    },
    scrollTrigger:{
        trigger: ".about",
        markers : false,
        start : "top 30%",
        // end : "bottom 55%",
        toggleActions: 'play none none reset',
        // scrub : 1
    }
});
about_tl.from(".about", {ease:"linear"})
        .from(".about-content .about-heading", {x:-30})
        .from(".about-content p" ,{x:30})
        .from(".about-content a" ,{y:30})
        .from(".about-img",{x:30, scale:0.5, duration:1 });


// clients
var client_tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".client",
        markers : false,
        start : "top 60%",
        toggleActions: 'play none none reset'
    }
});
client_tl.from(".client-content .box", {x:30,y:30, opacity:0, ease:"back",duration:2});

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