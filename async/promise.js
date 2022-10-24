'use strict';

//Promise is a JavaScript object for asynchronous operation. 
// State : pending - > fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor uns automatically.
const promise = new Promise((resolve, reject)=>{
    //doing some heavy work ( network, reading files)
    console.log('doing something...');
    setTimeout(()=>{
       // resolve('haven');
       reject(new Error('no network'));
    },2000);
}); 

//2. Consumers: then, catch, finally
            //haven이란 값이 value에 들어온다.
promise
.then((value)=>{
 console.log(value);
})
.catch(error =>{
 console.log(error);
});
// .finally(()=>{ 성공하든 실패하든 상관없이 어떤 기능을 실행하는 것
//     console.log('finally');
// });


//3. Promise Chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber
.then(num => num*2) //2
.then(num => num*3) //6
.then(num => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num-1),1000); //5
    })
})
.then(num => console.log(num)); //5


//4. Error Handling
const getHen = () =>
    new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('🐔'),1000);
});
const getEgg = hen =>
    new Promise((resolve,reject)=>{
       //setTimeout(()=> resolve(`${hen} => 🥚`),1000);
       setTimeout(()=> reject(new Error(`error! ${hen} => 🥚`)),1000);
})
const cook = egg =>
    new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(`${egg}=>🍳`),1000);
    });


// getHen()
// .then(getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

getHen()
.then(getEgg)
.catch(error=>{
    return '🥖';
})
.then(cook)
.then(console.log)
.catch(console.log);