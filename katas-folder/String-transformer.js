









function stringTransformer(str) {
    const arrayFromString = [...str];
  
  
  return arrayFromString.map((eachLetter)=> eachLetter === eachLetter.toUpperCase() ? 
    eachLetter.toLowerCase() : eachLetter.toUpperCase())
    .join("")
    .split(" ")
    .reverse()
    .join(" ")
  }
  
  
  stringTransformer("san DRA")
  
  
  
  
  // function stringTransformer(str) {
  //   const arrayFromString = [...str]
  
  
  // return arrayFromString.map((eachLetter)=>{
  //   if(eachLetter === eachLetter.toUpperCase()){
  //     return eachLetter.toLowerCase();
  //   }else {
  //     return eachLetter.toUpperCase();
  //   }
  // }).join("").split(" ").reverse().join(" ")
  
  // console.log(eachLetter)
  // }
  
  
  // stringTransformer("san DRA")
  
  
  
  
  
  
  
  // function stringTransformer(str) {
  //  let newStr = [...str];
  //  let emptyStr = "";
  // newStr.forEach((letter)=>{
  //  // console.log(letter)
  //  if(letter === letter.toUpperCase()){
  //      emptyStr += letter.toLowerCase();
  //  }
  //  else{
  //    emptyStr += letter.toUpperCase();
  //  }
  // })
  // return emptyStr.split(" ").reverse().join(' ')
  // // console.log(emptyStr.split().reverse().join())
  // //  return emptyStr.split().reverse().join();
  // }
  
  
  
  
  // stringTransformer("san DRA")