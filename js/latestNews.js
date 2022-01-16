let newsCell;
window.addEventListener('load',()=>{
    newsCell = document.querySelectorAll('.newsCell')
    newsCell.forEach((e)=>{
        e.addEventListener('click', ()=>{
            newsCell.forEach((e)=>{
                e.classList.add('hide')
            });
            e.classList.remove('hide')
        });
    });
});
let smMenuBtn;
window.addEventListener('load',()=>{
    smMenuBtn = document.querySelectorAll('.smMenu>div')
    smMenuBtn.forEach(e=>{
        e.addEventListener('click',()=>{
            smMenuBtn.forEach(e=>{
                e.classList.remove('active')
            });
            e.classList.add('active')
        })
    });
});