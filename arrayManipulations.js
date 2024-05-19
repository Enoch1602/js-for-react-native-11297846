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

 // Task two adding a formatStringArray function 

function formatArrayStrings(name,newArray) {
    return name.map((name, index) => {
        if (newArray[index] % 2 === 0) {
          return name.toUpperCase();
        } else {
          return name.toLowerCase();
        }
      });

}
const name = ['Enoch', 'Emmanuel', 'Bernard', 'Frank', 'Albert'];
const formattedNames = formatArrayStrings(name, newArray);
console.log(formattedNames);
    