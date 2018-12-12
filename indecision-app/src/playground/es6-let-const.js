var nameVar = 'Alberto';
var nameVar = "David"
console.log('nameVar', nameVar)


let nameLet = "Cuca"
nameLet = "Banana"
console.log("nameLet", nameLet)

const nameConst = "MyConst"
console.log("nameConst", nameConst)

function getPetName() {
    const petName = 'Poke';
    return petName;
}

const petName = getPetName();
console.log(petName)

// Block scoping
console.log("")
console.log("Block Scoping")
var fullName = "Alberto Villena"; 
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0]
    console.log("Inside IF block: ", firstName)
}
console.log("Outside IF block: ", firstName)