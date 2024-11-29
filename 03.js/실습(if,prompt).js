//---------코딩온 실습 과제 1
function age() {
    let inputAge = prompt('나이입력');
    if (inputAge >= 20) {
        return '성인';
    } else if (inputAge >= 17) {
        return '고등학생';
    } else if (inputAge >= 14) {
        return '중학생';
    } else if (inputAge >= 8) {
        return '초등학생';
    } else {
        return '유아';
    }
}
const result = age();
console.log(result);
// = console.log(age());
console.log('나이는' + result);
