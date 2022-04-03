var hours=document.querySelector('.hour');
var minutes=document.querySelector('.minute');
var seconds=document.querySelector('.ms');
var pm=document.querySelector('.pm');


function showTime(){
    var time=new Date();

    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    var amPm=hours>=12?"AM":"PM";

    hours.textContent=hour;
    minutes.textContent=minute;
    seconds.textContent=second;
    pm.textContent=amPm;

}

setInterval(()=>{
    showTime()
},10);

