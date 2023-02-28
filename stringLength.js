function stringLength(str){
  if(str.length > 0 && str.length <= 10){
    return str.length;
  }
  else{
    throw new Error("string length should be in between 1 and 10");
  }
}

module.exports = stringLength;