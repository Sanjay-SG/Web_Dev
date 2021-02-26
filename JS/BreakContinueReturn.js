//Break
for(let i=0; i<10; i++) {
    console.log(i);
    if(i == 5) {
        break; // it will get out of the loop
    }
    // console.log(i);

}

//Continue
for(let i=0; i<10; i++) {
    // console.log(i);
    if(i == 5) {
        continue;
        // return //----> Uncaught SyntaxError: Illegal return statement
    }
    console.log(i);
    console.log("Done");
}


function loop1() {
    for(let i=0; i<10; i++) {
        // console.log(i);
        if(i == 5) {
            return;
        }
        console.log(i);
        console.log("Done");
    }    
}

loop1();  //the output we get similar to break, but if you use return nothing will be executed after return statement within that function, it will get out of the loop