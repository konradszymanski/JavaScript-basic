// task 1
window.onload = function () {
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
    if (hh >= 12) {
        amPm += "PM";
    } else {
        amPm += "AM";
    }
    // show outcome inside html element
    document.getElementById("task1").innerHTML = "Today is: " + n + '</br>' + "Current time is: " + '</br>' + +hh + amPm + " : " + mm + " : " + ss;
    //task 3
    // take newDate
    var d = new Date();
    var yy = d.getFullYear();
    var mo = ("0" + (d.getMonth() + 1)).slice(-2); //d.getMonth() + 1;
    var dd = ("0" + d.getDate()).slice(-2); // d.getDate();

    document.getElementById("task3").innerHTML = dd + "-" + mo + "-" + yy;

    //task 4     
    var aa = 5;
    var bb = 6;
    var cc = 7;
    // hernon formula for triangle area 
    var ar = (aa + bb + cc) / 2;
    var area = Math.sqrt(ar * ((ar - aa) * (ar - bb) * (ar - cc)));
    document.getElementById("task4").innerHTML = area;
    //task5
    task5 = "w3resource"
    document.getElementById("task5").innerHTML = task5.slice();
    //task 7        
    // loop from 2014 to 2050, count every year
    for (var year = 2014; year <= 2050; year++) {
        // find specific month and day 
        var firstJan = new Date(year, 0, 1);
        if (firstJan.getDay() === 0)
            document.getElementById("task7").innerHTML = "1st January is being a Sunday  " + year;
    };
    //task9
    var dayNow = new Date();
    var toDay = dayNow.getTime();
    // var christmas_day = new Date(present_date.getFullYear(), 11, 25)
    var xmas = new Date("2020,12,25");
    var xmasDay = xmas.getTime();
    //one day in miliseconds
    var oneDay = 1000 * 60 * 60 * 24;
    var howManyDays = (Math.ceil((xmasDay - toDay) / (oneDay)));
    document.getElementById("task9").innerHTML = howManyDays;

}
//task 5 
//task 6
function checkYear() {
    //take value
    var leap = document.getElementById("leapYear").value;
    // document.getElementById("againLeap").innerHTML = leap;
    var leapFour = 4;
    // check if value is number
    if (isNaN(leap)) {
        document.getElementById("againLeap").innerHTML = "Type numbers only";
        document.getElementById("task6").style.backgroundColor = "#d9534f";
        // check if its empty string
    } else if (leap == "") {
        document.getElementById("againLeap").innerHTML = "Type any number";
        document.getElementById("task6").style.backgroundColor = "#5bc0de";
    }
    // leap year is divisionable by4
    else if (leap % leapFour == 0) {
        document.getElementById("againLeap").innerHTML = "This is Leap Year!";
        document.getElementById("task6").style.backgroundColor = "#5cb85c";
    } else {
        //if (leap % leapFour != 0)  
        document.getElementById("againLeap").innerHTML = "This is not Leap Year!";
        document.getElementById("task6").style.backgroundColor = "#f0ad4e";
    }
};
//task 7 inside window.onload
//task8
function guessNumber() {
    // take value
    var givenNumber = document.getElementById("takeNumber").value;
    // random from 1-10
    var rand = Math.floor(Math.random() * 10);
    document.getElementById("guessOutcome").innerHTML = rand;
    if (isNaN(givenNumber)) {
        document.getElementById("guessOutcome").innerHTML = "Type number!";
        document.getElementById("task8").style.backgroundColor = "#f0ad4e";
        document.getElementById("takeNumber").value = '';
    } else if (givenNumber == rand) {
        document.getElementById("guessOutcome").innerHTML = "Good work! You hit " + rand;
        document.getElementById("task8").style.backgroundColor = "#5cb85c";
        document.getElementById("takeNumber").value = '';
    } else {
        document.getElementById("guessOutcome").innerHTML = "Not matched! The number was: " + rand;
        document.getElementById("task8").style.backgroundColor = "#d9534f";
        document.getElementById("takeNumber").value = '';

    }
}
//task 9 inside window.onload
//task 10 
function multiply() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    document.getElementById("task10outcome").innerHTML = firstNumber * secondNumber;
};

function divide() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    document.getElementById("task10outcome").innerHTML = firstNumber / secondNumber;
};
//task11
function celsius() {
    cel = document.getElementById("celsius").value;
    if (cel == "") {
        document.getElementById("celfah").innerHTML = "Emplty value! Try again";
    } else {
        celConv = (cel - 32) / 1.8;
        document.getElementById("celfah").innerHTML = cel + " Celsius is:" + '</br>' + celConv + '</br>' + "Fahrenheit";
        document.getElementById("fahrenheit").value = '';
    }
};

function fahrenheit() {
    fah = document.getElementById("fahrenheit").value;
    if (fah == "") {
        document.getElementById("celfah").innerHTML = "Emplty value! Try again";
    } else {
        fahConv = (fah * 9 / 5) + 32;
        document.getElementById("celfah").innerHTML = fah + " Fahrenheit is:" + '</br>' + fahConv + '</br>' + "Celsius";
        document.getElementById("celsius").value = '';
    }
};
//task12
//function getUrl (){
//    document.getElementById("outcomeUrl").innerHTML= window.location.href;
//};
//task13
var var_name = 'userName';
var n = 120;
this[var_name] = n;
//console.log(this[var_name])
//task14
function getExtension(filename) {
    filename = "index.html";
    document.getElementById("extension").innerHTML = filename.split('.').pop();
};
//task15
function divideThirteen() {
    someNumber = document.getElementById("thirteen").value;
    difference = someNumber - 13;
    if (someNumber > 13) {
        document.getElementById("showthirteen").innerHTML = difference * 2;
    } else if (someNumber < 13) {
        document.getElementById("showthirteen").innerHTML = difference;
    } else {
        document.getElementById("showthirteen").innerHTML = "Type number only";
    }
}
//task16
function sumNumber() {
    sumNumberone = document.getElementById("sumNumberone").value;
    sumNumbertwo = document.getElementById("sumNumbertwo").value;
    sumNumbers = parseInt(sumNumberone) + parseInt(sumNumbertwo);
    if (isNaN(sumNumberone)) {
        document.getElementById("sumAnswer").innerHTML = "Numbers only";
    } else if (isNaN(sumNumbertwo)) {
        document.getElementById("sumAnswer").innerHTML = "Numbers only";
    } else if (sumNumbers > sumNumberone) {
        document.getElementById("sumAnswer").innerHTML = sumNumbers * 3;
    } else {
        document.getElementById("sumAnswer").innerHTML = sumNumbers;
    }
};
//taks17
function computeNum() {
    computeOne = document.getElementById("computeOne").value;
    computeTwo = document.getElementById("computeTwo").value;
    diffNumber = parseInt(computeOne) - parseInt(computeTwo);
    if (isNaN(computeOne)) {
        document.getElementById("compute").innerHTML = "Numbers only";
    } else if (isNaN(computeTwo)) {
        document.getElementById("compute").innerHTML = "Numbers only";
    } else if (diffNumber > 19) {
        document.getElementById("compute").innerHTML = diffNumber * 3;
    } else {
        document.getElementById("compute").innerHTML = diffNumber;
    }
};
//task18
function task18true(numtask18a, numtask18b) {
    numtask18a = document.getElementById("task18a").value;
    numtask18b = document.getElementById("task18b").value;
    sumtask18 = parseInt(numtask18a) + parseInt(numtask18b);

    if ((numtask18a + numtask18b === 50) || (numtask18a == 50 || numtask18b == 50)) {
        document.getElementById("task18").innerHTML = "true";
    } else {
        document.getElementById("task18").innerHTML = "false";
    }
}
//task19 
function task19() {
    numtask19 = document.getElementById("task19a").value;
    if ((Math.abs(100 - numtask19) <= 20) ||
        (Math.abs(400 - numtask19) <= 20)) {
        document.getElementById("task19ans").innerHTML = "true";
    } else {
        document.getElementById("task19ans").innerHTML = "false";
    }
}
//task20
function task20() {
    numtask20a = document.getElementById("task20a").value;
    numtask20b = document.getElementById("task20b").value;

    if (numtask20a > 0 && numtask20b > 0) {
        document.getElementById("task20ans").innerHTML = "false";
    } else if (numtask20a < 0 && numtask20b < 0) {
        document.getElementById("task20ans").innerHTML = "false";
    } else {
        document.getElementById("task20ans").innerHTML = "true";
    }
}
//task21
function task21() {
    var task21value = document.getElementById("task21").value;
    var findPY = task21value.charAt(0) + task21value.charAt(1);
    var lettersPY = "Py";
    if (findPY == "py" || findPY == "Py") {
        document.getElementById("task21ans").innerHTML = task21value;
    } else {
        document.getElementById("task21ans").innerHTML = lettersPY.concat(task21value);
    }
}
//task22
function task22() {
    task22value = document.getElementById("task22").value;
    task22random = Math.floor(Math.random() * task22value.length) + 1;
    //document.getElementById("task22ans").innerHTML = task22random;
    document.getElementById("task22ans").innerHTML = "Removed random character number: " + task22random;
    // slice method for showing the first part od string 
    task22firstpart = task22value.slice(0, task22random - 1)
    // substring will take second part of string and hides the first part - 
    document.getElementById("task22ansB").innerHTML = "Output: " + task22firstpart + task22value.substring(task22random);
}
//task23
function task23() {
    task23word = document.getElementById("task23").value;
    //check length of string
    if (task23word.length <= 1) {
        document.getElementById("task23ans").innerHTML = "Word has to be longer!"
    } else {
        document.getElementById("task23ans").innerHTML = task23word.slice(-1) + task23word.substring(1,
            task23word.length - 1) + task23word.charAt(0);
    }
}
//task24 
function task24() {
    task24word = document.getElementById("task24").value;
    task24letter = task24word.charAt(0);
    document.getElementById("task24ans").innerHTML = task24letter + task24word + task24letter;
}
//task25
function task25() {
    task25word = document.getElementById("task25").value;
    task25letter = task25word.substring(0, 3);
    if (task25word.length < 3) {
        document.getElementById("task25ans").innerHTML = "Word is too short!";
    } else {
        document.getElementById("task25ans").innerHTML = task25letter + task25word + task25letter;
    }
}
//task26
function task26() {
    task26number = document.getElementById("task26").value;
    if (isNaN(task26number)) {
        document.getElementById("task26ans").innerHTML = "Only numbers!"
    } else if (task26number % 3 === 0 || task26number % 7 === 0) {
        document.getElementById("task26ans").innerHTML = "true";
    } else {
        document.getElementById("task26ans").innerHTML = "false";
    }
}
//task27
function task27() {
    task27word = document.getElementById("task27").value;
    check27word = task27word.substring(0, 4); //take first 4 letters
    if (check27word === "Java" || check27word === "java") {
        document.getElementById("task27ans").innerHTML = "true";
    } else {
        document.getElementById("task27ans").innerHTML = "false";
    }
}
//task28 
function task28() {
    var el = document.getElementById("task28a");
    var val = el.value.split(' '); //seperate string to array, divided by space
    el.value = val.reduce((a, c) => a + Number(c), 0); // reduce will add two or more numbers
    if (el.value >= 50 && el.value <= 99) {
        document.getElementById("task28ans").innerHTML = "true";
    } else {
        document.getElementById("task28ans").innerHTML = "false";
    }
}
//task29
function task29() {
    var el = document.getElementById("task29");
    var val = el.value.split(' ');
    el.value = val.reduce((a, c) => a + Number(c), 0);
    if (el.value >= 50 && el.value <= 99) {
        document.getElementById("task29ans").innerHTML = "true";
    }
}

function task30() {
    const task30word = document.getElementById("task30").value;
    word30 = task30word.slice(4, 10); //take "letters"
    if (word30 == "script") {
        document.getElementById("task30ans").innerHTML = task30word.substr(0, 4);
    } else {
        document.getElementById("task30ans").innerHTML = task30word
    }
}
//task31
function task31() {
    var el = document.getElementById("task31");
    var val = el.value.split(' ').sort(); //arrays first, and sort for put numbers in order
    document.getElementById("task31ans").innerHTML = val[val.length - 1]; //show last number - the highest
}
//task32
function task32() {
    var el = document.getElementById("task32");
    var val = el.value.split(' ').sort();
    if (val[0] <= 99 && val[1] <= 99) {
        document.getElementById("task32ans").innerHTML = val[val.length - 1];
    } else if (val[0] >= 100 || val[1] >= 100) {
        document.getElementById("task32ans").innerHTML = "numbers are 100 or over!"
    }
}
//task33
function task33() {
    var el = document.getElementById("task33");
    var val = el.value.split(' ').sort();
    if ((val[0] >= 40 || val[0] <= 60 ||
            val[1] >= 40 || val[1] <= 60) &&
        (val[0] >= 70 || val[0] <= 100 ||
            val[1] >= 70 || val[1] <= 100)) {
        document.getElementById("task33ans").innerHTML = `true, these numbers are: ${val[0]} and ${val[1]}`;
    } else {
        document.getElementById("task33ans").innerHTML = "false";
    }
}
//task34
function task34() {
    var el = document.getElementById("task34");
    var val = el.value.split(' ').sort();

    if (val[0] >= 40 && val[0] <= 60 && val[1] >= 40 && val[1] <= 60 //&&
        //val[0] <= 60 && val[1] >= 40 || val[1] <= 60
    ) {
        document.getElementById("task34ans").innerHTML = `larger number is ${val[1]}`;
    } else {
        document.getElementById("task34ans").innerHTML = "not in range 40 - 60";
    }
}
// //task35
function task35() {
    task35word = document.getElementById("task35a").value;
    task35char = document.getElementById("task35b").value;

    takecharOne = task35word.charAt(1);
    takecharTwo = task35word.charAt(3);


    if (task35char === takecharTwo && task35char === takecharTwo) {
        document.getElementById("task35ans").innerHTML = "true";
    } else {
        document.getElementById("task35ans").innerHTML = "false";
    }
}
//task36
function task36() {
    const el = document.getElementById("task36");
    const val = el.value.split(' '); //spilt by space
    const first = val[0].slice(-1); //take last digit from each nummbers 
    const second = val[1].slice(-1);
    const third = val[2].slice(-1);

    if (first === second && first === third) {
        document.getElementById("task36ans").innerHTML = "True: all numbers has " + first;
    } else {

        document.getElementById("task36ans").innerHTML = `False, all numbers are different: ${first}, ${second}, ${third}`;

    }
}
//task37
task37 = () => {

    const task37word = document.getElementById("task37").value;
    if (task37word.length <= 3) {
        document.getElementById("task37ans").innerHTML = task37word.toUpperCase();
    } else {
        document.getElementById("task37ans").innerHTML = task37word.slice(0, 3).toLowerCase() + task37word.substr(3, task37word.length).toUpperCase();
    }

}
//task38
task38 = () => {
    let rand = Math.floor(Math.random() * 100);
    if (rand > 89 && rand <= 100) {
        document.getElementById("task38ans").innerHTML = `Success! Student gets ${rand} points! Grade: A+`;
    } else {
        document.getElementById("task38ans").innerHTML = `Student gets ${rand} points, failure`
    }
}
//taks39
task39 = () => {
    let el = document.getElementById('task39');
    let val = el.value.split(' ');
    el.value = val.reduce((a, c) => a + Number(c), 0);
    if (el.value >= 50 && el.value <= 99) {
        document.getElementById('task39ans').innerHTML = "65";
    } else {
        document.getElementById('task39ans').innerHTML = "80";
    }
}
//task40
task40 = () => {
    let el = document.getElementById('task40');
    let val = el.value.split(' ');
    el.value = val.reduce((a, c) => a + Number(c), 0);
    if (val[0] == 8 || val[1] == 8 || el.value == 8) {
        document.getElementById("task40ans").innerHTML = "true";
    } else {
        document.getElementById("task40ans").innerHTML = "false";
    }
}