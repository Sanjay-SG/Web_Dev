
// setTimeout(f1, 5000);
let divElem = document.getElementById("#div1");

let count = 0;
divElem.innerHTML = count;
function counter() {
    // alert("Clicked");
    // divElem.innerHTML = "Clicked"
    count++;
    divElem.innerHTML = count;
}
