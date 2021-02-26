let elem = document.getElementById("id1");


// better approach
elem.ondblclick = (() => {
    console.log("Clicked");
})


function f1() {
    console.log("Clicked again");
}