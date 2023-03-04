// *Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// *For example,

// * [true,  true,  true,  false,
//   * true,  true,  true,  true ,
//   * true,  false, true,  false,
//   * true,  false, false, true ,
//   * true,  true,  true,  true ,
//   * false, false, true,  true]
// *The correct answer would be 17.

// *Hint: Don't forget to check for bad values like null/undefined






function countSheeps(arrayOfSheep) {
    let count = 0
    for(let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        count += 1
      }
    }
     return count;
   }



// *We are counting the amount of sheeps in the array
// *In order to count, we would need to use a for *loop so we can count one element after the other.
// *We are using .lenth to count the number of *elements in the array. Currently there are 24 *elements in the array. Then we use an if *statement to find the boolean of true



function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }



//   *above is another way to solve by using the filter 