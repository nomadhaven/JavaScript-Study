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
//push: add an item to the end
fruits.push('🍒','🍑');
console.log(fruits);
//pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);


//unshift: add an item to the beginning
fruits.unshift('🍇','🍈');
console.log(fruits);

//shift: remove and item from the beginning
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);


//important! shift, unshift are much slower than pop, push 전체 배열이 바뀌기 때문에
//splice: remove an item by index position
fruits.push('🍓','🍊','🍍');
console.log(fruits);
fruits.splice(1,1); // 몇개나 지울지 지정하지 않으면 지정한 인덱스 부터 뒤의 모든 인덱스를 지워버린다.
console.log(fruits);
fruits.splice(1,1,'🥝','🥥'); //1번째 인덱스부터 1개 지우고 그 뒤에 키위와 코코넛을 넣어라
console.log(fruits);


// combine two arrays
const fruits2 = ['🍉','🍐'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥝'));
console.log(fruits.indexOf('🥥'));

//includes
console.log(fruits.includes('🥥'));
console.log(fruits.includes('🍐'));
console.log(fruits.indexOf('🍐')); //-1


//lastIndexOf
console.clear();
fruits.push('🥥');
console.log(fruits);
console.log(fruits.indexOf('🥥')); //2 제일 앞에 있는 값만 출력
console.log(fruits.lastIndexOf('🥥')); //5 제일 뒤에 있는 값만 출력

