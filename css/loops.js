//Loops
//while loop
let myNumber = 0;
while(myNumber<50){    
  //  console.log(myNumber)
    //myNumber = myNumber + 1 daha kısa olarak yazabiliriz aşağıda  
    myNumber+= 2  
 }
 //dont create an endless loop

 //do while loop
let myNumber2 = 50;
while(myNumber < 50){ 
    myNumber += 2    
    console.log(myNumber2)       
 }
 do{
    console.log(myNumber2)
 }while(myNumber2 < 50)
 //while ve do while loopları arasındaki en önemli fark do while loop ta condition(gereklilik) 
 //uyuşmaz ise bile do bloğu en az bir kere execute edilecek olmasıdır. 

 //for loop
 for(let i = 0; i <= 10; i++){
    console.log(i )
 }

 let name = "Alpimka";
 for (let i = 0; i < name.length; i++){
    console.log(name.charAt(i));
 }

