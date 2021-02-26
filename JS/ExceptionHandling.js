//try catch

let i = 100;
let j = 2;


try {
    if(j == 0) {
        throw "j can not be 0."
    }
    console.log(i/j);
}
catch(e) {
    console.log(e);
}
