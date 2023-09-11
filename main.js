
let DaysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday", "Thursday","Friday","Saturday"];
let d = new Date();
let currentDay =DaysOfTheWeek[d.getDay()];
document.getElementById("output").innerHTML = currentDay;


let hours = d.getHours();
let Minutes = d.getMinutes();
let Seconds = d.getSeconds();
let milliseconds = d.getMilliseconds();

let current_time = `${hours}: ${Minutes}:${Seconds}:${milliseconds} ${d.getTime()}`;
timeInMilliseconds.innerHTML = current_time;
