const fetch = require("node-fetch");
const { getuid } = require("process");

// import fetch from "node-fetch";

function getUser() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => console.log(json))
}


console.log("hh");
getUser();

console.log("i");