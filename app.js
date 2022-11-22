var person = {
    name: 'Hilana',
    age: 35,
    hobbies: ['Series', 'Sports'],
    role: [2, 'author']
};
person.role.push('admin');
// person.role[1] = 10
var favoriteActivities;
favoriteActivities = ['Series'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
} // toUpperCase works cause it's an array methode
