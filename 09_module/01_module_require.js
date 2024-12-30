// *1.
// 01_module의 모듈을 불러와 사용할 것임.
const add = require('./01_module.js');
console.log(add(5, 7)); // 콘솔내용의 경우 터미널에서 검색하면 확인이 가능함. (1) cd 현재위치의 폴더명 enter > (2) node 실행할 파일명 enter

// ---------------------------------
// *2.
// 01_module2 의 모듈을 불러와 사용할 것임.
const math = require('./01_module2.js'); //const 3개 내보낸 것을 객체로 내보낸 상태.
console.log(math); // 객체로 내보내짐. 키:값 형태 >> { add: [Function: add], PI: 3.141592, E: 2.718 }

// 점 접근법으로 인해 아래와 같이 각각 불러올 수 있음.
console.log(math.PI);
console.log(math.E);
console.log(math.add(3, 6));

// ---------------------------------
// *3.
// 01_module3 의 모듈을 불러와 사용할 것임.
const data = require('./01_module3.js');
console.log(data);

// 내부에 있는 변수, 클래스, 메소드 사용은 . 점을 이용해서 사용함.
//변수 사용
console.log(data.colors);

// 함수 사용 가능.
data.sayName('damon');

// 클래스 사용
const Rei = new data.Person('레이', 20);
console.log(Rei);
console.log(Rei.getBornYear());

// ---------------------------------
// *4.
// 가지고 오고 싶은 것만 가져오기. {}중괄호 사용하기.
const { colors } = require('./01_module3.js');
console.log(colors);

// ---------------------------------
// *5.
// 01_module4의 모듈 불러와 사용하기.
// 바로 내보내는 것 가져오기.
const { sayhi2 } = require('./01_module4.js');
sayhi2();
