// task 1
window.onload = function(){
    // take newDate 
        const today = new Date();
    // make array with day names
        const dayName = new Array(7);
            dayName[0] = "Sunday";
            dayName[1] = "Monday";
            dayName[2] = "Tuesday";
            dayName[3] = "Wednesday";
            dayName[4] = "Thursday";
            dayName[5] = "Friday";
            dayName[6] = "Saturday";
    // take specific day from array
        var n = dayName[today.getDay()];
    // take the rest of dates
        const currentTime = new this.Date();
        const hh = currentTime.getHours();
        const mm = currentTime.getMinutes();
        const ss = currentTime.getSeconds();
    // AM /PM cant be const. let is allowed. 
        let amPm = " ";
        if (hh >= 12){
            amPm += "PM";
        } else {
            amPm += "AM";}
    // show outcome inside html element
        document.getElementById("task1").innerHTML=  "Today is: " + n +'</br>' + "Current time is: "+'</br>' + + hh + amPm + " : " + mm + " : " + ss;
    //task 3
    // take newDate
        var d = new Date();
        var yy = d.getFullYear();
        var mo = d.getMonth();
        var dd = d.getDate();
    
        document.getElementById("task3").innerHTML= dd + "-"+ mo +"-"+yy;
    //task 4     
        var aa = 5;
        var  bb = 6;
        var  cc = 7;
    // hernon formula for triangle area 
        var ar = (aa+bb+cc)/2;
        var area =  Math.sqrt(ar*((ar-aa)*(ar-bb)*(ar-cc)));
    
        document.getElementById("task4").innerHTML=  area;
    //task 7        
            // loop from 2014 to 2050, count every year
            for (var year = 2014; year <= 2050; year++){
                // find specific month and day 
                var firstJan = new Date(year, 0, 1);
                if ( firstJan.getDay() === 0 )
                    document.getElementById("task7").innerHTML = "1st January is being a Sunday  "+ year;};
    //task9
    var dayNow = new Date();
                        var toDay = dayNow.getTime();
                        // var christmas_day = new Date(present_date.getFullYear(), 11, 25)
                        var xmas = new Date("2020,12,25");
                        var xmasDay = xmas.getTime();
                    //one day in miliseconds
                        var oneDay = 1000*60*60*24;                     
                        var howManyDays = (Math.ceil((xmasDay-toDay)/(oneDay)));
                        document.getElementById("task9").innerHTML = howManyDays;
                    
    }
    //task 5 
    //task 6
    function checkYear(){
        //take value
        var leap = document.getElementById("leapYear").value;
        // document.getElementById("againLeap").innerHTML = leap;
        var leapFour = 4;
    // check if value is number
        if (isNaN(leap)){
            document.getElementById("againLeap").innerHTML = "Type numbers only"; 
            document.getElementById("task6").style.backgroundColor = "#d9534f";
    // check if its empty string
        }else if (leap == "") {
            document.getElementById("againLeap").innerHTML = "Type any number"; 
            document.getElementById("task6").style.backgroundColor = "#5bc0de";
        } 
    // leap year is divisionable by4
        else if (leap % leapFour == 0){
            document.getElementById("againLeap").innerHTML = "This is Leap Year!"; 
            document.getElementById("task6").style.backgroundColor = "#5cb85c";
        } else {
         //if (leap % leapFour != 0)  
            document.getElementById("againLeap").innerHTML = "This is not Leap Year!"; 
            document.getElementById("task6").style.backgroundColor = "#f0ad4e";
        }};
    //task 7 inside window.onload
    //task8
    function guessNumber(){
    // take value
        var givenNumber = document.getElementById("takeNumber").value;
     // random from 1-10
        var rand = Math.floor(Math.random() *10);
            document.getElementById("guessOutcome").innerHTML = rand;
    if (isNaN(givenNumber)){
            document.getElementById("guessOutcome").innerHTML = "Type number!";
            document.getElementById("task8").style.backgroundColor = "#f0ad4e";
            document.getElementById("takeNumber").value = '' ;
        } else if(givenNumber == rand){
            document.getElementById("guessOutcome").innerHTML = "Good work! You hit " + rand;
            document.getElementById("task8").style.backgroundColor = "#5cb85c";
            document.getElementById("takeNumber").value = '' ;
        }else {
            document.getElementById("guessOutcome").innerHTML = "Not matched! The number was: " + rand;
            document.getElementById("task8").style.backgroundColor = "#d9534f";
            document.getElementById("takeNumber").value = '' ;
            
        }
        }
    //task 9 inside window.onload
    //task 10 
    function multiply(){
        firstNumber = document.getElementById("firstNumber").value;
        secondNumber = document.getElementById("secondNumber").value;
        document.getElementById("task10outcome").innerHTML = firstNumber * secondNumber;
    };
    function divide(){
        firstNumber = document.getElementById("firstNumber").value;
        secondNumber = document.getElementById("secondNumber").value;
        document.getElementById("task10outcome").innerHTML = firstNumber / secondNumber;
    }
    
    
    
    