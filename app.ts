const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Hilana',
    age: 35,
    hobbies: ['Series', 'Sports'],
    role: [2, 'author']
}

// person.role.push('admin');
// person.role[1] = 10

let favoriteActivities: string[];
favoriteActivities = ['Series'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
} // toUpperCase works cause it's an array methode