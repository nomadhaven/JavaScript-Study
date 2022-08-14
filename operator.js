

//1. String concatenation +를 통해서 문자열과 문자열을 합해 새로운 문자열 만들수 있다.
console.log('my' + 'cat');
console.log('1'+2); //문자와 숫자를 더해 문자열 생성
console.log(`string literals: 


''''

1+2 = ${1+2}`); // 줄바꿈을 하거나 작은 따옴표 넣어도 그대로 문자열로 변환되어서 나온다.


//2. Numeric operators
console.log(1+1); //add
console.log(1-1); // subtract
console.log(1/1); // divide
console.log(1+1); // multiply
console.log(5%2); // remainder
console.log(2**3); // exponentiation

//3. Increment and decrement operators
let counter =2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);


const postIncrement  = counter++;
//postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


//4. Assignment operators
let x =3;
let y =6;
x += y; // x = x+y;
x -= y;
x *= y;
x /= y;



//5. Comparison operators
console.log(10<6); // less than
console.log(10<=6); // less than or equal
console.log(10>6); // greater than
console.log(10>=6); // greater tahn or eqal


//6. Logical operators : || (or), && (and), !(not)
const value1 = false;
const value2 = 4<2;

// || (or) 여러 값들 중 하나만 true라도 true를 출력, 처음으로 true가 나오면 바로 멈춘다. or중 하나라도 true면 ture이기에.
console.log(`or: ${value1 || value2 || check()}`);

//&& (and), finds the first fasly value 모든 값이 true여야지 true를 retun 따라서 false를 찾자마자 연산 종료
console.log(`and: ${value1 && value2 && check()}`);


// 따라서 or , and 연산 모두 heavy연 연산을 나열할땐 제일 뒤로 보내는게 좋다.

function check (){
for(let i = 0 ; i< 10 ; i++){
    //wasting time
    console.log('😅');

}
return true;
}

// ! (not) 값을 바꿔주는 연산자 true는 false로 false는 true로
console.log(!value1); 

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversation 문자열, 숫자의 타입이 달라도 값이 같으면 같다고 연산
console.log(stringFive == numberFive); //true
console.log(stringFive !=  numberFive); //false

// ==== strict equality, no type conversion 값이 같아도 type이 다르면 다르다고 연산.
console.log(stringFive ===  numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const haven1 = {name: 'haven'};
const haven2 = {name: 'haven'};
//haven 1, 2 에는 같은 값이 저장되어 있는걸로 보이지만 haven1,2에는 각각 다른 ref가 저장되어 있다. 또한 다른 ref는 서로 다른 object를 가르키고 있다.
const haven3 = haven1;
//haven 3은 haven 1과 같은 ref를 가지게 된다.
console.log(haven1 == haven2); // false
console.log(haven1 === haven2); //false
console.log(haven1 === haven3); // true


//equality - puzzler
console.log(0==false); // t 0,null,undefine, empty string은 모두 false
console.log(0===false); // f 0은 boolean 타입이 아니라서
console.log(''== false); //t
console.log(''===false); //f empty string은 boolean 타입이 아니라서
console.log(null == undefined); //t
console.log(null === undefined); //f

//8. Conditional operators : if
//if, else if, else

const name = 'haven';
if(name === 'haven'){
    console.log('Welcome, Haven!');
} else if (name ==='coder'){
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

//9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'haven'?'yes':'no');

//10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':    
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break
}

// 11. Loops
// while loop, while the condition in truthy,
//body code is executed.
let i =3;
while (i>0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition

do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

//for loop, for(begin; condition; step)
for(i = 3; i>0 ; i--){
    console.log(`for: ${i}`);
}

for(let i =3;  i>0; i = i-2){
    //inline variable declaration
    console.log(`inline variable for:${i}`);
}

//nested loops
for(let i = 0; i<10; i++){
    for(let j=0; j<10 ; j++ ){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
//Q1. interate from 0 to 10 and print only even number (use continue) continue를 써서 짝수만 출력 

for(let i=0; i<11 ; i++){
    if(i%2!==0){
        continue;
    }
    console.log(`Q1. ${i}`);
}

//Q2. interate from 0 to 10 and print numbers until reaching 8 (use break) break를 써서 8까지만 출력

for(let i=0; i<11; i++){
    if(i>8){
        break;
    }
    console.log(`Q2. ${i}`);
}
