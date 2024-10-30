//Function to reverse a string

function reverseString(input){
    return input.split("").reverse().join("");

}

const originalString = "Hello, World!";

const reversedStr = reverseString(originalString);

console.log(reversedStr);