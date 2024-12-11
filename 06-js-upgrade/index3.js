// 클래스
// - ES5 도입하여 클래스 기반 언어처럼 사용 가능.

// 클래스 기본 문법
// #1. class : 클래스를 정의할 때 사용하는 키워드. // CamelCase 사용
class House {
    // #2. constructor : 클래스의 생성자
    // - 객체를 생성할 때 자동으로 호출되며 초기화 작업을 수행
    constructor(year, name, window) {
        // #3. this : 클래스 내부에서 현재 인스턴스를 참조하는 객체임.
        //  - 인스턴스의 속성과 메서드에 접근할 때 사용함.
        //  - 현재 인스턴스=this , 따라서 인스턴스의 속성(name)을 추가하고 그 값을 매개변수 name으로 설정하는 것.
        this.year = year; // this.year : 인스턴스의 속성명 // =year >> 매개변수 constructor (year)라는 것.
        this.name = name; // this.name 이아니고 this.ss 와 같이 해도 무방하지만 콘솔로그에 찍히거나 해당 건의 속성명이 ss 로 나타나기 때문에 >> 그럼 가독성이 좋지 않아지므로 같은 네이밍을 넣어준 것임.
        this.window = window;
    }
    // #4. 메서드 : 클래스 내부에 정의된 함수.
    //  - 해당 클래스의 인스턴스에서 호출 가능함.
    getAge() {
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요!`);
    }
    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}
// #5. 인스턴스 : 클래스로부터 생성된 실제 객체임
// - new 키워드를 사용해서 생성함.
// 클래스 = 설계도
// 인스턴스 = 설계도로 만들어진 '실제집'
// 따라서, 클래스와 인스턴스 등 모두 각각 독립적인 객체이고. 따라서 각자 자신만의 this를 가짐.
const House1 = new House(1900, '롯데', 1); // 기존 House의 year, name, window 를 순서대로 써주면 됨.
// 클래스를 이용해서 인스턴스를 생성시 construction에 선언된 매개변수대로 값을 지정해야함.
// 만약 매개변수가 3개인데 2개만 넣으면 안됨. 3개면 3개값 모두 넣어야 한다는 말임.
console.log(House1); // House {year: 1900, name: '롯데', window: 1}
console.log(typeof House1); // object 객체임
console.log(House1.year); // 1900 // 점 접근법으로 접근 가능.
House1.getAge(); // .getAge() 매서드 실행 가능 >> 롯데는 건축한지 124년 되었어요!
House1.getWindow(); // .getWindow() 매서드 실행 가능 >>롯데의 창문은 1개 입니다.

const house2 = new House(1993, '호반', 2);
console.log(house2); // 신규 객체를 또 만든 것임.  //House {year: 1993, name: '호반', window: 2}

////////////////////////////////////////////////////////////////////////
//클래스의 상속
//  - 상속을 통해 다른 클래스의 기능을 재사용 가능함.
//  - 'extends' 키워드를 사용하여 상속을 구현함.
class Apartment extends House {
    // Apartment 라는 클래스는 House를 가지고 만든 모든 것을 사용할 수 있음. (=House 에게서 상속받음))
    constructor(year, name, window, floor, windowMaker) {
        super(year, name, window); // 위에처럼 this.year = year ... 와 같이 각각 가져오기 위해 쓰지 않고, 한번에 부모의 값을 가져오는 방법
        this.floor = floor;
        this.windowMaker = windowMaker;
    }
    getAptInfo() {
        // apartment 클래스 내 새로운 매서드 함수를 생성한 것.
        return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}이며, 창문의 개수는 ${this.window}이다.`;
    }

    // #7. Override (오버라이드) : 부모의 메소드와 같은 함수를 재정의하는 것을 말함.
    // - 부모 클래스에서 정의된 메서드를 자식 클래스에서 '새롭게 재정의' 하거나 '변경' 하는 것을 의미함.
    // - 주로 부모클래스에서 제공한 기본 동작을 '자식 클래스의 특성에 맞게 수정' 할때 사용함.
    //  = 아래 getWindow와 같이 부모의 클래스와 동일한 네이밍의 매서드로 새롭게 자식의 매서드를 만들어내는 것도 가능.

    // override 규칙이 있음.
    // - 메서드 이름과 매개변수 리스트가 부모 클래스와 '동일' 해야함. (* 원래는 동일하지 않게 부모 클래스의 매개변수를 빼고 진행하면 오류가 남.)
    getWindow() {
        return `${this.name} 아파트의 ${this.window}개의 창문은 ${this.windowMaker} 회사에서 생성되었습니다.`;
    }
}
// 붕어빵 찍어보기~
const apt1 = new Apartment(2024, '래미안에스티움', 3, 15, '3M');
console.log(apt1); //Apartment {year: 2024, name: '래미안에스티움', window: 3, floor: 15, windowMaker: '3M'}
console.log(apt1.getAptInfo()); // 매서드 사용하기. //2024년에 지어진 래미안에스티움 아파트의 총 층수는 15이며, 창문의 개수는 3이다.
console.log(apt1.getWindow()); // 래미안에스티움 아파트의 3개의 창문은 3M 회사에서 생성되었습니다.
house2.getWindow(); // 호반의 창문은 2개 입니다.  //문법 내 console 있어서 console 안찍어야됨.

//////////////////////////////////
console.log('-------------------------');
//qz 3) shape 직사각형 클래스의 속성 : 가로와 세로
// shape 클래스의 메소드 : getArea()
// - 넓이 반환하는 메소드 : (가로*세로)
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return `직사각형 넓이는 ${this.width}*${this.height}이므로 12입니다.`;
    }
}
let rec1 = new Shape(3, 4);
console.log(rec1.getArea()); //12나오는지 확인

//////////////////////////////////
console.log('-------------------------');
// Qz 4)
/**
 * 1. Rectangle(직사각형) 클래스 만들기
 * - Shape 클래스 상속
 * - 사각형의 넓이 구하는 메소드 : getArea()
 * - 직사각형의 대각선 길이 구하는 메소드 추가
 * - Math.sqrt() 이용 : Math.sqrt(n**2) == n // Math.sqrt(9) == 3
 *   제곱근 구하는 함수
 *
 * 2. Triangle(삼각형) 클래스 만들기
 * - 넓이 반환하는 메소드 : getArea()
 *
 * 3. Circle(원) 클래스 만들기
 * - Shape 클래스를 상속
 * - width, height 이외에 radius 생성자 추가
 * - getArea() 메소드는 원의 넓이를 리턴.
 *
 * - Shape를 상속받은 각각의 클래스 Retangel, Triangle, Circle 클래스를
 * 이용해서 인스턴스 하나씩 생성
 * - getArea로 사각형, 삼각형, 원의 넓이가 잘 나오는지 확인하기.
 */
//1번.
class Rectangle extends Shape {
    constructor(width, height, radius) {
        super(width, height);
        this.radius = radius;
    }
    getArea() {
        return this.width * this.height;
    }
    getDiagonal() {
        return Math.sqrt(this.width ** 2 + this.height ** 2);
    }
    getTriangle() {
        return getArea() / 2;
    }
    getCircle() {
        return Math.sqrt(this.radius ** 2) * 3.14;
    }
}
const Rec = new Rectangle(5, 5, 5);
console.log(Rec.getArea());
console.log(Rec.getDiagonal());
console.log(Rec.getArea() / 2);
console.log(Rec.getCircle());
