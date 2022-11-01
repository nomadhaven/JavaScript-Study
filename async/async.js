//async & await
//clear style of using promise

//1. async

// function fetchUser(){
//     return new Promise((resolve,reject)=>{
//         //do network request in 10 secs...
//        resolve('haven');
//     })
// }


async function fetchUser(){
    //do network request in 10 secs...
    return 'haven';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


//2.await
function delay(ms){
    //정해진 ms가 지나면 resolve를 호출하는 promise를 return
    return new Promise(resolve => setTimeout(resolve,ms));

}

async function getApple(){
    await delay(1000); //3초
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌'
}


//await을 쓰지않고 getBanana함수 만든다면
/* function getBanana(){
    return delay(3000)
    .then(()=>'🍌')
} */

//기존의 promise chaining 이용시
/* function pickFruits(){
    return getApple().then(apple=> {
        return getBanana().then(banana=> `${apple}+${banana}`);
    })
}*/

async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple}+${banana}`;
}

pickFruits().then(console.log); // 🍎+🍌


//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruits=>fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){ //가장 먼저 도착하는 것 하나만 호출
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log)