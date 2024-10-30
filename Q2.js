// Define an object representing a student's infromation

const student ={
    name: "Peter",
    age: 19,
    grade: 'A'
}

//Method to update the student's Grade

function updateGrade(newGrade){
    student.grade = newGrade;
}

updateGrade("B")
console.log(student);