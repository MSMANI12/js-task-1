var string=prompt("enter word");
const reg=/[aeiou]/gi;
var chars=string.match(reg);
document.write(chars.join(','));
document.write(chars.length);