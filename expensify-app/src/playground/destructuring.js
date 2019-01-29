//
// Object destructuring
//

console.log('Object Destructuring');
const person = {
    name: 'Alberto',
    age: 29,
    location: {
        city: 'Getafe',
        temp: 12
    }
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

console.log('Challenge! [Object Destructuring]');
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName); // Penguin => Self-Published (default)


//
// Array destructuring
//
console.log('\nArray Destructuring');
const address = ['1299 S Juniper Street', 'Philadelphia', 
                'Pennsylvania', '19147'];

const [, cityy, state = 'New York'] = address;
console.log(`You are in ${cityy}, ${state}.`);

console.log('Challenge! [Array Destructuring]');
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , mediumPrice] = item;
console.log(`A medium ${name} costs ${mediumPrice}`);
