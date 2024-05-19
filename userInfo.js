 // Task three
let id = 1;

function createUserProfiles(name, formattedNames) {
  return name.map((name, index) => {
    return {
      originalName: name,
      modifiedName: formattedNames[index],
      id: id++
    };
  });
}

const name = ['Enoch', 'Emmanuel', 'Bernard', 'Frank', 'Albert'];
const formattedNames = [ 'enoch', 'EMMANUEL', 'bernard', 'FRANK', 'albert' ]
const userProfiles = createUserProfiles(name, formattedNames);
console.log(userProfiles);
