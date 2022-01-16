let selectBtn;
let classArray = ["colorLeft","colorMiddle","colorRight"];
let noticeNav; 
function changeLocation(i){
    noticeNav.classList.remove("colorLeft","colorMiddle","colorRight");
    noticeNav.classList.add(classArray[i]);
}
window.addEventListener("load",function(){
    selectBtn = document.querySelectorAll(".noticeNav span");
    noticeNav = document.querySelector("div.noticeNav")
    for(let i = 0; i < selectBtn.length; i++){
        selectBtn[i].addEventListener("click",function(){
            changeLocation(i);
        },false)
    }
} ,false)