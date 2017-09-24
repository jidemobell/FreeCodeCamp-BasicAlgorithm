
function inArray(x,arr){
    return arr.indexOf(x) > -1;
}

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  primitives = ['boolean'];
  if(!inArray(typeof bool,primitives)){
      return false;
  }
  return true;
}

booWho(null);

console.log(typeof true);