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
    yearSelect = document.querySelectorAll('#year');
    monthSelect = document.querySelectorAll('#month');
    datestable = document.querySelectorAll('#datestable');
    rightBtn =  document.querySelectorAll('.rightBtn')
    leftBtn = document.querySelectorAll('.leftBtn')
   
    var nowdate = new Date();       //獲取當前的日期
    year = nowdate.getFullYear();
    month = nowdate.getMonth();
    showDatesInit();
                      //呼叫顯示日期的函式

    rightBtn.forEach( (e,index) => {
        e.addEventListener("click",function(){    
            dateChange(1,index)
            // document.write()
        });
    });
    leftBtn.forEach( (e,index) => {
        e.addEventListener("click",function(){    
            dateChange(-1,index)
        });
    });
})
function dateChange(number,index){
    if((parseInt(monthSelect[index].innerHTML) + number) < 0){
        yearSelect[index].innerHTML =  parseInt(yearSelect[index].innerHTML) + number;
        monthSelect[index].innerHTML = 11
    }else if((month + number) > 11){
        yearSelect[index].innerHTML = parseInt(yearSelect[index].innerHTML) + number;
        monthSelect[index].innerHTML = 0
    }else{
        monthSelect[index].innerHTML = parseInt(monthSelect[index].innerHTML) + number;
    }
    showDates();
   
}
function selectBtnCreate(){
    selectday = document.querySelectorAll(".canAppointment")
    selectday.forEach( e => {
        e.addEventListener("click",()=>{
            e.classList.toggle("selectday")
            if(selseDayArray[0] == ''){
                selseDayArray[0] = `${year}`+`${(month + 1)}`.padStart(2, '0')+`${(e.innerHTML)}`.padStart(2, '0')
            }
            // if(/selectday/.text(e.classList)){
            //     document.write('aaaaaa')
            // }
        });
    });
}


//獲取選擇的年月的第一天是星期幾 
// function getDays(year,month){
//     var d = new Date(year,month);
//     return d.getDay();
// }
//改變月曆日期
function showDatesInit(){
    yearSelect.forEach(e=>{
        e.innerHTML = year;
    });
    monthSelect.forEach(e=>{
        e.innerHTML = (`${month + 1}`).padStart(2, '0');
    });
    datestable.forEach(e=>{
        e.innerHTML =  "";
    });
    showDates();
}
function showDates(){
    datestable.forEach(e=>{
        e.innerHTML =  "";
    });
    yearSelect.forEach((e,index)=>{
        yearsm = parseInt(e.innerHTML);
        monthsm = parseInt(monthSelect[index].innerHTML);
        nullnumber = new Date(yearsm,monthsm - 1).getDay();
        allnumber = nullnumber + new Date(yearsm,monthsm,0).getDate() ; //算出這月星期過開使+算出這個月有幾天

        var tr = document.createElement('tr');
        for(var k = 1; k <= allnumber ;k++){
            tr.appendChild(createTd((k <= nullnumber) ?  "":(k - nullnumber) ));
            if(k != 0 && k%7 == 0){
                datestable[index].appendChild(tr)
                tr = document.createElement('tr')
            } 
        }
        datestable[index].appendChild(tr)
        selectBtnCreate()
    })
}
//建立td並新增至對應的容器
function createTd(text){
    var td = document.createElement('td');
    var span = document.createElement('span');
    span.innerHTML = text;
    td.append(span)
    if(text != ""){
        if(text == 10 || text == 15 || text == 18 || text == 27 ){
            td.classList.add("canNotAppointment")
        }else{
            td.classList.add("canAppointment")
        }
        
    }
    return td;
}
