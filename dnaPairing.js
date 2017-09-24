


function pairElement(str) {
   var pairs = {
    A: 'T',
    T: 'A',
    C : 'G',
    G : 'C',
};
  var dnaSplit = str.split("");
  var i = 0;
  var finalArray = [];

  while(i < dnaSplit.length){
    var subArray = [dnaSplit[i],pairs[dnaSplit[i]]];
    finalArray.push(subArray);
    i++;
}

  return finalArray;
}







