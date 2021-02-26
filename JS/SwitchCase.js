//switch case is falling statement

let age = 25;

switch(age) {
    case 15:
    case 16:
    case "string":
    case true:
    case 19:
    case 20:
        console.log("You are 20");
        break;
    case 25:
        console.log("You are 25"); // as soon as it gets the match switch will break.. if you don't use break, it will execute all the cases till it gets it's match
        break;
    default:
        console.log("Something else");
}