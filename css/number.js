//Numbers

//An integer is a whole number
const myNumber = 44;
console.log(myNumber)

//A number with a decimal point is a float which references thw "floating point"
const myFloat = "44.01"; //<44> ondalık sayıdan sonraki sıfırları atar. ayrıca integer değeri string olarak
//yazarsak consolda beyaz gösteriyor.
const myFloat_2 = 44.0151;// <44.01> ancak değer ondalık taraf için 0 dan farklı ise değeri aynen döndürür
console.log(myFloat)
console.log(myFloat_2)
console.log(myNumber === myFloat_2)
const myString = "44";
console.log(myNumber === myString)
console.log(myString+9) // <449>
console.log(9+myString) // <944> string bulaşıcılığı bildiğimiz gibi. 
console.log(myString) 
console.log(Number(myString)) // 44 bu defa string gibi değil int bir değer gibi sarı yazdırıyor.
console.log(Number(myString)+9) // 53 int değer olduğu için artık normal toplama yapıyor.
console.log(Number(myString) === myNumber) // true artık iki int değeri karşılaştırıyor ve true dönüyor 
console.log(Number.isInteger(myString)) //false içine konulan parametrenin integer olup olmadığını 
                                        //kontrol eder ve boolean değer döner.
console.log(Number.isInteger(myNumber)) //true
console.log(Number.parseFloat(myFloat)) //44
console.log(Number.parseFloat(myFloat_2)) //44.01
const myFloat_3 = 44.01234
console.log(Number.parseFloat(myFloat_3).toFixed(4)) //44.0123 this method limits a floating point number
                                                    //to the number of decimals you provide as a parameter.
console.log(myFloat_2.toFixed(2)); // also rounds up if removing trailing decimals.
console.log(Number.parseInt(myString))//removes non-numeric characters and converts other data types of 
                                        //the number data type                                                 
console.log(myFloat.toString()) //44.01
console.log(typeof myFloat.toString()) //string
console.log(typeof Number.parseFloat(myString)) //number
console.log(Number.parseFloat(myString)) //44
console.log(Number.parseFloat("4.4456dcf")) //4.4456
console.log(Number.parseFloat("4.4456dcf").toFixed(3)) //4.445
console.log(Number.parseFloat("4.4456dcf").toFixed(3).toString())
console.log(Number.isNaN(myString))//true