const myVariable = "Alparslan";
//STRING METHODS string methodlar . notation ile kullanılırlar.
//console.log(myVariable.split("a")); a harfine göre stringi bölüyor
//console.log("ali, veli, 49, 50".split(",")) [ 'ali', ' veli', ' 49', ' 50' ]

//console.log(myVariable.slice(3,6)) javadaki substring gibi başlangıç noktasın dahil bitiş noktasına kadar döndürüyor.

//console.log(myVariable.indexOf("p")) 2 method içinde verilen karakterin string içindeki index ini döndürür. javadaki 
// gibi string değerlerin indexi 0 dan başlar.
//console.log(myVariable.lastIndexOf("a")) 7 method içinde verilen değerin string içerisendeki son indexini döndürür. 

//console.log(myVariable.charAt(6)) l method içindeki int değere karşılık gelen karakteri döndürür.

//console.log(myVariable.length) lenght bir function olmadığından ayrıca () parentez kullanmıyoruz.
//console.log("the first javascript lesson".length) 27
// console.log(myVariable.toUpperCase()) ALPARSLAN
// console.log(myVariable.toLowerCase()) alparslan java ile aynı şekilde string değeri küçük/büyük harf olacak şekilde 
// döndürür. Ayrıca bir method içinde argümana ihtiyacı yoktur.

//console.log(myVariable.includes("ce")) false
//console.log(myVariable.includes("lan")) true bu method boolean değer döndürür 