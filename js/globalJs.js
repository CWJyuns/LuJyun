// let hamburgerBtn;
let hamburgerChange = false;
function hamburgerselect(){
    if (hamburgerChange){
        hamburgerChange = !hamburgerChange
        document.querySelector("header").classList.remove("menu")
    }else{
        hamburgerChange = !hamburgerChange
        document.querySelector("header").classList.add("menu")
    }
}
window.addEventListener("load",function(){
    document.getElementsByClassName("hamburger")[0].addEventListener("click",hamburgerselect,false)
},false)
       
  