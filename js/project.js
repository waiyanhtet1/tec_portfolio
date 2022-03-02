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

           
//project
const p_img_boxes = document.querySelectorAll(".project-content .box");
gsap.defaults({ duration: 0.3 });

    p_img_boxes.forEach(function (img_box, index) {
        const p_img = gsap.from(img_box.querySelector(".p-img"), {x:-10, y:10, duration:0.3});

        img_box.addEventListener("mouseenter", () => p_img.play());
        img_box.addEventListener("mouseleave", () => p_img.reverse());
    });


var project_tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".project",
        markers : false,
        start : "top 30%",
        toggleActions: 'play none none reset'
    }
});
project_tl.to(".project h1", {text:'Our latest projects', ease:'power1.in',duration:0.6})
            .from(".project small", {opacity:0})
            .from(".project-header button",{opacity:0, x:30 ,duration:1, ease:"bounce"})
            .from(".project-content .box", {opacity:0 , x:-10, y:10, scale:0.5 ,duration:0.6,yoyo:true, repeat:2},0);

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