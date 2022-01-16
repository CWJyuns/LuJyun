let selseDayArray = ['','']
var yearSelect ;
var monthSelect ;
var datestable ;
var nowdate;
var rightBtn;
var leftBtn;
var month;
var year;
var selectday;

//初始化
window.addEventListener("load",function(){
    yearSelect = document.getElementById('year');
    monthSelect = document.getElementById('month');
    datestable = document.getElementById('datestable');
    rightBtn =  document.getElementsByClassName('rightBtn')
    leftBtn = document.getElementsByClassName('leftBtn')
   
    var nowdate = new Date();       //獲取當前的日期
    year = nowdate.getFullYear();
    month = nowdate.getMonth();
    showDates();                  //呼叫顯示日期的函式
    rightBtn[0].addEventListener("click",function(){    
        dateChange(1)
    });
    leftBtn[0].addEventListener("click",function(){    
        dateChange(-1)
    });
    
})
function selectBtnCreate(){
    selectday = document.querySelectorAll(".canAppointment")
    selectday.forEach( e => {
        e.addEventListener("click",()=>{
            e.classList.add("selectday")
            if(selseDayArray[0] == ''){
                selseDayArray[0] = `${year}`+`${(month + 1)}`.padStart(2, '0')+`${(e.innerHTML)}`.padStart(2, '0')
            }
            if(/selectday/.text(e.classList)){
                document.write('aaaaaa')
            }
        });
    });
}
function dateChange(number){
    if((month + number) < 0){
        year += number;
        month = 11
    }else if((month + number) > 11){
        year += number;
        month = 0
    }else{
        month += number;
    }
    showDates();  
}

//獲取選擇的年月的第一天是星期幾 
// function getDays(year,month){
//     var d = new Date(year,month);
//     return d.getDay();
// }
//改變月曆日期
function showDates(){
    yearSelect.innerHTML = year;
    monthSelect.innerHTML = (`${month + 1}`).padStart(2, '0');
    datestable.innerHTML= "";
    var yearsm = parseInt(yearSelect.innerHTML);
    var monthsm = parseInt(monthSelect.innerHTML);
    // var nullnumber = getDays(year,month - 1); //當月星期幾開始 
    var nullnumber = new Date(yearsm,monthsm - 1).getDay(); //當月星期幾開始 
    var allnumber = nullnumber + new Date(yearsm,monthsm,0).getDate() ; //算出這月星期過開使+算出這個月有幾天
    // document.write(allnumber)
    //建立空的li
    var tr = document.createElement('tr');
    for(var k = 1; k <= allnumber ;k++){
        tr.appendChild(createTd((k <= nullnumber) ?  "":(k - nullnumber) ));
        if(k != 0 && k%7 == 0){
            datestable.appendChild(tr)
            tr = document.createElement('tr')
        } 
    }
    datestable.appendChild(tr)
    selectBtnCreate()
}
//建立td並新增至對應的容器
function createTd(text){
    var td = document.createElement('td');
    var span = document.createElement('span');
    span.innerHTML = text;
    td.append(span)
    if(text != ""){
        td.classList.add("canAppointment")
    }
    return td;
}


let selectRoomBtn;
let selectDateBtn;
let selectPeopleNumberBtn;
let selectPage;
let selectRoomPage;
let selectDatePage;
let selectDatePageBtn;
let selectRoomPageCell;
window.addEventListener("load",()=>{
    selectRoomBtn = document.querySelector('.determineRoom .txt div:nth-child(1)')
    selectDateBtn = document.querySelector('.determineRoom .txt div:nth-child(2)')
    selectPeopleNumberBtn = document.querySelector('.determineRoom .txt div:nth-child(3)')
    selectPage = document.querySelector('.selectpage')
    selectRoomPage = document.querySelector('.selectRoom')
    selectDatePage = document.querySelector('.selectDate')
    selectRoomPageCell = document.querySelectorAll('.selectRoom>article')
    selectDatePageBtn = document.querySelector('.selectDate > .btn ')
    selectRoomBtn.addEventListener('click',()=>{
        selectPage.classList.add('showSelectPage')
        selectRoomPage.classList.add('show')
    });
    selectDateBtn.addEventListener('click',()=>{
        selectPage.classList.add('showSelectPage')
        selectDatePage.classList.add('show')
    });
    selectPeopleNumberBtn.addEventListener('click',()=>{

    });
    
    // selectPage.addEventListener("click",(e)=>{
    //     e.stopPropagation()
    //     // e.preventDefault()
    //     selectPage.classList.remove('showSelectPage')
    //     selectDatePage.classList.remove('show')
    //     selectRoomPage.classList.remove('show')
        
    // },true);
    selectDatePageBtn.addEventListener('click',()=>{
        selectPage.classList.remove('showSelectPage')
        selectDatePage.classList.remove('show')
    });
    selectRoomPageCell.forEach(e => {
        e.addEventListener('click',()=>{
            // document.write(e.innerHTML);
            selectPage.classList.remove('showSelectPage')
            selectRoomPage.classList.remove('show')

        })
        
    });
});