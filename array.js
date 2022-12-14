'user strict';

//Array

//1.Declaration
const arr1 =  new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['π','π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length-1]); //μ μΌ λ§μ§λ§μ λ°μ΄ν°λ₯Ό μ κ·Όνλ λ°©λ²


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
//push: add an item to the end
fruits.push('π','π');
console.log(fruits);
//pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);


//unshift: add an item to the beginning
fruits.unshift('π','π');
console.log(fruits);

//shift: remove and item from the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);


//important! shift, unshift are much slower than pop, push μ μ²΄ λ°°μ΄μ΄ λ°λκΈ° λλ¬Έμ
//splice: remove an item by index position
fruits.push('π','π','π');
console.log(fruits);
fruits.splice(1,1); // λͺκ°λ μ§μΈμ§ μ§μ νμ§ μμΌλ©΄ μ§μ ν μΈλ±μ€ λΆν° λ€μ λͺ¨λ  μΈλ±μ€λ₯Ό μ§μλ²λ¦°λ€.
console.log(fruits);
fruits.splice(1,1,'π₯','π₯₯'); //1λ²μ§Έ μΈλ±μ€λΆν° 1κ° μ§μ°κ³  κ·Έ λ€μ ν€μμ μ½μ½λμ λ£μ΄λΌ
console.log(fruits);


// combine two arrays
const fruits2 = ['π','π'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π₯'));
console.log(fruits.indexOf('π₯₯'));

//includes
console.log(fruits.includes('π₯₯'));
console.log(fruits.includes('π'));
console.log(fruits.indexOf('π')); //-1


//lastIndexOf
console.clear();
fruits.push('π₯₯');
console.log(fruits);
console.log(fruits.indexOf('π₯₯')); //2 μ μΌ μμ μλ κ°λ§ μΆλ ₯
console.log(fruits.lastIndexOf('π₯₯')); //5 μ μΌ λ€μ μλ κ°λ§ μΆλ ₯

