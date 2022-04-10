var maxAge = 16;
var userAge = prompt("Yoshingizni kiriting:");
var difAge = maxAge - userAge;
var word = document.createElement("h1");
document.body.append(word);

if(userAge >= maxAge){
  console.log("poygasda ishtrok etish mumkin");
  word.append("poygasda ishtrok etish mumkin");    
}else
{
  console.log("Yoshingiz to'g'ri kelmas uzur ekan");
  word.append("Yoshingiz to'g'ri kelmas uzur ekan");
}