
function countDown(second,endMinute,endHour,endDay,endMonth,endYear) {
var now = new Date();
second = (arguments.length == 1) ? second + now.getSeconds() : second;
endYear =  typeof(endYear) != 'undefined' ?  endYear : now.getFullYear();            
endMonth = endMonth ? endMonth - 1 : now.getMonth();   
endDay = typeof(endDay) != 'undefined' ? endDay :  now.getDate();    
endHour = typeof(endHour) != 'undefined' ?  endHour : now.getHours();
endMinute = typeof(endMinute) != 'undefined' ? endMinute : now.getMinutes(); 



var endDate = new Date(endYear,endMonth,endDay,endHour,endMinute,second+1); 
var interval = setInterval(function() { 
    var time = endDate.getTime() - now.getTime();
    if (time < 0) {    
        clearInterval(interval);
        alert("Неверная дата!");            
    } else { 
        var years = Math.floor(time/31536e6);
        
        var monthses = Math.floor(time/2592e6)%12;

        var days = Math.floor(time / 864e5)%365;
        var hours = Math.floor(time / 36e5) % 24; 
        var minutes = Math.floor(time / 6e4) % 60;
        var seconds = Math.floor(time / 1e3) % 60;  
       var digit='<div style="width:70px;float:left;text-align:center">'+
        '<div style="font-size:65px;">';
        var text='</div><div>'
        var end='</div></div><div style="float:left;font-size:45px;">:</div>'

        yeartext=declOfNum(Number(years),['год','года','лет']);
        monthtext=declOfNum(Number(monthses),['месяц','месяца','месяцев']);
        daytext=declOfNum(Number(days),['день','дня','дней']);
        hourtext=declOfNum(Number(hours),['час','часа','часов']);
        minutetext=declOfNum(Number(minutes),['минута','минуты','минут']);
        secondtext=declOfNum(Number(seconds),['секунда','секунды','секунд']);

        document.getElementById('mytimer').innerHTML = '<div>осталось: </div>'+
        digit+years+text+yeartext+end+digit+monthses+text+monthtext+end+digit+days+text+daytext+end+digit+hours+text+hourtext+end+
        digit+minutes+text+minutetext+end+digit+seconds+text+secondtext;
        if (!seconds && !minutes && !days && !hours && !years && !monthses) {              
            clearInterval(interval);
            alert("Время вышло!");              
        }           
    }
    now.setSeconds(now.getSeconds() + 1); 
}, 1000);
}
function declOfNum(number, titles)  
{  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
} 

countDown(00,00,00,15,07,2018);   