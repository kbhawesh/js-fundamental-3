//Function to return the number of properties in an object

function countProperties(obj){
    return Object.keys(obj).length;
}

const exampleObject = {a:1, b:2, c:3, d:4};

console.log(countProperties(exampleObject));