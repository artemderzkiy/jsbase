
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
        var days = Math.floor(time / 864e5);
        var hours = Math.floor(time / 36e5) % 24; 
        var minutes = Math.floor(time / 6e4) % 60;
        var seconds = Math.floor(time / 1e3) % 60;  
        var digit='<div style="width:70px;text-align:center">'+
        '<div style="font-size:65px;">';
        var text='</div><div>'
        var end='</div></div><div style="font-size:45px;">:</div>'
        document.getElementById('mytimer').innerHTML = '<div>осталось: </div>'+
        digit+days+text+'Дней'+end+digit+hours+text+'Часов'+end+
        digit+minutes+text+'Минут'+end+digit+seconds+text+'Секунд';
        if (!seconds && !minutes && !days && !hours) {              
            clearInterval(interval);
            alert("Время вышло!");              
        }           
    }
    now.setSeconds(now.getSeconds() + 1); 
}, 1000);
}
countDown(00,00,00,15,07,2018);   