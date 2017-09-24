function inArray(x,arr){
    return arr.indexOf(x) > -1;
}

function convertHTML(str) {
  var re = /[&<>"']/g;
  var entities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&apos;'
};

var keysArray = ['&','<','>','"',"'"];

for (var i = 0; i < str.length; i++) {
     if(inArray(str[i],keysArray)){
         console.log(str[i])
         var newStr = str.replace(str[i],entities[str[i]]);
         console.log(newStr);
         str = newStr;
     }
     
}
return str;

}

console.log(convertHTML("<>"));




