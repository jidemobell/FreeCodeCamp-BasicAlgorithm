
function spinalCase(str) {
   var re = /\s/;
   var re2 = /[^a-zA-Z]/g
   
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        var matched = str.match(re);
        if(i!=0){
                 if(element == element.toUpperCase() && str[i-1]==matched){
                    // console.log("there is a match at "+ i);
                   //  console.log(element);
                     var newElement = element.toLowerCase();
                  //   console.log(newElement);
                     var newStr = str.replace(str[i-1],'-');
                  //   console.log(newStr[i]);
                     newStr = setCharAt(newStr,i,newElement);
                   //  console.log(newStr);
                     str = newStr;  
                }
                else if(element == element.toUpperCase() && str[i-1]!=matched && element != matched){
                  //  console.log("no space here on element " +element);
                    var newElement = element.toLowerCase();
                  //  console.log("new element is " +newElement);
                    var newStr1 = spliceItHere(str,i).join("");
                    str = newStr1;
                    i = i+1;
                 //   console.log(str);
                }
    }
     
}
return str.toLowerCase();
}  



console.log(spinalCase('The_Andy_Griffith_Show'));


function spliceItHere(str,i){
    var str = str.split("");
    str.splice(i,1,'-',str[i].toLowerCase());

    return str;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}



