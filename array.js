'user strict';

//Array

//1.Declaration
const arr1 =  new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length-1]); //제일 마지막의 데이터를 접근하는 방법


console.clear();

//3. Looping over an array
//print all frutis
//a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach
fruits.forEach( function(fruit, index){
    console.log(fruit, index);
});

fruits.forEach((fruit,index)=>console.log(fruit,index));
fruits.forEach((fruit)=>console.log(fruit));

//4.Addition, deletion, copy
