// setTimeout ---> runs once and waits till given time out

console.log("Start");
/* 
setTimeout(() => {
    console.log("timer");
    document.getElementById("id1").innerText = "Hi Hello";
}, 3000);
 */

// setInterval --->runs  till given time interval
/* let i = 0;
setInterval(() => {
    console.log("timer");
    document.getElementById("id1").innerText = ++i;
}, 3000);


console.log("End");

 */

//clear setTimeout, setInterval

/* let j = 0;
let id = setInterval(() => {
    console.log("timer");
    document.getElementById("id1").innerText = ++j;
    if(j == 100) {
        clearInterval(id);
    }
}, 100);
 */


let k = 0;
let id1 = setTimeout(() => {
    console.log("timer");
    document.getElementById("id1").innerText = ++k;
    // if(k == 100) {
    //     clearTimeout(id1);
    // }
}, 5000);


console.log(id1);