
let p1 = {
    id: 101,
    name: "Sanjay"
};
function get() {
    console.log("Hi", this.name);
}

function getCall(msg, msg1) {
    console.log(this.name, msg, msg1);
}

function getApply(msg, msg1) {
    console.log(this.name, msg, msg1);
}

let getBind = get.bind(p1);

getBind();

getCall.call(p1, "How are you?", "Great");

getApply.apply(p1, ["How are you doing?", "Good"]);
