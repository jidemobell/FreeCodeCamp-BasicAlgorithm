function binaryConverter(bin){
       bin=bin.split('');
       j = bin.length-1;
       var sum = 0;
       var i = 0;
       while(j >= 0){
        sum += (bin[i]*Math.pow(2,j));
        i++;
        j--;
       }
    return sum;
}



function binaryAgent(str) {
    str = str.split(" ");
    final = [];
     
    for (var i = 0; i < str.length; i++) {
        var e = binaryConverter(str[i]);
        var entry = String.fromCharCode(e);
        final.push(entry);
    }
    return final.join("");
  }

console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));