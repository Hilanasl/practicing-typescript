// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Hilana',
//     age: 35,
//     hobbies: ['Series', 'Sports'],
//     role: [2, 'author']
// }

enum Role {ADMIN, READ_ONLY, AUTHOR};

// We don't have to start with 0, we can attribute other numbers or make it mixed
// Ex: enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'};

const person = {
    name: 'Hilana',
    age: 35,
    hobbies: ['Series', 'Sports'],
    role: Role.ADMIN
}

// person.role.push('admin');
// person.role[1] = 10

let favoriteActivities: string[];
favoriteActivities = ['Series'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
} // toUpperCase works cause it's an array methode