
function drawCalendar(id, year, month) {
       var cal = document.getElementById(id);
        var    mon = month -1;
        var    d = new Date(year,mon);
      var     now = new Date();
        var thstyle=  ' style = border: 1px solid black; padding: 3px; text-align: center;font-weight: bold;background-color: #E6E6E6;>'
        var    table = '<table style="border-collapse:collapse;"><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'
        for (var i =0 ; i<getDay(d);i++)
        {
            table += '<td></td>'
        }

        while (d.getMonth()==mon) {
           
            if (d.getDate(d)==now.getDate(now))
             {
            table += '<td style="background-color:red">' + d.getDate() + '</td>';
            }
            else {table += '<td>' + d.getDate() + '</td>';}
            if (getDay(d)%7==6){
                table +='</tr><tr>';
            }
            d.setDate(d.getDate()+1);
        }

        if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }
      table += '</tr></table>';
     cal.innerHTML = table;

    }

    function getDay(date) { 
      var day = date.getDay();
      if (day == 0) day = 7;
      return day - 1;
    }

    drawCalendar("cal", 2016, 07);