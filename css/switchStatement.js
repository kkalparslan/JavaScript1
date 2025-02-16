//Conditionals: Switch stataments
//syntex

switch ('2') { //The data types do not match. The numeric cases will not match the string value of two. 
    //Switch statements need strict matches. 
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log('no match')
}

switch (2) { //if I change the value type it matches.
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log('no match')
} 