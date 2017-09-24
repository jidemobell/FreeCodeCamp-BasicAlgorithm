function spinalCase(str) {
   
   
    for (var i = 0; i < str.length; i++) {
        re2 = /[^a-zA-Z]/;   //not letters eg /s,_,-
        re3 = /[A-Z]/;       // matches capital letter
        var element = str[i];
        var matched2 = element.match(re2);
        var matched3 = element.match(re3);

        if(i!=0){
                 if(element == matched2 && element != '-' && (str[i+1] == str[i+1].toUpperCase())){
                     console.log("found match 3 at " + str[i+1] );
                   var newStrArray = str.split("");
                   newStrArray.splice(i,1);
                   var newStr = newStrArray.join("");
                   str = newStr;
                  i = i-1;
                 }
                 else if(element == matched2 && element != '-' && str[i+1] != matched2){
                   var newStrArray = str.split("");
                   newStrArray.splice(i,1,'-');
                   var newStr = newStrArray.join("");
                   str = newStr;
                  //i = i-1;
                 }
                 else if (element != matched2 && (element == element.toUpperCase()) && str[i-1] == matched2) {
                   var newElement = element.toLowerCase();
                   var newStr = str.replace(element,newElement);
                    str = newStr;
          
                 }
                 else if (element != matched2 && (element == element.toUpperCase()) && str[i-1] != matched2) {
                   var newElement = element.toLowerCase();
                   var newStr1 = spliceItHere(str,i).join("");
                    str = newStr1;
                    i = i+1; 
                 }
              
    }
     
}
return str.toLowerCase();
}  





function spliceItHere(str,i){
    var str = str.split("");
    str.splice(i,1,'-',str[i].toLowerCase());

    return str;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}


console.log(spinalCase('TeleTubbies say Eh-oh'));




