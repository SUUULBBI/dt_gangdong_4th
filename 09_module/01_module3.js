// CommonJS 버전임.

// #3. 여러 모듈 내보내기
const colors = ['black', 'blue', 'red'];
const sayhi = function () {
    console.log('hi');
};

function sayName(name) {
    console.log('my name is ' + name);
    sayhi();
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getBornYear() {
        return new Date().getFullYear() - this.age;
    }
}

// 모두 내보내기
module.exports = {
    colors,
    sayName, // function 이어도 괄호를 사용하지 않고 이름만 작성해서 내보내기.
    Person,
};
