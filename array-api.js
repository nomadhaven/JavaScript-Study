//Q1. make a string out of an array /배열을 문자열로 만들라
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join('|');
    console.log(result);
}

//Q2. make an array out of a string / string을 배열로 만들라
{
    const fruits= '🍓,🍊,🍍,🍑'; // 왼쪽의 그림들은 하나의 문자열로 인식된다.
    const result = fruits.split(',')
    console.log(result);

    const result2 = fruits.split(',',2); // 딸기와 오렌지까지만 전달받고 싶을 때. 2는 limit이란 optional 값
    console.log(result2);


}

//Q3. make this array look like this: [5,4,3,2,1]
{
    const array= [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 본래의 함수 array도 순서가 5,4,3,2,1 로 바뀌었다. reverse는 배열 자체를 바꾸는 API

}

//Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.splice(0,2) // splice는 배열 자체에서 데이터를 삭제하는 API
    console.log(result); //1,2
    console.log(array); // 3,4,5 (1과 2가 삭제됨)

    //하지만 splice는 기존의 배열을 건드리는 API며 새로운 배열을 생성하지 않는다.    
}

{
    const array = [1,2,3,4,5];
    const result = array.slice(2,5) // [2]번째부터 시작해서 [5]번째 바로 앞까지 받아온다.
    console.log(result); //3,4,5
    console.log(array);  
}

class Student {
    constructor(name, age, enrolled, score){
        this.name= name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88),
];

//Q5. find a student with the score 90
{
 const result = students.find(function (student,index) {
    console.log(student,index); // 학생들과 학생들의 인덱스[배열상의 위치]까지 출력됨
 });
}

//find는 첫번째로 true가 나오면 해당하는 요소를 return해주는 API
    {
    const result = students.find((student) => student.score === 90);
    console.log(result);
   }

//Q6. make an array of enrolled studnets
{
 const result = students.filter((student)=> student.enrolled);
 console.log(result);
}
//Q7. make an array containing only the students scores. result should be: [45,80,90,66,88]
{
    const  result = students.map((student)=>student.score); 
    //map API는 전달해준 콜백 함수를 호출하면서 콜백함수에서 가동되어진 값으로 리턴
    console.log(result);
}
{
    const  result = students.map((student)=>student.score*2); 
    console.log(result); //[90, 160, 180, 132, 176]
}

//Q8. check if there is a student with the score lower than 50
{
 console.clear();
  //some은 조건중 하나라도 true면 true 라고 리턴된다.
 const result = students.some((student)=> student.score<50);
 console.log(result); //true
}

{
      //every는 조건 모두 true면 true 라고 리턴된다.
    const result = students.every((student)=> student.score<50);
    console.log(result); //false
}

{
    //위의 every를 이용하여 50이하의 값이 있는지 알아보는 방법
  const result = !students.every((student)=> student.score>=50);
  console.log(result); //true
}


//Q9. compute students' avarage score
{
// 첫번째 값이 0이 됨
 const result = students.reduce((prev,curr)=>{
    console.log('--------');
    console.log(prev);
    console.log(curr);
    return curr;
 },0); //배열의 값이 순차적으로 curr에 들어오고 return된 값은 다시 prev가 된다. 시작할땐 0으로 시작하기 위해 0을 {}뒤에 씀.
 //reduce는 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할때 쓰는 것
}

{
    
     const result = students.reduce((prev,curr)=> prev+curr.score,0);
     console.log(result/ students.length); 
    }


//Q10. make a string containing all the scores result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map(student=>student.score)
    .filter((score)=>score>=50) //50점 이하인 사람들은 제거
    .join();
    console.log(result);

}

//Bonus. do Q10 sorted in asceding order. reuslt should be : '45,66,80,88,90'
{
    const result = students.map(student=>student.score)
    .sort((a,b)=>a-b) //오름차순. 
    //sort의 콜백 함수에서는 이전값(a)과 현재값(b)이 전달되는데 만약 마이너스 값을 리턴하면, 이전값이 현재값보다 작다고 간주된다. b가 a보다 크다면 a-b는 마이너스 값이 된다. 
    //이는 이전값이 현재값보다 작다는 말이므로 이전값을 늘 현재값보다 작게 sorting한다는 말. 배열의 수를 직접 넣어보면 이해가 된다.
    //내림차순 .sort((a,b)=>b-a)
    .join();
    console.log(result);
}