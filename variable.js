
//1. Use strict
//Javascript is very flexible
//flexible === dangerous
//add ECMASscript 5
'use strict'; //바닐라 자바스크립트 개발시 선언하는게 좋음
console.log(age); // var age라는 선언이 제일 위에 올라가 있고 age에 대한 값이 할당되지 않았으므로 출력하면 undefined으로 나온다.

// 2. variable
//let (added in ES6) 전서계적으로 개발자들이 이용하는 자바스크립트 문법이 ES6
let globalName = 'global name';

{
let name = 'nomad';
console.log(name);
name='haven';
console.log(name);
console.log(globalName)
}

console.log(name); // 블록안에 있는 변수는 외부에서 출력하지 못한다.
console.log(globalName); // 블록 안에서 변수 쓰지 않고 바로 정의하는 변수를 global scope이라고 부른다. 블록 안에서도, 밖에서도 출력 가능하다.
//글로벌한 변수들은 어플리케이션이 실행되는 순간부터 끝날때까지 메모리에 탑재되기 때문에 최소한으로 쓸 필요가 있다. 

//ES6부터 자바스크립트에 변수를 선언할수 있는 키워드는 딱 하나 let 
//그 전에는 var를 썼다.

//var (don't ever use this!)
//var hoisting (move declaration from bottom to top 어디에 선언했냐에 상관 없이 항상 선언을 끌어올려주는 것)
//has no block scope
{
age = 4;
var age;
}
console.log(age);

//3.Contants 선언한 뒤에는 변경할수 없는 것(immutable)
//favor immutable data type always for a few reasons: 웬만하면 값을 할당한 다음 변경되지 않는 데이터 값에 사용해야하는 변수.
//-security 보안상의 이유
//-thread safety 
//-reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//4.Variable Types
//primitive, single item: number, string, boolean, null, undefine, symbol 더이상 작은 단위로 나눠질수 없는 한가지의 단위
//oject(싱글 아이템들을 하나로 묶어 여러 단위로 관리할수 있게 해주는 것), box container
//function, first-class function(다른 데이터 타입처럼 함수를 변수에 할당, 함수에 파라미터로도 전달, 함수의 리턴 타입으로도 함수 전달)

const count = 17; //Integer
const size = 17.1; //Decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values: infinity, -infinity, NaN(Not a Number)
const infinity = 1/0; //수를 0으로 나누면 무한대가 된다
const negativeInfinity = -1/0; //음수를 0으로 나누면 음의 무한대가 된다.
//연산시 유효한 값을 받지 못하게 되면 숫자가 아닌 Infinity, -Infinity가 뜨는 경우가 있으니 주의

const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


//bigInt (fairly new, don't use it yet)
const bigInt= 15648465456484655132184121238412123n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting ='hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, Nan, ''(비어진 string)
//true: any other value
const canRead = true;
const test = 3<1; // fasle
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null  텅텅 비어있는 값
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined 텅 비어있는지 값이 들어가있는지도 정해지지 않은 값
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects  map이나 자료구조에서 고유한 식별자가 필요할때, 동시에 다발적으로 일어날수 있는 코드에서 우선순위를 주고싶을 때 사용 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2); //콘솔에 출력하면 false 나온다.

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //symbol은 바로 출력하면 error가 나므로 .description을 통해 출력해야 한다.

//object, real-lifee object, data structure
const haven = { name: 'haven', age: 20};


// 5. Dynamic typing : dynamically type language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type:${typeof text}`);

text =1;
console.log(`value: ${text}, type:${typeof text}`);

text ='7'+5;
console.log(`value: ${text}, type:${typeof text}`);

text = '8'/'2';
console.log(`value: ${text}, type:${typeof text}`);
console.log(text.charAt(0)); //error