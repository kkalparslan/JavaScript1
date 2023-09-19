console.log(typeof "alparslan");
console.log("alparslan".charAt(2));
console.log(Math.floor(Math.random()*5+1))
console.log(Math.floor(Math.random()*5+1))
console.log(Math.floor(Math.random()*5+1))
console.log(Math.floor(Math.random()*5+1))
console.log("alparslan".charAt(Math.floor(Math.random() * 9 + 1))) //this returns a random number from 
//one to nine and the charAt() method needs a number to know which character to return from my name.
//kodun sonundaki +1 sonucun 9 çıkmasına neden olabilir. bu durumda charAt(9) boş döneceği için +1 i 
//iptal ediyoruz. sadece ismimdeki harfleri random döndürebilmek için.
console.log("alparslan".charAt(Math.floor(Math.random() * 9)))

//bu kodu anyName e göre yapacak olursak;
const anyName = "kamil"
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)))
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)))
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)))
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)))

