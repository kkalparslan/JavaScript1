// Conditionals: If Statements

//syntax
/**if(condition){
    //run some code
}else {
    //run some different code
}*/

// 1- let soup = "chicken noodle soup"; //condition doğru ise if bloğunu değilse else bloğunu çalıştırıyor
/** let soup; //Sorry, we are out of soup
let reply;
if (soup) {
    reply = `Here's your order of ${soup}`;    
}else{
    reply = "Sorry, we are out of soup";
}
console.log(reply); //Here's your order of chicken noodle soup */

/** // 2- let customerIsBanned = true; //No soup for you!
//let customerIsBanned = false; //Here's your order of chicken noodle soup
let soup = "chicken noodle soup";
let reply;
if(customerIsBanned){
    reply = "No soup for you!";
}else if (soup) {
    reply = `Here's your order of ${soup}`;    
}else{
    reply = "Sorry, we are out of soup";
}
console.log(reply); // önce 1. condition ıkontrol ediyor. doğruysa if bloğunu çalıştırıyor. değilse 2. 
//condition ı kontrol ediyor doğruysa bu bloğu değilse son else bloğunu çalıştırıyor.*/

//3-
//let customerIsBanned = true; //No soup for you!
let customerIsBanned = false; //Here's your order of chicken noodle soup & crakers
let soup = "chicken noodle soup";
let crakers = false; //Here's your order of chicken noodle soup
let reply;
if(customerIsBanned){
    reply = "No soup for you!";
}else if (soup && crakers) {
    reply = `Here's your order of ${soup} & crakers`; 
}else if (soup) {
    reply = `Here's your order of ${soup}`;    
}else{
    reply = "Sorry, we are out of soup";
}
console.log(reply); 
//sonuç olarak yukarıdan aşağıya doğru conditionları kontrol ederek geliyor. 
//doğru gördüğü bloğu yazdırıyor. standart if kullanımı.