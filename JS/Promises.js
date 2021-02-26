
let pr = new Promise((resolve, reject) => {
    let x = "h";
    X = "hh";
    console.log(x);
    if (x == "h") {
        resolve("OK");
    }
    else {
        reject("Error");

    }
});

pr.then((value) => {
    console.log(value);
},
    (error) => {
        console.log(error);
    })

