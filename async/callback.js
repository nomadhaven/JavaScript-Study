'use strict';

//Javascript is synchronous.
//Execute the code block in order after hoisting 코드가 작성한 순서에 맞게 동기적으로 실행된다.
// hoisting : var 변수 , function declaration 선언이 자동적으로 제일 위로 올라가는 것
console.log('1');
setTimeout(() =>console.log('2'),1000); // setTimeout은 정해진 시간 뒤에 함수가 실행되게 하는 API. 1000 밀리 세컨드는 1초, 1초 뒤에 함수가 실행된다.
console.log('3');

//Synchronous callback
function printImmediately(print){
    print();
}

printImmediately(()=>console.log('hello'))

//Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}

printWithDelay(()=>console.log('async callback'),2000);

//Callback hell excample
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id ==='haven' && password==='dream') ||
                (id === 'coder' && password==='academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);

    }
    getRoles(user,onSuccess, onError){
        setTimeout(()=>{
            if(user === 'haven'){
                onSuccess({name : 'haven', role: 'admin'});
            } else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user =>{
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error =>{}
        );
    },
    error=>{console.log(error)}
    );
