// task 1
function task1() {
  const today = new Date(); // take newDate
  const dayName = new Array(7); // make array with day names
  dayName[0] = "Sunday";
  dayName[1] = "Monday";
  dayName[2] = "Tuesday";
  dayName[3] = "Wednesday";
  dayName[4] = "Thursday";
  dayName[5] = "Friday";
  dayName[6] = "Saturday";
  var n = dayName[today.getDay()]; // take specific day from array
  const currentTime = new this.Date(); // take the rest of dates
  const hh =
    currentTime.getHours() < 10
      ? "0" + currentTime.getHours()
      : currentTime.getHours();
  const mm =
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes();
  const ss =
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds();
  // AM /PM cant be const. let is allowed.
  let amPm = " ";
  if (hh >= 12) {
    amPm += "PM";
  } else {
    amPm += "AM";
  }
  // show outcome inside html element
  document.getElementById(
    "task1"
  ).innerHTML = `Today is:<br/> ${n}<br/> Current time is: <br/> ${hh}${amPm} : ${mm} : ${ss}`;
}
setInterval(task1, 1000);
task1();
//task 3
// take newDate
var d = new Date();
var yy = d.getFullYear();
var mo = ("0" + (d.getMonth() + 1)).slice(-2); //d.getMonth() + 1;
var dd = ("0" + d.getDate()).slice(-2); // d.getDate();
document.getElementById("task3").innerHTML = dd + "-" + mo + "-" + yy;
//task 4
function task4() {
  var aa = 5;
  var bb = 6;
  var cc = 7;
  // hernon formula for triangle area
  var ar = (aa + bb + cc) / 2;
  var area = Math.sqrt(ar * ((ar - aa) * (ar - bb) * (ar - cc)));
  document.getElementById("task4").innerHTML = area;
}
task4();

// function task5() {
//   const w3 = "w3resource";
//   const ans5 = document.getElementById("task5");
//   ans5.textContent = w3[w3.length - 1] + w3.substring(0, w3.length - 1);
// }
// task5();
// setInterval(task5, 1000)
const w3 = "w3resource";
const ans5 = document.getElementById("task5");
setInterval(() => {
  ans5.textContent = w3[w3.length - 1] + w3.substring(0, w3.length - 1);
}, 1000);

//task6
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
}

function task7() {
  // loop from 2014 to 2050, count every year
  for (var year = 2014; year <= 2050; year++) {
    // find specific month and day
    var firstJan = new Date(year, 0, 1);
    if (firstJan.getDay() === 0)
      document.getElementById("task7").innerHTML += `${year} \n`;
    //  "1st January is being a Sunday  " + year;
  }
}
task7();
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
    document.getElementById("takeNumber").value = "";
  } else if (givenNumber == rand) {
    document.getElementById("guessOutcome").innerHTML =
      "Good work! You hit " + rand;
    document.getElementById("task8").style.backgroundColor = "#5cb85c";
    document.getElementById("takeNumber").value = "";
  } else {
    document.getElementById("guessOutcome").innerHTML =
      "Not matched! The number was: " + rand;
    document.getElementById("task8").style.backgroundColor = "#d9534f";
    document.getElementById("takeNumber").value = "";
  }
}
//task9
function task9() {
  var dayNow = new Date();
  var toDay = dayNow.getTime();
  // var christmas_day = new Date(present_date.getFullYear(), 11, 25)
  var xmas = new Date("2020,12,25");
  var xmasDay = xmas.getTime();
  //one day in miliseconds
  var oneDay = 1000 * 60 * 60 * 24;
  var howManyDays = Math.ceil((xmasDay - toDay) / oneDay);
  document.getElementById("task9").innerHTML = howManyDays;
}
task9();
//task 10
function multiply() {
  firstNumber = document.getElementById("firstNumber").value;
  secondNumber = document.getElementById("secondNumber").value;
  document.getElementById("task10outcome").innerHTML =
    firstNumber * secondNumber;
}

function divide() {
  firstNumber = document.getElementById("firstNumber").value;
  secondNumber = document.getElementById("secondNumber").value;
  document.getElementById("task10outcome").innerHTML =
    firstNumber / secondNumber;
}
//task11
function celsius() {
  cel = document.getElementById("celsius").value;
  if (cel == "") {
    document.getElementById("celfah").innerHTML = "Emplty value! Try again";
  } else {
    celConv = (cel - 32) / 1.8;
    document.getElementById("celfah").innerHTML =
      cel + " Celsius is:" + "</br>" + celConv + "</br>" + "Fahrenheit";
    document.getElementById("fahrenheit").value = "";
  }
}

function fahrenheit() {
  fah = document.getElementById("fahrenheit").value;
  if (fah == "") {
    document.getElementById("celfah").innerHTML = "Emplty value! Try again";
  } else {
    fahConv = (fah * 9) / 5 + 32;
    document.getElementById("celfah").innerHTML =
      fah + " Fahrenheit is:" + "</br>" + fahConv + "</br>" + "Celsius";
    document.getElementById("celsius").value = "";
  }
}
//task12
//function getUrl (){
//    document.getElementById("outcomeUrl").innerHTML= window.location.href;
//};
//task13
var var_name = "userName";
var n = 120;
this[var_name] = n;
//console.log(this[var_name])
//task14
function getExtension(filename) {
  filename = "index.html";
  document.getElementById("extension").innerHTML = filename.split(".").pop();
}
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
}
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
}
//task18
function task18true(numtask18a, numtask18b) {
  numtask18a = document.getElementById("task18a").value;
  numtask18b = document.getElementById("task18b").value;
  sumtask18 = parseInt(numtask18a) + parseInt(numtask18b);

  if (numtask18a + numtask18b === 50 || numtask18a == 50 || numtask18b == 50) {
    document.getElementById("task18").innerHTML = "true";
  } else {
    document.getElementById("task18").innerHTML = "false";
  }
}
//task19
function task19() {
  numtask19 = document.getElementById("task19a").value;
  if (Math.abs(100 - numtask19) <= 20 || Math.abs(400 - numtask19) <= 20) {
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
    document.getElementById("task21ans").innerHTML = lettersPY.concat(
      task21value
    );
  }
}
//task22
function task22() {
  task22value = document.getElementById("task22").value;
  task22random = Math.floor(Math.random() * task22value.length) + 1;
  //document.getElementById("task22ans").innerHTML = task22random;
  document.getElementById("task22ans").innerHTML =
    "Removed random character number: " + task22random;
  // slice method for showing the first part od string
  task22firstpart = task22value.slice(0, task22random - 1);
  // substring will take second part of string and hides the first part -
  document.getElementById("task22ansB").innerHTML =
    "Output: " + task22firstpart + task22value.substring(task22random);
}
//task23
function task23() {
  task23word = document.getElementById("task23").value;
  //check length of string
  if (task23word.length <= 1) {
    document.getElementById("task23ans").innerHTML = "Word has to be longer!";
  } else {
    document.getElementById("task23ans").innerHTML =
      task23word.slice(-1) +
      task23word.substring(1, task23word.length - 1) +
      task23word.charAt(0);
  }
}
//task24
function task24() {
  task24word = document.getElementById("task24").value;
  task24letter = task24word.charAt(0);
  document.getElementById("task24ans").innerHTML =
    task24letter + task24word + task24letter;
}
//task25
function task25() {
  task25word = document.getElementById("task25").value;
  task25letter = task25word.substring(0, 3);
  if (task25word.length < 3) {
    document.getElementById("task25ans").innerHTML = "Word is too short!";
  } else {
    document.getElementById("task25ans").innerHTML =
      task25letter + task25word + task25letter;
  }
}
//task26
function task26() {
  task26number = document.getElementById("task26").value;
  if (isNaN(task26number)) {
    document.getElementById("task26ans").innerHTML = "Only numbers!";
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
  var val = el.value.split(" "); //seperate string to array, divided by space
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
  var val = el.value.split(" ");
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
    document.getElementById("task30ans").innerHTML = task30word;
  }
}
//task31
function task31() {
  var el = document.getElementById("task31");
  var val = el.value.split(" ").sort(); //arrays first, and sort for put numbers in order
  document.getElementById("task31ans").innerHTML = val[val.length - 1]; //show last number - the highest
}
//task32
function task32() {
  var el = document.getElementById("task32");
  var val = el.value.split(" ").sort();
  if (val[0] <= 99 && val[1] <= 99) {
    document.getElementById("task32ans").innerHTML = val[val.length - 1];
  } else if (val[0] >= 100 || val[1] >= 100) {
    document.getElementById("task32ans").innerHTML = "numbers are 100 or over!";
  }
}
//task33
function task33() {
  var el = document.getElementById("task33");
  var val = el.value.split(" ").sort();
  if (
    (val[0] >= 40 || val[0] <= 60 || val[1] >= 40 || val[1] <= 60) &&
    (val[0] >= 70 || val[0] <= 100 || val[1] >= 70 || val[1] <= 100)
  ) {
    document.getElementById(
      "task33ans"
    ).innerHTML = `true, these numbers are: ${val[0]} and ${val[1]}`;
  } else {
    document.getElementById("task33ans").innerHTML = "false";
  }
}
//task34
function task34() {
  var el = document.getElementById("task34");
  var val = el.value.split(" ").sort();

  if (
    val[0] >= 40 &&
    val[0] <= 60 &&
    val[1] >= 40 &&
    val[1] <= 60 //&&
    //val[0] <= 60 && val[1] >= 40 || val[1] <= 60
  ) {
    document.getElementById(
      "task34ans"
    ).innerHTML = `larger number is ${val[1]}`;
  } else {
    document.getElementById("task34ans").innerHTML = "not in range 40 - 60";
  }
}
//task35
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
  const val = el.value.split(" "); //spilt by space
  const first = val[0].slice(-1); //take last digit from each nummbers
  const second = val[1].slice(-1);
  const third = val[2].slice(-1);

  if (first === second && first === third) {
    document.getElementById("task36ans").innerHTML =
      "True: all numbers has " + first;
  } else {
    document.getElementById(
      "task36ans"
    ).innerHTML = `False, all numbers are different: ${first}, ${second}, ${third}`;
  }
}
//task37
task37 = () => {
  const task37word = document.getElementById("task37").value;
  if (task37word.length <= 3) {
    document.getElementById("task37ans").innerHTML = task37word.toUpperCase();
  } else {
    document.getElementById("task37ans").innerHTML =
      task37word.slice(0, 3).toLowerCase() +
      task37word.substr(3, task37word.length).toUpperCase();
  }
};
//task38
task38 = () => {
  let rand = Math.floor(Math.random() * 100);
  if (rand > 89 && rand <= 100) {
    document.getElementById(
      "task38ans"
    ).innerHTML = `Success! Student gets ${rand} points! Grade: A+`;
  } else {
    document.getElementById(
      "task38ans"
    ).innerHTML = `Student gets ${rand} points, failure`;
  }
};
//taks39
task39 = () => {
  let el = document.getElementById("task39");
  let val = el.value.split(" ");
  el.value = val.reduce((a, c) => a + Number(c), 0);
  if (el.value >= 50 && el.value <= 99) {
    document.getElementById("task39ans").innerHTML = "65";
  } else {
    document.getElementById("task39ans").innerHTML = "80";
  }
};
//task40
task40 = () => {
  let el = document.getElementById("task40");
  let val = el.value.split(" ");
  el.value = val.reduce((a, c) => a + Number(c), 0);
  if (val[0] == 8 || val[1] == 8 || el.value == 8) {
    document.getElementById("task40ans").innerHTML = "true";
  } else {
    document.getElementById("task40ans").innerHTML = "false";
  }
};
//task41
task41 = () => {
  let el = document.getElementById("task41");
  let val = el.value.split(" ");
  el.value = val.reduce((a, c) => a + Number(c), 0);
  if ((val[0] == val[1]) == val[2]) {
    document.getElementById("task41ans").innerHTML = "30";
  } else if (val[0] == val[1] || val[0] == val[2] || val[1] == val[2]) {
    document.getElementById("task41ans").innerHTML = "40";
  } else {
    document.getElementById("task41ans").innerHTML = "20";
  }
};
task42 = () => {
  let el = document.getElementById("task42");
  let val = el.value.split(" ");
  //el.value = val.reduce((a, c) => a + Number(c), 0);
  if (val[0] < val[1] && val[1] < val[2]) {
    document.getElementById("task42ans").innerHTML = "Strict mode";
  } else {
    document.getElementById("task42ans").innerHTML = "Soft mode";
  }
};
task43 = () => {
  const el = document.getElementById("task43");
  const val = el.value.split(" ");
  const task43ans = document.getElementById("task43ans");
  const first = val[0];
  const second = val[1];
  const third = val[2];
  if (first.length === 1 || second.length === 1 || third.length === 1) {
    if (first === second || second === third) {
      task43ans.textContent = `Two or more digits are same`;
    } else {
      task43ans.textContent = "Rightmost digits are not the same";
    }
  } else if (
    first.slice(-1) === second.slice(-1) ||
    first.slice(-1) === third.slice(-1)
  ) {
    task43ans.textContent = `Two or more digits are same`;
  } else {
    task43ans.textContent = "Rightmost digits are not the same";
  }
};
task44 = () => {
  let el = document.getElementById("task44");
  let val = el.value.split(" ");
  if (val[0] >= 20 && val[0] < val[1] && val[0] < val[2]) {
    document.getElementById("task44ans").innerHTML = "true";
  } else {
    document.getElementById("task44ans").innerHTML = "false";
  }
};
task45 = () => {
  let el = document.getElementById("task45");
  let val = el.value.split(" ");
  el.value = val.reduce((a, c) => a + Number(c), 0);
  if (val[0] == 15 || val[1] == 15 || el.value == 15 || val[0] - val[1] == 15) {
    document.getElementById("task45ans").innerHTML = "true";
  } else {
    document.getElementById("task45ans").innerHTML = "false";
  }
};
task46 = () => {
  let el = document.getElementById("task46");
  let val = el.value.split(" ");
  if (
    (val[0] % 7 == 0 || val[0] % 11 == 0) &&
    (val[1] % 7 == 0 || val[1] % 11 == 0)
  ) {
    document.getElementById("task46ans").innerHTML = "true";
  } else {
    document.getElementById("task46ans").innerHTML = "false";
  }
};
task47 = () => {
  let el = document.getElementById("task47");
  let val = el.value.split(" ");
  if (val[0] >= 40 && val[0] <= 10000) {
    document.getElementById("task47ans").innerHTML = "true";
  } else {
    document.getElementById("task47ans").innerHTML = "false";
  }
};
task48 = () => {
  task48word = document.getElementById("task48").value;
  document.getElementById("task48ans").innerHTML = task48word
    .split("")
    .reverse()
    .join("");
  //devide string to single characters, than reverse characters. join method will delete commas from array.
};
//replace every character in a given string with the character following it in the alphabet
task49 = () => {
  let letters = document.getElementById("task49").value;
  // let arr will change letter to small
  // divided to array and joined to string
  //let arr = letters.toLowerCase().split(" ").join(",");
  //
  let arr = letters.toLowerCase();
  for (let i = 0; i < arr.length; i++) {
    // fromcharcode is to find letter by Unicode
    //charcodeat is to find unicode by letter
    document.getElementById("task49ans").textContent += String.fromCharCode(
      1 + letters.charCodeAt(i)
    );
  }
};
// capitalize the first letter of each word
task50 = () => {
  let task50word = document.getElementById("task50").value;
  let arr = task50word.toLowerCase().split(" "); //first to small letters
  for (let i = 0; i <= arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    // divided string to array and every element inside array arr[i], will give big first letter [0] and will be concatenate with the rest of the arr.
    document.getElementById("task50ans").textContent = arr.join(" ");
  }
};
//convert a given number to hours and minutes
task51 = () => {
  let task51number = document.getElementById("task51").value;
  let godziny = task51number / 60;
  if (isNaN(task51number)) {
    document.getElementById("task51ans").textContent = "numbers only";
  } else {
    document.getElementById("task51ans").textContent =
      task51number +
      " is " +
      parseInt(godziny) +
      " hours and " +
      (task51number - parseInt(godziny) * 60) +
      " minutes";
    //parseInt(godziny) + (task51number - parseInt(godziny) * 60);
  }
};
//convert the letters of a given string in alphabetical order
task52 = () => {
  let task52word = document.getElementById("task52").value;
  document.getElementById("task52ans").textContent = task52word
    .split("")
    .sort()
    .join("");
};
// check characters a and b are separated by 3 places exactly
task53 = () => {
  let task53word = document.getElementById("task53").value;
  let task53a = task53word.indexOf("a");
  let task53b = task53word.indexOf("b");
  //|| task53b - task53a == 0 || (task53a + 1) - task53b == 3
  if (task53b - (task53a + 1) == 3 || task53a - 1 - task53b == 3) {
    document.getElementById("task53ans").textContent = "true";
  } else {
    document.getElementById("task53ans").textContent = task53a + " " + task53b;
  }
};
//count the number of vowels in a given string.
//aeiou
task54 = () => {
  let task54word = document.getElementById("task54").value;
  let vowel = task54word.toLowerCase().match(/[aeiou]/g);
  document.getElementById(
    "task54ans"
  ).textContent = `String has ${vowel} which is ${vowel.length}`;
};
//given string contains equal number of p's and t's
// task55 = () => {
//   const task55word = document.getElementById("task55").value;
//   const task55ans = document.getElementById("task55ans")
//   const wordP = task55word.toLowerCase().match(/p/g);
//   const wordT = task55word.toLowerCase().match(/t/g);

//   // let p = wordP.length;
//   // let t = wordT.length;
//   if (task55word == "") {
//     task55ans.textContent = `adasd`
//   } else if (wordP.length = !wordT.length) {
//     task55ans.textContent = `not equal`
//   } else {
//     task55ans.textContent = `equal`
//   }
// };
task55 = () => {
  const task55word = document.getElementById("task55").value;
  const task55ans = document.getElementById("task55ans");
  const wordP = task55word.toLowerCase().match(/p/g) || "";
  const wordT = task55word.toLowerCase().match(/t/g) || "";
  const p = wordP.length;
  const t = wordT.length;
  if (task55word == "") {
    task55ans.textContent = "empty";
  } else if (p == 0 && t == 0) {
    task55ans.textContent = "not equal";
  } else if (p == t) {
    task55ans.textContent = "equal";
  }
  // || p === 0 && t === 0
};
//divide two positive numbers and return a string with properly formatted commas
task56 = () => {
  let task56word = document.getElementById("task56");
  let num56 = task56word.value.split(" ");
  let commas = num56[0] / num56[1];
  document.getElementById("task56ans").textContent = commas
    .toString()
    .split("");
};
//create a new string of specified copies (positive number) of a given string.
task57 = () => {
  let task57word = document.getElementById("task57").value;
  let num57 = task57word.split(" ");
  document.getElementById("task57ans").textContent = num57[0].repeat(num57[1]);
};
// create a new string of 4 copies of the last 3 characters of a given original string.
task58 = () => {
  let task58word = document.getElementById("task58").value;
  let piece = task58word.slice(-3);
  if (task58word.length < 3) {
    document.getElementById("task58ans").textContent = "Word is too short.";
  } else {
    document.getElementById("task58ans").textContent = piece.repeat(4);
  }
};
//extract the first half of a string of even length
task59 = () => {
  let task59word = document.getElementById("task59").value;
  let half = task59word.length / 2;
  if (task59word.length % 2 === 0) {
    document.getElementById("task59ans").textContent = task59word.slice(
      0,
      half
    );
  } else {
    document.getElementById("task59ans").textContent = `Divide is not possible`;
  }
};
//reate a new string without the first and last character of a given string
task60 = () => {
  let task60word = document.getElementById("task60").value;
  document.getElementById("task60ans").textContent = task60word.slice(
    1,
    task60word.length - 1
  );
};
//concatenate two strings except their first character
task61 = () => {
  let task61word = document.getElementById("task61").value;
  let word = task61word.split(" ");
  let conc = word[0].toString().slice(1).concat(word[1].slice(1));
  document.getElementById("task61ans").textContent = conc;
};
//move last three character to the start of a given string. The string length must be greater or equal to three.
task62 = () => {
  let task62word = document.getElementById("task62").value;
  let word = task62word.slice(-3);
  let conc = task62word.substring(0, task62word.length - 3);
  if (task62word.length < 3) {
    document.getElementById(
      "task62ans"
    ).textContent = `word should have 3 or more letters`;
  } else {
    document.getElementById("task62ans").textContent = word + conc;
  }
};
//create a string using the middle three characters of a given string of odd length
task63 = () => {
  let task63word = document.getElementById("task63").value;
  //let word = task63word.slice(-3)
  //let conc = task63word.substring(0, (task63word.length - 3))
  if (task63word.length < 3) {
    document.getElementById(
      "task63ans"
    ).textContent = `word should have 3 or more letters`;
  } else if (task63word.length % 2 === 0) {
    document.getElementById("task63ans").textContent = task63word;
  } else {
    document.getElementById("task63ans").textContent = task63word.substr(
      task63word.length / 2 - 1,
      3
    );
  }
};
//concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string
task64 = () => {
  let task64word = document.getElementById("task64");
  let ww = task64word.value.split(" ");
  let w1 = ww[1].length;
  let w0 = ww[0].length;
  if (ww[0].length > ww[1].length) {
    document.getElementById("task64ans").textContent =
      ww[0].substring(0, w1) + ww[1]; // ww[0].slice(w1)
  } else if (ww[0].length < ww[1].length) {
    document.getElementById("task64ans").textContent =
      ww[0] + ww[1].substring(0, w0); //ww[1].slice(w0) +
  } else {
    document.getElementById("task64ans").textContent = ww[0] + ww[1];
  }
};
//test whether a string end with "Script"
task65 = () => {
  let task65word = document.getElementById("task65").value;
  let pword = task65word.toLowerCase().slice(-6);
  if (task65word.length < 6) {
    document.getElementById("task65ans").textContent =
      "word is too short! 6 letters is minimum";
  } else if (pword === "script") {
    document.getElementById("task65ans").textContent = "true";
  } else {
    document.getElementById("task65ans").textContent = "false";
  }
};
//display the city name if the string begins with "Los" or "New"
task66 = () => {
  let task66word = document.getElementById("task66").value;
  let piece = task66word.toLowerCase().slice(0, 3);
  if (piece == "new" || piece == "los") {
    document.getElementById("task66ans").textContent = "true";
  } else {
    document.getElementById("task66ans").textContent = "";
  }
};
//create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'
task67 = () => {
  let task67word = document.getElementById("task67").value;
  let piece = task67word.toLowerCase().charAt(0);
  if (piece === "p") {
    document.getElementById("task67ans").textContent = task67word.slice(
      1,
      task67word.length - 1
    );
  } else {
    document.getElementById("task67ans").textContent = task67word;
  }
};
//create a new string using the first and last n characters from a given sting.The string length must be greater or equal to n.
task68 = () => {
  let task68w = document.getElementById("task68w").value;
  let n68 = document.getElementById("task68n").value;
  if (task68w.length >= n68) {
    document.getElementById("task68ans").textContent = task68w.slice(
      n68,
      task68w.length - n68
    );
  } else {
    document.getElementById("task68ans").textContent =
      "The string length must be greater or equal to n.";
  }
};
//compute the sum of three elements of a given array of integers of length 3.
task69 = () => {
  let task69numbers = document.getElementById("task69").value;
  let num = task69numbers.split(" ");
  document.getElementById("task69ans").textContent = num.reduce(
    (a, c) => a + Number(c),
    0
  );
};
//rotate the elements left of a given array of integers of length 3.
task70 = () => {
  let task70number = document.getElementById("task70").value;
  if (task70number.length === 3) {
    let nowy = task70number.split("");
    document.getElementById(
      "task70ans"
    ).textContent = ` ${nowy[1]} ${nowy[2]} ${nowy[0]} `;
  } else {
    document.getElementById("task70ans").textContent = `3 numbers only!`;
  }
};
//check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
task71 = () => {
  let task71number = document.getElementById("task71").value;
  let nowy = task71number.split("");
  if (nowy[0] == 1) {
    document.getElementById("task71ans").textContent = `true`;
  } else {
    document.getElementById("task71ans").textContent = `false`;
  }
};
//check whether the first and last elements are equal of a given array of integers length 3.
task72 = () => {
  let task71number = document.getElementById("task72").value;
  let nowy = task71number.split(" ");
  if (nowy[0] === nowy[2]) {
    document.getElementById("task72ans").textContent = `true`;
  } else {
    document.getElementById("task72ans").textContent = `false`;
  }
};
//reverse the elements of a given array of integers length 3.
task73 = () => {
  let task73number = document.getElementById("task73").value;
  let nowy = task73number.split(" ");
  if (nowy.length === 3) {
    document.getElementById("task73ans").textContent = nowy.reverse();
  } else {
    document.getElementById("task73ans").textContent = `3 integers only!`;
  }
};
//find the larger value between the first or last and set all the other elements with that value. Display the new array.
task74 = () => {
  let task74number = document.getElementById("task74").value;
  let nowy = task74number.split(" ");
  nowy.sort(function (a, b) {
    return a - b;
  });
  document.getElementById(
    "task74ans"
  ).textContent = `${nowy[2]}  ${nowy[2]} ${nowy[2]}`;
};
//create a new array taking the middle elements of the two arrays of integer and each length 3.
task75 = () => {
  let task75number = document.getElementById("task75a").value;
  let task75numberb = document.getElementById("task75b").value;
  let nowy = task75number.split(" ");
  let nowyb = task75numberb.split(" ");
  document.getElementById("task75ans").textContent = `${nowy[1]} ${nowyb[1]} `;
};
//create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.
task76 = () => {
  let task76number = document.getElementById("task76").value;
  let nowy = task76number.split(" ");
  document.getElementById("task76ans").textContent = `${nowy[0]}  ${
    nowy[nowy.length - 1]
  }`;
};
//test whether an array of integers of length 2 contains 1 or a 3.
task77 = () => {
  let task77number = document.getElementById("task77").value;
  let nowy = task77number.split(" ");
  if (nowy[0] == 1 || nowy[0] == 3 || nowy[1] == 1 || nowy[1] == 3) {
    document.getElementById("task77ans").textContent = `true`;
  } else {
    document.getElementById("task77ans").textContent = `false`;
  }
};
//test whether an array of integers of length 2 does not contain 1 or a 3.
task78 = () => {
  let task78number = document.getElementById("task78").value;
  let nowy = task78number.split(" ");
  if (nowy[0] != 1 || nowy[0] != 3 || nowy[1] != 1 || nowy[1] != 3) {
    document.getElementById("task78ans").textContent = `true`;
  } else {
    document.getElementById("task78ans").textContent = `false`;
  }
};
//test whether a given array of integers contains 30 and 40 twice. The array length should be 0,1, or 2
task79 = () => {
  let task79number = document.getElementById("task79").value;
  let nowy = task79number.split(" ");
  if ((nowy[0] == 30 && nowy[1] == 30) || (nowy[0] == 40 && nowy[1] == 40)) {
    document.getElementById("task79ans").textContent = `true`;
  } else {
    document.getElementById("task79ans").textContent = `false`;
  }
};
//swap the first and the last elements of given array of integers. The array length should be at least 1.
task80 = () => {
  let task80number = document.getElementById("task80").value;
  let nowy = task80number.split(" ");
  document.getElementById("task80ans").textContent = `${
    nowy[nowy.length - 1]
  },${nowy.slice(1, -1)},${nowy[0]}`;
};
//add two digits of a given positive integer of length two.
task81 = () => {
  let task81number = document.getElementById("task81").value;
  //let nowy = task81number.parseInt();
  if (task81number.length != 2) {
    document.getElementById(
      "task81ans"
    ).textContent = `Integer shoud have 2 digits only`;
  } else {
    document.getElementById("task81ans").textContent =
      parseInt(task81number.charAt(0)) + parseInt(task81number.charAt(1));
  }
};
//Write a JavaScript to add two positive integers without carry.
task82 = () => {
  let task82number = document.getElementById("task82").value;
  let nowy = task82number.split(" ");
  var result = 0,
    xx = 1;
  while (nowy[0] > 0 && nowy[1] > 0) {
    result += xx * ((nowy[0] + nowy[1]) % 10);
    n1 = Math.floor(nowy[0] / 10);
    n2 = Math.floor(nowy[1] / 10);
    xx *= 10;
  }

  document.getElementById("task82ans").textContent = result;
};
//Write a JavaScript to find the longest string from a given array of strings.
task83 = () => {
  let task83number = document.getElementById("task83").value;
  let nowy = task83number.split(" ").sort();
  nowy.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("task83ans").textContent = nowy[nowy.length - 1];
};
//replace each character of a given string by the next one in the English alphabet.
task84 = () => {
  const task84word = document.getElementById("task84").value;
  for (let i = 0; i < task84word.length; i++) {
    // fromcharcode is to find letter by Unicode
    //charcodeat is to find unicode by letter
    document.getElementById("task84ans").textContent += String.fromCharCode(
      1 + task84word.charCodeAt(i)
    );
  }
};
//divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.
task85 = () => {
  let task85number = document.getElementById("task85").value;
  let nowy = task85number.split("");
  //   let odd = 0;
  //   let even = 0;

  //   for (let i = 0; i < nowy.length; i++) {
  //     if (i % 2 === 0) {
  //       odd += nowy[i];

  //       // sum = nowy. reduce(function(a, b){
  //       //       return a + b;}
  //     } else {
  //       even += nowy[i];
  //     }
  //   }
  //   document.getElementById("task85ans").textContent = `${odd} and ${even}`;
  // }
  const result = [0, 0];
  for (let i = 0; i < nowy.length; i++) {
    if (i % 2) result[1] += nowy[i];
    else result[0] += nowy[i];
  }
  document.getElementById("task85ans").textContent = result;
};
//find the types of a given angle. Types of angles:
task86 = () => {
  let angle = document.getElementById("task86").value;
  if (angle >= 0 && angle < 90) {
    document.getElementById("task86ans").textContent = `Acute angle`;
  } else if (angle == 90) {
    document.getElementById("task86ans").textContent = `Right angle`;
  } else if (angle > 90 && angle < 180) {
    document.getElementById("task86ans").textContent = `Obtuse angle`;
  } else if (angle == 180) {
    document.getElementById("task86ans").textContent = `Straight angle`;
  } else {
    document.getElementById(
      "task86ans"
    ).textContent = `Write numbers from 0 to 180 only`;
  }
};
//check whether two arrays of integers of same length are similar or not.
task87 = () => {
  let task87number = document.getElementById("task87").value;
  let nowy = task87number.split("");
  const nums = nowy[0].filter((val) => nowy[1].indexOf(val) !== -1);

  if (nowy[0].length != nowy[1].length) {
    document.getElementById("task87ans").textContent = `false`;
  } else if (nowy[0].length == nowy[1].length) {
    if (nums == true) {
      document.getElementById("task87ans").textContent = `true`;
    } else {
      document.getElementById("task87ans").textContent = `false`;
    }
  }
};
//check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.
task88 = () => {
  let task88number = document.getElementById("task88").value;
  let nowy = task88number.split(" ");
  if (nowy[2] == null) {
    document.getElementById("task88ans").textContent =
      "It has to be 3 integers separate by a space";
  } else if (nowy[0] % nowy[2] == 0 && nowy[1] % nowy[2] == 0) {
    document.getElementById("task88ans").textContent = "true";
  } else {
    document.getElementById("task88ans").textContent = "false";
  }
};
//check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
task89 = () => {
  let task89number = document.getElementById("task89").value;
  let nowy = task89number.split(" ");
  const xx = parseInt(nowy[0]);
  const yx = parseInt(nowy[1]);
  const zx = parseInt(nowy[2]);

  if (xx == null) {
    document.getElementById("task89ans").textContent =
      "It has to be 3 integers separate by a space";
  } else if (xx + yx == zx || xx - yx == zx || xx * yx == zx || xx / yx == zx) {
    document.getElementById("task89ans").textContent = "true";
  } else {
    document.getElementById("task89ans").textContent = "false";
  }
};
//find the kth greatest element of a given array of integers
task90 = () => {
  let task90arr = document.getElementById("task90a").value;
  let kth = document.getElementById("task90b").value;
  let arr = task90arr.split(" ").sort();
  // another way of give answers in "taskans"
  let ans = document.getElementById("task90ans");
  arr.sort(function (a, b) {
    return b - a;
  });
  kth1 = parseInt(kth) - 1;

  if (kth > arr.length) {
    document.getElementById(
      "task90ans"
    ).textContent = `Kth should be lower/equal than array of integers`;
  } else {
    // another way of give answers in "taskans"
    ans.textContent = arr[kth1];
    //document.getElementById("task90ans").textContent = arr[kth1];
  }
};
//find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers
task91 = () => {
  const task91arr = document.getElementById("task91a").value;
  const arr91 = task91arr.split(" ");
  const kth = document.getElementById("task91b").value;
  const task91ans = document.getElementById("task91ans");

  const newArr = arr91.map(
    (items, k) => parseFloat(arr91[k]) + parseFloat(arr91[k + 1])
  );

  task91ans.textContent = `Maximum possible sum is: ${newArr[kth]}`;
};
//find the maximal difference between any two adjacent elements of a given array of integers.
task92 = () => {
  const task92arr = document.getElementById("task92").value;
  const arr92 = task92arr.split(" ");
  const task92ans = document.getElementById("task92ans");

  const newArr92 = arr92.map((items, i) => arr92[i] - arr92[i + 1]);
  newArr92.sort(function (b, a) {
    return a - b;
  });
  task92ans.textContent = `Maximal difference is ${newArr92[0]} `;
};
//  Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.
task93 = () => {
  const task93 = document.getElementById("task93").value;
  const arr93 = task93.split(" ");
  const task93ans = document.getElementById("task93ans");

  const max = Math.max(...arr93);
  const min = Math.min(...arr93);

  task93ans.textContent = Math.abs(max - min);
};
//Write a JavaScript program to find the number which appears most in a given array of integers.
task94 = () => {
  const task94 = document.getElementById("task94").value;
  const arr94 = task94.split(" ");
  const task94ans = document.getElementById("task94ans");

  let item;
  let m = 0;
  let mf = 0;

  for (let i = 0; i < arr94.length; i++) {
    for (let j = i; j < arr94.length; j++) {
      if (arr94[i] == arr94[j]) {
        m++;
        if (m > mf) {
          mf = m;
          item = arr94[i];
        }
      }
    }
    m = 0;
  }
  task94ans.textContent = item;
  //return item;
};
//replace all the numbers with a specified number of a given array of integers.
function task95randoms() {
  const randomNrsTask95 = document.querySelector(".rdmNmrsPrgf");
  const rdm95 = [];
  for (let i = 1; i <= 10; i++) {
    rdm95.push(Math.floor(Math.random(i) * 10 + 1));
    randomNrsTask95.textContent = rdm95;
  }
  task95 = () => {
    const task95a = document.querySelector(".rdmNmrsPrgf");
    //const arr95 = task95.split("");
    const task95ans = document.getElementById("task95ans");
    const out95 = document.getElementById("task95in").value;
    const in95 = document.getElementById("task95out").value;

    for (let i = 0; i < rdm95.length; i++) {
      if (rdm95[i] == out95) {
        rdm95[i] = in95;
        task95ans.textContent = `New array: ${rdm95} where the old digit "${out95}" is replaced to "${in95}"`;
      }
    }
  };
}
task95randoms();
//ompute the sum of absolute differences of consecutive numbers of a given array of integers.
task96 = () => {
  const task96 = document.getElementById("task96").value;
  const task96ans = document.getElementById("task96ans");
  if (task96 == "") {
    task96ans.textContent = `Array is empty!`;
  }
  const arr96 = task96.split(" ");

  const newArr96 = arr96.map((items, i) => arr96[i] - arr96[i + 1]);
  const suma = newArr96.slice(0, newArr96.length - 1);
  task96ans.textContent = suma.reduce(function (a, b) {
    return a + b;
  });
};
//find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it.
task97 = () => {
  document.getElementById("task97ans").textContent = `task is not finished yet`;
};
// program to switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case.
task98 = () => {
  const task98 = document.getElementById("task98").value;
  const task98ans = document.getElementById("task98ans");
  const upper = (task98.match(/[A-Z]/g) || []).length;
  const lower = (task98.match(/[a-z]/g) || []).length;

  if (upper > lower) {
    task98ans.textContent = task98.toUpperCase();
  } else {
    task98ans.textContent = task98.toLowerCase();
  }
};
//check whether it is possible to rearrange characters of a given string in such way that it will become equal to another given string.
function task99() {
  const task99w = document.getElementById("task99").value;
  const task99ans = document.getElementById("task99ans");
  const arr99 = task99w.split(" ");
  const arrOne = [];
  const arrTwo = [];
  if (task99w === "") {
    task99ans.textContent = `String is empty!`;
  } else {
    arrOne.push(arr99[0]);
    arrTwo.push(arr99[1]);
  }
  if (arrTwo.length === null) {
    task99ans.textContent = `Stringasdaddis empty!`;
  }
}
//   const arr99 = task99w.split(" ");
//   let a = arr99[0];
//   let b = arr99[1];
//   if (arr99[1] === " ") {
//     task99ans.textContent = `Two strings minimum, separate by space`;
//   }
//   a.toString();
//   b.toString();
//   if (a.length != b.length) {
//     task99ans.textContent = `Strings are not equal!`;
//   } else {
//     for (var i = 0; i < a.length; i++) {
//       if (a[i] === b[i]) {
//         task99ans.textContent = `It is possible!`;
//       } else {
//         task99ans.textContent = `It is not possible!`;
//       }
//     }
//   }
// }
//check whether there is at least one element which occurs in two given sorted arrays of integers.
function task100arrays() {
  const task100rdm = document.querySelector(".task100");
  const rdm100a = [];
  const rdm100b = [];
  for (let i = 1; i <= 4; i++) {
    rdm100a.push(Math.floor(Math.random(i) * 10 + 1));
    rdm100b.push(Math.floor(Math.random(i) * 10 + 1));
    task100rdm.textContent = `Random arrays:\n${rdm100a} and ${rdm100b}`;
  }
  task100 = () => {
    const task100ans = document.getElementById("task100ans");

    for (let i = 0; i < rdm100a.length; i++) {
      if (rdm100b.includes(rdm100a[i]) == false) {
        task100ans.textContent = `false`;
      } else {
        task100ans.textContent = `true`;
      }
    }
  };
}
//check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
const task101 = () => {
  const task101in = document.querySelector("#task101in").value;
  const t101ans = document.querySelector("#task101ans");
  const upperCaseIndexes = [];
  const lowerCaseIndexes = [];
  //if length of string is not the same as length of latin letters
  if ((task101in.match(/[a-zA-Z]/g) || "").length != task101in.length) {
    t101ans.textContent = `Non Latin letters, try again`;
  } else {
    //looking for uppercase letters
    for (let i = 0; i < task101in.length; i++) {
      //pasja inf podpowiedz.
      //check index of upper/lowerCase inside string
      const char = task101in[i];
      if (char.toUpperCase() === char) {
        upperCaseIndexes.push(i);
      } else {
        lowerCaseIndexes.push(i);
      }
      //upper/lower indexes are pushed inside array
      //check how close the sameCase letters are
      const upperCase = upperCaseIndexes.map(
        (items, i) => upperCaseIndexes[0] - upperCaseIndexes[i + 1]
      );
      const lowerCase = lowerCaseIndexes.map(
        (items, i) => lowerCaseIndexes[0] - lowerCaseIndexes[i + 1]
      );
      if (upperCase.includes(1) || upperCase.includes(-1)) {
        t101ans.textContent = "There are same letters written adjacent";
      } else {
        t101ans.textContent = "No same case letters are written adjacent";
      }
      console.log(upperCase);
      console.log(lowerCase);
    }
  }
};
document.querySelector("#task101").addEventListener("click", task101);
//102
//find the number of inversions of a given array of integers.
function btn102() {
  const input102 = document.getElementById("input102").value;
  const answer102 = document.getElementById("answer102");
  //input102.replace(/^\s+|\s+$/gm, "");
  const arr102 = input102.split("");

  if (isNaN(input102)) {
    answer102.textContent = "Only numbers please";
  } else {
    let inv = 0;
    for (let i = 0; i < arr102.length; i++) {
      for (let j = i + 1; j < arr102.length; j++) {
        if (arr102[i] > arr102[j]) inv++;
      }
    }
    answer102.textContent = inv;
  }
}
document.querySelector("#btn102").addEventListener("click", btn102);
//103
//maximal number from a given positive integer by deleting exactly one digit of the given number.
document.querySelector("#btn103").addEventListener("click", () => {
  const input103 = document.getElementById("input103").value;
  const answer103 = document.getElementById("answer103");
  const arr103 = input103.split("");
  arr103.sort(function (a, b) {
    return b - a;
  });
  const highNum= arr103[0]
  var filtered = arr103.filter(function(value, index, arr103){ return value != highNum;});
  answer103.textContent = filtered.join("")  
});
//104
//find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.
document.querySelector("#btn104").addEventListener("click", () =>{
  const input104 = document.getElementById("input104").value;
  const input104a = document.getElementById("input104a").value
  const answer104 = document.getElementById("answer104");
  //answer104.textContent = input104 + input104a;
  const arr104 = input104.split(" ");
  let max_num = -1;
  for (let i=0; i<arr104.length; i++){
    for (let j = i + 1; j < arr104.length; j++){
    let result = Math.abs(arr104[i] - arr104[j])
     if (result <= input104a){
      max_num = Math.max(max_num, result)
     }
    } 
  } 
answer104.textContent = max_num;
});
//105
//find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.
document.querySelector("#btn105").addEventListener("click", () =>{
  const input105 = document.getElementById("input105").value;
  const answer105 = document.getElementById("answer105");
  const arr105 = input105.split("").map(Number);
  const new105 = [];
  new105.push(arr105.reduce((a, b) => {return a + b})) 
  const result105 = Array.from(String(new105), Number);
  console.log(typeof(new105))
  console.log(typeof(arr105))
  answer105.textContent = result105.length;
});
//106
//divide an integer by another integer as long as the result is an integer and return the result
document.querySelector("#btn106").addEventListener("click", () =>{
  let in106num = document.getElementById("in106num").value;
  const in106int = document.getElementById("in106int").value;
  const answer106 = document.getElementById("answer106");

   let result = 0;
   if ((parseInt(in106num)% parseInt(in106int)) != 0 ) {
    answer106.textContent = in106num
   } else {
    while(parseInt(in106num) >= parseInt(in106int)){
      in106num /= in106int;
         result++;
         answer106.textContent=result
     }
     return result;
   }
   console.log(result)
})
//107
//find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one.

// const  new107 = [];
// const arr107 = in107num.split(" ").map(Number);
// new107.push(arr107);
// document.querySelector("#btn107").addEventListener("click", () =>{
//   answer107.innerHTML = answer107
//   console.log(in107num)
  //console.log(arr107)
//  console.log(new107)
const task107 = ()=>{
  const in107num = document.getElementById("in107num").value;
  const answer107 = document.getElementById("answer107");
  const arr107 = in107num.split(" ");
  let result107 = 0;
for (let i = 0; i<arr107.length; i++){
  for (let j=i+1; j<arr107.length; j++){
      if (arr107[i] % arr107[j] === 0 || arr107[j] % arr107[i] ===0){
        result107++;
        answer107.textContent = result107
      }
  }
}console.log(arr107)
 return result107
}
//108
//create the dot products of two given 3D vectors.
document.querySelector("#btn108").addEventListener("click", () =>{
  const in108num1 = document.getElementById("in108num1").value;
  const arr108_1 = in108num1.split(" ");
  const in108num2 = document.getElementById("in108num2").value;
  const arr108_2 = in108num2.split(" ");
  const answer108 = document.getElementById("answer108");
 let dots = 0;
  for (let i=0; i<3; i++){
    dots += arr108_1[i] * arr108_2[i]
  } 
  answer108.textContent = dots;
  return
})
//109
//sort an array of all prime numbers between 1 and a given integer.
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
document.querySelector("#btn109").addEventListener("click", () =>{
  const in109num = document.getElementById("in109num").value;
  const prime = in109num.split(" ");
  let answer109 = document.getElementById("answer109");
  let primeNumbers = [];
  let result = [];
    for (let i= 2; i <= prime; i++){
      primeNumbers.push(i);
      result = primeNumbers.filter(numbers=> isPrime(numbers));
    }
   // console.log(result.join())
    answer109.textContent = result
});
//110 find the number of even values in sequence before the first occurrence of a given number. 

let answer110 = document.getElementById("answer110");
let seq = document.getElementById("seq")
const randText = "Sequence numbers are:";
let arr110 = [];
    showSequence = () =>{
    for (let i = 1; i<=10; i++ ){
    arr110.push(i)
      seq.textContent =  `${randText} \n ${arr110}`
    }
}
showSequence();
document.querySelector("#btn110").addEventListener("click", () =>{
    const in110num = document.getElementById("in110num").value;
    const num110 = in110num.split(" ")
    let oddcheck = []
    if (num110 <=  arr110[arr110.length-1] ){
      for (let i =1; i<= num110; i++){
        oddcheck.push(i);
        let oddLength = oddcheck.filter(numbers => numbers % 2 === 0)
        answer110.textContent = oddLength.length;
      } 
      }else {
        answer110.textContent = `this number isn't in sequence`
    }
})
//111check a number from three given numbers where two numbers are equal, find the third one.
const answer111 = document.getElementById("answer111");
const rdn111 = document.getElementById("rdnP");
const rdnArr = [];

function showRnd(){
  for (let i = 1; i <= 3; i++) {
    rdnArr.push(Math.floor(Math.random(i) * 3 + 1));
    rdn111.textContent = `Three random numbers: \n${rdnArr}`  
  }
}
showRnd();
document.querySelector("#btn111").addEventListener("click", () =>{
  let result = [];
  for (let i=0; i<=rdnArr.length; i++){
    for (let y = i + 1; y<=rdnArr.length; y++){
      if (rdnArr[i] === rdnArr[y] ){
        result.push(rdnArr[y]);
        answer111.textContent = result;
      } if (result.length == 0){
        answer111.textContent = `no equal numbers`
      }else if (result[0] === result[1] && result[0] == result[2] )  {
        answer111.textContent = `all equal numbers`
      }else {
        answer111.textContent = `Equal digits are: ${result} and the third is: ${rdnArr.filter(numbers => numbers != result)} ` 
      }
    } 
  }  
});
//112find the number of trailing zeros in the decimal representation of the factorial of a given number.
const answer112 = document.getElementById("answer112");
const in112 = document.getElementById("in112num");
const arr112 = [];
let trailing = 0;
document.querySelector('#btn112').addEventListener('click', () =>{
    for (let i = 1; i <= parseInt(in112.value) ; i++){
      let num = i;
      arr112.push(i);
//divide by5 explanation: It's based on the inherent pattern of trailing zeros in factorials. The first trailing zero in factorials appears at factorial of 5. For every increase of 5 numbers in factorials, the trailing zero increases by one. So 5–9 has a 1 trailing zero; 10–14 has 2 trailing zeros; 15–19 has 3, and so on...
      while (num % 5 === 0){
        num /= 5;
        trailing++;
      }
      const reducer = (a, b) => a * b;
      let total =  arr112.reduce(reducer)
      answer112.textContent =  `Total output is: ${total}, and there is ${trailing} zero` ;
    } 
})
//113calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer.
document.querySelector('#btn113').addEventListener('click', () =>{
  const in113 = document.getElementById("in113num");
  const answer113 = document.getElementById("answer113");
  nNum = in113.value;
  let sum = 0;
  while (nNum > 0){
    nNum = Math.floor(nNum /2);
    sum += nNum;
    } console.log(sum );
    answer113.textContent=  parseInt(in113.value)+sum;
});
//114check whether a given string represents a correct sentence or not. A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.).
document.querySelector('#btn114').addEventListener('click', () =>{
  in114 = document.getElementById("in114str").value;
  answer114=document.getElementById("answer114");
  // if statement solution
  // let arr114 = in114.split("");
  // if (arr114[0] === arr114[0].toUpperCase() &&
  //     (arr114[arr114.length -1] === ".")
  // ){answer114.textContent = 'true'}  else {answer114.textContent = 'false'}

  //regex solution

  const checkUpp =  /^[A-Z]/.test(in114)
  const checkDot = /\.$/.test(in114)
  if (checkUpp && checkDot   == true){
    answer114.textContent = `true` 
  } else{
    answer114.textContent = `false`
  }
});
//115 check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).
ans115 = document.getElementById("answer115");
const a115 = [[1, 0, 0], [0, 2, 0], [0, 0, 3] ];
const b115 = [[1, 0, 0], [0, 2, 3], [0, 0, 3] ]
document.querySelector('#btn115a').addEventListener('click', () =>{
  ans115.textContent = "task 115 is not ready"
});

document.querySelector('#btn115b').addEventListener('click', () =>{
  ans115.textContent = "task 115 is not ready"
});
//find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.

document.querySelector("#btn116").addEventListener("click", () =>{
 let  input116 = document.getElementById("in116num").value;
  let ans116 = document.getElementById("answer116");

  if ( !input116.includes("*") ){
    ans116.textContent = "number has to contain * Asterix"
  } else {
    const num09 = [0,1,2,3,4,5,6,7,8,9];
    let allNums = []
    for (let i=0; i<num09.length;i++){
      //replace is string method only
      allNums.push(input116.replace("*",i));
      // all elements of array need to be Numbers  
      let resutlArr = allNums.map((x)=> parseInt(x));

          function divByThree(numbers){
            return numbers > 0 && numbers % 3 == 0;
          }             
      ans116.textContent = resutlArr.filter(divByThree);
    }
  }
})
//117 check whether a given matrix is an identity matrix.
//Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
//[[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
//[[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false
document.getElementById("btn117").addEventListener("click", () => {
  alert("not ready yet")
});

//118 Write a JavaScript program to check whether a given number is in a given range.
document.getElementById("btn118").addEventListener("click", () => {
  input118 = document.querySelector("#in118num").value;
  ans118 = document.querySelector("#answer118");
  arr118 = input118.split("");
     if (arr118[0] < arr118[2] && arr118[1] < arr118[2]){
      ans118.textContent = `true`
     }else{
      ans118.textContent = `false`
     }
})
//119 check whether a given integer has an increasing digits sequence.
document.getElementById("btn119").addEventListener("click", () => {
  const input119 = document.querySelector("#in119num").value;
  const ans119 = document.querySelector("#answer119");
  arr119 = input119.split("");
   for (let i = 0; i < arr119.length-1; i++){
     if (parseInt(arr119[i])>= parseInt(arr119[i+1]) ){
       ans119.textContent = `false`
     }else{
      ans119.textContent = `true`
     }
   }
})
//120 check whether a point lies strictly inside a given circle. 
document.getElementById("btn120").addEventListener("click", () => {
  const circSpecs = document.querySelector("#circSpecs").value;
  const ans120 = document.getElementById("answer120");
  const circ = circSpecs.split(" ")
    if (circ.length != 5){
      ans120.textContent = `please write 5 values separated by space. Numbers has to be in order: x y r a b`
    }else if (Math.sqrt(((circ[3]-circ[0])*(circ[3]-circ[0])+(circ[4]-circ[1])*(circ[4]-circ[1])))   <=circ[2] ){
      ans120.textContent =`points are inside of the circle`
    }
    else {
      ans120.textContent = `points are outside of the circle`
    }
});
//121 program to check whether a given matrix is lower triangular or not.
document.getElementById("btn121").addEventListener("click", () => {
  alert("not ready yet");
})

//122 check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence. 
document.getElementById("btn122").addEventListener("click", () => {
input122 = document.querySelector("#in122num").value;
ans122 = document.querySelector("#answer122");
arr122 = input122.split("");
   if (arr122[0] < arr122[2] && arr122[1] < arr122[2]){
    ans122.textContent = `increasing sequence`;
   } else if (arr122[0] > arr122[2] && arr122[1] > arr122[2]){
    ans122.textContent = `decreasing sequence`;
   } else {
    ans122.textContent = `no sequence`;
   }
  });
  //123 program to find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer.
  document.getElementById("btn123").addEventListener("click", () => {
    in123nums = document.querySelector("#in123num").value;
    in123digit = document.querySelector("#in123digit").value;
    ans123 = document.querySelector("#answer123");
    arr123 =in123nums.split("").filter(n => n != " ").map((x) =>parseInt(x));
    new123 = [];
    for (let i = 1; i <= parseInt(in123digit); i++ ){
        new123.push(i);
        if(JSON.stringify(arr123)==JSON.stringify(new123)) {
          ans123.textContent = `true`;
        } else {
          ans123.textContent = `false`;
        }
    }
  });
  //124 create the value of NOR of two given booleans.
  document.getElementById("btn124").addEventListener("click", () => {
    ans124 = document.getElementById('answer124');
    const optOne = document.getElementById("task124a").value;
    const optTwo = document.getElementById("task124b").value;
    if (optOne === 'false' && optTwo === `false`){
      ans124.textContent = `true`;
    } else {
      ans124.textContent = `false`
    }
  });
//125 find the longest string from a given array.
const btn125 = document.getElementById('btn125');
btn125.addEventListener('click', () =>  {
  const inptu125 = document.getElementById('in125num').value;
  const answer125 = document.getElementById('answer125');
  const longArr =  inptu125.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  answer125.textContent = longArr[0];
})
//126 largest even number from an array of integers.
document.getElementById("btn126").addEventListener('click', () =>  {
  const inptu126 = document.getElementById('in126num').value;
  const answer126 = document.getElementById('answer126');
  const lngArr =  inptu126.split(" ").sort(function (a, b) {
    return b - a;
  });
  answer126.textContent = lngArr[0];
})
//127 reverse the order of the bits in a given integer.
//this task is about to conver number to binary code, reverse that binary code and find another Num from reverted binaries. 
// examples: 
// var num = 15;
// var a = num.toString();
// var b = num.toString(2); The number will show as a binary value
// var c = num.toString(8); octal value
// var d = num.toString(16); hexadecimal value
const inptu127 = document.getElementById('in127num');
const answer127 = document.getElementById('answer127');
let revBin = [];

document.getElementById("btn127").addEventListener('click', () =>  {
    let num22 = inptu127.value;
    revBin.push(parseInt(num22.split(' ')));
    let binar = revBin[0].toString(2)
    answer127.textContent = parseInt(binar.split("").reverse().join(""),2)  ;
//  const binary = parseInt(inptu127.toString(2).split("").reverse().join("") * Math.sign(inptu127) ); not working ??
});
//128 find the smallest round number that is not less than a given value. Note: A round number is informally considered to be an integer that ends with one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.
document.getElementById("btn128").addEventListener('click', () => {
  const answer128 = document.getElementById('answer128');
  const inptu128 = document.getElementById('in128num').value;
  answer128.textContent =  Math.floor(inptu128/10) * 10  ;
});
//129 find the smallest prime number strictly greater than a given number. 
function isPrime2(num2) {
  for(var i = 2; i < num2; i++)
    if(num2 % i === 0) return false;
  return num2 > 1;
}
let result = [];
let primeNumbers = [];
let greaterResult = [];
const in129num = document.getElementById("in129num")
document.querySelector("#btn129").addEventListener("click", () =>{
  
  const prime = parseInt(in129num.value.split(" "));
  let answer129 = document.getElementById("answer129");
  
    for (let i= 2; i <= prime; i++){
      primeNumbers.push(i);
      result = primeNumbers.filter(numbers=> isPrime2(numbers));
    }
 let primePlus = prime;

 while ( !isPrime2(primePlus) ){
  isPrime2(primePlus++) 
  greaterResult.push(primePlus)
}

return answer129.textContent = `The smallest prime number is: ${result[result.length-1]}, the greater will be: ${greaterResult[greaterResult.length-1] }`
});
//130 find the number of even digits in a given integer.
in130 = document.getElementById("in130num")
ans130 = document.getElementById("answer130")
document.querySelector("#btn130").addEventListener("click", () =>{
  const numCheck = in130.value;
  ans130.textContent = numCheck.split('').filter(x=> x % 2 == 0).length;
})
//131 Write a JavaScript program to create an array of prefix sums of the given array
//in131 = document.getElementById("in131num").value
// ans131 = document.getElementById("answer131") 
document.querySelector("#btn131").addEventListener("click", () =>{
  in131 = document.getElementById("in131num").value
 ans131 = document.getElementById("answer131") 

const arr131 = in131.split(' ')
//const new131= []
//const new131 = [];
//new131.push(arr131);
// for (let i=1; i<=arr131; i++){
//   new131.push(i);
// } 
// console.log(new131.reduce((a,b) => {return  a+b} ))
// ans131.textContent = new131.reduce((a,b) => {return  a+b} );

// console.log(new131.forEach(x => x.reduce((a,b) => {return  a+b} )));


const prefix =arr131.map((val, index) => {

  let sum=0;

  for (let i=1; i< index + 1; i++ ){
    sum+=arr131[i];
  }
  return sum;
  
} ) 
console.log(prefix)

})


