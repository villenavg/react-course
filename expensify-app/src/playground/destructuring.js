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

console.log('Challenge!\n');
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName); // Penguin => Self-Published (default)