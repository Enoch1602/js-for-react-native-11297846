// Task one 
function processArray(arr) {
    return arr.map(x => {
        if (x % 2 === 0) {
          return x * x;
        } else {
          return x * 3;
        }
      })
}

 const myArray = [11, 12, 13, 14, 15];
 const newArray = processArray(myArray);
 console.log(newArray);
