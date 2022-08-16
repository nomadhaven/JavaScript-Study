'use strict';
/*
Object-oriendted programming
class: template  틀
object: instance of a class 
Javascript classes
    -introduced in ES6 ES6부터 추가되었다. 추가되기 전엔 클래스 정의하지 않고 object로 만들었다. 
    -syntactical sugar over prototype-based  inheritance 기존에 존재하던 프로토타입을 기반으로 문법만 추가한것
*/


//. 1.Class declarations
class Person{
    //constructor
    constructor(name, age){
        //field
        this.name = name;
        this.age = age;
    }


    //methods
    speack(){
        console.log(`${this.name}: Hello!`);
    }    
}


const haven = new Person('haven',20);
console.log(haven.name);
console.log(haven.age);
haven.speack();

//2.Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age
    }

    set age(value){
        // if(value<0){
        //     throw Error('age can not be negative!');
        // }
        this._age = value< 0 ? 0: value;
    }
}

const user1 = new User('Steve','Jobs',-1);
console.log(user1.age);


/*3. Fields (public, private)
Too soon! 너무 최근에 추가돼서 많은 개발자가 쓰고있진 않다.
너무 일러서 사파리에서 지원 안되고 바벨 이용해서 사용해야 된다.
*/

class Experiment{
    publicField =2; // 외부 접근 가능
    #privateField = 0; // #붙으면 클래스 내부에서만 보여지고 접근 가능하고 변경 가능하지만 클래스 외부에선 볼수 없다.
}

const experiment  =  new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined으로 출력 

/*
4. Static properties and methods
Too soon!
object, 들어오는 데이터와 상관 없이 클래스에서 공통적으로 쓸수 있는 거라면 static과 static method 사용하여 메모리 사용 줄일 수 있다.
*/

class Article{
    static publisher = 'Nomad Haven';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 =  new Article(2);
console.log(article1.publisher); //undefined 으로 출력. static은 ojbect마다 할당되어지는 것이 아니라 Article이라는 클래스 자체에 붙어있기 때문에
console.log(Article.publisher) // Nomad Haven 출력
Article.printPublisher();// Nomad Haven 출력


/*
5. Inheritance
a way for one class to extend anther class
*/
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width*this.height;
    }
}

class Rectangle extends Shape { }

class Triangle extends Shape {
    draw(){
        super.draw();
        console.log('📐');
    }

    getArea(){
        return (this.width * this.height) /2 ;
    }

    toString(){ //자바스크립트 내부의 오브젝트를 오버라이드 한것
        return `Triangle: color: ${this.color} `;
    }
 }

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t 자바스크립트에서 만든 모든 오브젝트(클래스)는 자바 스크립트에 있는 오브젝트를 상속한것
console.log(triangle.toString());  //자바스크립트 내부의 오브젝트를 사용한것

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference 자바스크립트 오브젝트