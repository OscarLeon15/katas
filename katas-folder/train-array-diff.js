// function array_diff(a, b) {

//   let newArr = [];
//   for(let i=0; i< a.length; i++){
//     for(let j=0; j< b.length; j++){
//       if(a[i] !== b[j]){
//       newArr.push();
//       }
//     }
//   }
// }


// array_diff(([1,8,2,7,9], []), [1,8,2])


// arr.filter(i => !b.includes(i))

function array_diff(a, b){

    let arrToSet = new Set(arr2);
    // arrToSet.add(4)
    // return arrToSet.has(4);
    // return arr1.filter( el => !arrToSet.has(el))
    // newA =new Set(a, b)
    // return newA;
  return a.concat(b).filter((e, i, arr)=> arr.indexOf(e) == arr.lastIndexOf(e))
  
  }
  let arr1 =  [1, 4, 6, 7, 4, 6, 10, 11, 12];
  let arr2 = [1, 5, 6, 4, 7, 9, 4, 10];
  // array_diff(([1,8,2], []), [1,8,2])
  
  array_diff(arr1, arr2)