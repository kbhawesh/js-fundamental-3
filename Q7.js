//Program using a Map to store user information

const userMap = new Map();

function addUser(name, age, email){
    const userinfo = {age, email};

    userMap.set(name, userinfo);
}


function updateUser(name, age, email){
    if(userMap.has(name)){
        const userinfo = userMap.get(name);

        userinfo.age = age;
        userinfo.email = email;
    }
}

function deleteUser(name){
    userMap.delete(name);
}


addUser("Peter", 30, 'pabc@gmail.com');
addUser("Boby", 20, 'bob@gmail.com');

console.log(userMap);

updateUser("Peter", 32, "newabc@gmail.com")
console.log(userMap);

deleteUser("Boby")
console.log(userMap);