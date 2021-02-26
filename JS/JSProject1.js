const btn = document.querySelector("button");
// const btn = document.querySelectorAll("button");
// console.log(btn);
// btn.innerText = "Click";
// btn[0].innerText = "Click";

const output = document.querySelector(".output");
let cost = document.querySelector("input")
console.log(output);

btn.addEventListener("click", function(){
    console.log(cost.value * 0.15);
    let tip = (cost.value * 0.15).toFixed(2);
    // let temp = '<h1> The tip is: '+tip+' on '+cost.value+ '</h1>';

    //with template string
    let temp = `<h1> The tip is ${tip} on ${cost.value} </h1>`;
    // console.log("Clicked");
    // output.innerText = tip;
    output.innerHTML = temp;
});