

// function likes(names) {
//     if(names.length === 0){
//     return "no one likes this"
//     }else if(names.length === 1){
//       return `${names[0]} likes this`
//     }else if(names.length === 2){
//       return `${names[0]} and ${names[1]} like this`
//     }else if(names.length === 3){
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     }else {
//     return `${names[0]}, ${names[1]} and ${names.length -2} others like this`
//     }
//   }
  
//     likes(["pluto", "mercury"])


    
function likes(arrayOfFans){
  const fansCount = arrayOfFans.length;
  const [first, second, third, ...theRest] = arrayOfFans;
  console.log(theRest)
  switch(fansCount){
    case 0: return 'no one likes it'
      // return 'no one likes it'
      // break;
    case 1: return `${first} likes this`
    case 2: return `${first} and ${second} like this`
    case 3: return `${first}, ${second} and ${third} like this`
    default: return `${first}, ${second} and ${theRest.length + 1} others like this`
  }


}


const fans = ["alina", "pepe", "pepe", "soto", "tato", "paco"];

likes(fans)
  
  