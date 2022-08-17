
/*
Object
one of the JavaScript's data types.
a collection of related data and/or functionality.
Nearly all objects in Javascript are instances of Object
object = {key: value};

*/


/*
const name = 'haven';
const age = 4;

print(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}
*/

//1.Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const haven = {name: 'haven', age:4};
print(haven);

//with Javascript magic (dynamically typed language)
haven.hasJob = true;
console.log(haven.hasJob);

//can delete properties later
delete haven.hasJob;
console.log(haven.hasJob); // undefined


//2.Computed properties
//key should be always string
console.log(haven.name); //그 키에 해당하는 정확한 값 받고 싶을 때
console.log(haven['name']); // 정확하게 어떤 key가 필요한지 모르고 runtime에서 결정될때는 computed properties를 쓴다.
haven['hasJob'] = true;
console.log(haven.hasJob) //true

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(haven,'name');
printValue(haven,'age');


//3. Property value shorthand
const person1 = {name: 'bob', age:2};
const person2 = {name: 'steve', age:3};
const person3 = {name: 'dave', age:4};
const person4 = makePerson('haven',30);
console.log(person4);
function makePerson(name,age){
    return{
        name,
        age
    }
}


//4. Constructor Function
const person5 =  new Person('haven',30);
console.log(person5);


function Person(name,age){
    //this={};
    this.name = name;
    this.age = age;
    //return this
}

//5. in operator: property existence check (key in obj)
console.log('name' in haven); //true
console.log('age' in haven); //true
console.log('random' in haven); //false
console.log(haven.random); //undefined

//6. for.. in vas for..of
//for (key in obj)
console.clear();
for(key in haven){
    console.log(key);
}

//for (value of iterable) 
const array = [1,2,4,5];
for(value of array){
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'haven', age:'20'};
const user2 = user;
user2.name = 'coder';
console.log(user); //{name: 'coder', age: '20'}

//old way
const user3 ={};
for(key in user){
    user3[key] = user[key]
}
console.log(user3); //{name: 'coder', age: '20'}

const user4 ={};
Object.assign(user4, user);
//또는
const user5 = Object.assign({},user);
console.log(user4); //{name: 'coder', age: '20'}

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size:'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color); //blue 뒤에있는 ojbect가 앞에 있는 object의 value를 덮어 씌워서
console.log(mixed.size); //big
