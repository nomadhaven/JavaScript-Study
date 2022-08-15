//Fuction
//-fundamental building block in the program
//-subprogram casn be used multiple times 여러번 재사용 가능
//-performs a task or calcultates a value 한가지의 일이나 값을 계산하기 위해 사용

//1. Function declaration
/*
함수의 형태 : function name(param1, param2) {body... return;} 
하나의 함수는 한가지의 일만 하도록 해야한다. one function === one thing
함수의 이름은 이런 형태로 naming: doSomething, command, verb
e.g. createCardAndPoint -> createdCard, createdPoint 함수가 너무 많은 일을 한다면 일을 세분화 해서 함수를 나눠보자
자바스크립트에서 함수는 object로 간주 function is object in JS


*/

function printHello(){
    console.log('hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello!🤩');
log(1234);



/*
2. Parameters
premitive parameters: passed by value
object parameters: passed by reference 레퍼런스가 전달된다

*/

function changeName(obj){
    obj.name = 'coder'; //전달된 object의 name을 무조건 coder로 변환하는 함수
}
const haven = {name: 'haven'};
changeName(haven);
console.log(haven); //haven의 이름이 coder로 변경


/*
3. Default parameters (added in ES6)
*/

function showMessage(message, from = 'unknown'){ //from에 defualt값을 unknown이라 지정.
    console.log(`${message} by ${from}`);
}
showMessage('Hi'); // Hi! by unkown


//4. Rest parameter (added in ES6)
function printAll(...args){ //...arg는 3개의 값이 담긴 배열로 해석
    for(let i = 0 ; i<args.length;i++){
        console.log(args[i]);    
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('good','day','haven');

//5.Local scope 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. 
let globalMessage ='global'; //gloabal variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); 에러발생
}
printMessage();
// console.log(message); 에러 발생 

//6.Return a value
function sum(a,b){
    return a+b;
}

const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);


//7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...

    }
}


//good 조건이 맞지 않을때는 빨리 return을 해서 함수를 종료하고 그 다음에 필요한 로직을 실행하는게 좋다.
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    //long upgrade logic...
}

/*
First-class function
functions are treated like any other variable
can be assigned as a value to variable
can be passed as an argument to other function.
can be returned by another function
함수는 다른 변수와 마찬가지로 변수에 할당이 되고 
함수에 파라미터로 전달이 되고 
함수를 통해 리턴값으로 리턴이 된다


1.Function expression

function declaration과 function expression의 차이점
a function declaration can be called eariler than it is defined. (hoisted) 함수가 선언되기 이전에 호출해도 호출 가능
a function expression is created when the execution reaches it.
*/

// print(); function eexpression이라서 선언되기 전에 호출하면  error 발생
const print =function(){ // 함수에 이름이 없는것을 anonymous function이라 부른다. 원한다면 함수의 이름을 작성할 수도 있다. 함수를 선언함과 동시에 print라는 변수에 할당
    console.log('print');
};
print(); //print 출력
const printAgain = print;
printAgain(); //print 출력
const sumAgain = sum;
console.log(sumAgain(1,3));



/* 
2. Callback function using function expression
*/
function randomQuiz(answer, printYes,printNo){
    if(answer==='i love you'){
        printYes(); //정답인 경우에만 printYes라는 콜백함수 호출
    }else{
        printNo(); //정답이 아니면 printNo라는 콜백함수 호출
    }
}


//anonymous function
const printYes = function(){ 
    console.log('yes!');
};

/*
named function
-better debugging in debugger's stach traces
-recursions
*/
const printNo = function print(){
    console.log('no!');
  //  print();

};


randomQuiz('wrong',printYes,printNo);
randomQuiz('i love you',printYes,printNo);

/*Arrow function
always anonymous

const simplePrint = function(){
    console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint!')

*/

     //이름  파라미터 리턴값
const add = (a,b) => a+b;

//IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})(); //함수를 괄로로 묶고 그뒤에 ();를 붙여서 함수를 선언과 동시에 호출하는 것


