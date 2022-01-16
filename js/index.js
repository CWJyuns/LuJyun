let contactUsBtn;
let contactUsTxt;
let contactBlock;
let contactUsreBtn;
window.addEventListener('load',function(){
    contactUsBtn = document.querySelector('.contactUs .txt>.btn') ;
    contactUsTxt = document.querySelector('.contactUs .txt') ;
    contactBlock = document.querySelector('.contactBlock') ;
    contactUsreBtn = document.querySelector('.contactBlock .rebtn') ;
    contactUsBtn.addEventListener('click',() =>{
        contactUsTxt.classList.add('hide');
        contactBlock.classList.add('show');
    });
    contactUsreBtn.addEventListener("click",()=>{
        contactBlock.classList.remove('show');
        contactUsTxt.classList.remove('hide');
        
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            dots:true,
            loop:true,
            mouseDrag:true,
            center:true,
            margin:10,
            responsiveClass:true,
            autoplay:true,
            utoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                768:{
                    items:1,
                    nav:true
                },
                1200:{
                    items:1,
                    nav:true,
                    // mouseDrag:true,
                    // loop:false
                }
            }
        });
});