// JSON : JavaScript Object Notation

//1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banna']);
console.log(json);

const rabbit ={
    name: 'bunny',
    color: 'white',
    size:null,
    birthDate: new Date(),
    //symbol: Symbol('id'), ////symbol은 JSON에 포함되지 않는다.
    jump: () =>{
        console.log(`${this.name} can jump!`); 
    },
    //jump는 JSON에 포함되지 않는다.
};

json = JSON.stringify(rabbit);
console.log(json);


json = JSON.stringify(rabbit, ['name']);
console.log(json); //{"name":"bunny"} 이름만 출력되어 나온다

json = JSON.stringify(rabbit, ['name','color','size']);
console.log(json); //{"name":"bunny"} 이름만,색,사이즈가 출력되어 나온다

json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key==='name'?'haven':value;
    //name이라는 key가 들어오는 경우에는 name을 haven으로 설정, key가 name이 아닌 경우에는 original의 value를 쓴다.
});
console.log(json); //{"name":"bunny"} 이름만,색,사이즈가 출력되어 나온다




//2.JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit); // rabbit을 json으로 바꿀때 jump()라는 함수가 포함되지 않았다

const obj = JSON.parse(json, (key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key ==='birthDate' ? new Date(value) : value;
    //key가 brithDate인 경우 새로운 Date object를 만들것이고 birthDate가 아닐 경우 기존 값을 쓰겠다.

});
console.log(obj); // 따라서 json을 obj로 변환 했을때도 jump는 포함되지 않는다.
rabbit.jump();
//obj.jump(); 에러 발생


console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
