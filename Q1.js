//Create an object representing a car

const car = {
    make: "Tata",
    model:'camry',
    year : 2024
};

//Function to display all properties of the car

function displayCarProperties(car){
    for(const property in car){
        console.log(`${property}: ${car[property]}`);
    }
}

displayCarProperties(car)