// *1.
// 02_module 파일 가져와서 사용하기.
//  ㄴ 이때 가져오는 파일명에 commonJS와 다르게 .js확장자명을 정확하게 붙혀주어야함. (why? node.js가 모듈을 잘 찾지 못해서 오류가 나올 수 있음.)
import { name, subtract } from './02_module.js'; // .js 붙여줘야함.

console.log(name);
console.log(subtract(5, 3));

// *2.
// 02_module2 파일 가져와서 사용하기.
import { add, mul } from './02_module2.js';
console.log(add(3, 8));
console.log(mul(2, 4));

// *3.
// default 로 내보내진 모듈을 가져올때는 중괄호{}를 사용하지 않음.
import div from './02_module3.js'; // {div}에서 {} 없이 div
console.log(div(4, 2));

// *4.
//  별칭(Alias = 약자 as) 사용하기.
//  - 가져오는 변수명 변경해서 사용하는 방법.
import { add as addition, mul as multifly } from './02_module2.js';
console.log(addition(5, 3));
console.log(multifly(5, 3));
