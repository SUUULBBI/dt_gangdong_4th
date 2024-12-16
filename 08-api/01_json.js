// JSON
// 아래 const는 서버에서 가져온 데이터라는 가정으로 작성함. 서버에서 가져왔으니 스트링의 문자열 형태임.
const car = `{
    "model" : "IONIQ 5",
    "company" : "HYUNDAYI",
    "year" : 2023,
    "options" : ["side mirror", "smart sensor"]
}`;
console.log(car); // format : JSON (문자열 상태.)

///////////////////////////////////
// 역직렬화 : JSON.parse() -> 통신하여 받은 데이터를 객체로 변환
// json -> js obj
const obj = JSON.parse(car); // js obj 객체로 전환한 것.
console.log(obj); // js obj 객체로 변환한 것 나옴.

// obj 변수는 Js object이므로 .(dot)/[] 연산자 이용해서 키 값에 접근이 가능해짐.
console.log(obj.model); //IONIQ 5
console.log(obj.options); //(2) ['side mirror', 'smart sensor']
console.log(obj.hello); // 값이 없으므로 undefined 호출됨.

///////////////////////////////////
//** 직렬화 : JSON.stringify() -> 통신하기 쉬운 포맷인 JSON으로 변환함. */
// js obj -> json
const json = JSON.stringify(obj);
console.log(json, typeof json); // 다시 문자열로 바꼈음.

// 따라서 json 변수는 JSON 형태의 '문자열 string ' 이므로
//.(dot)/[] 와 같은 연산자를 가지고 키 값에 접근할 수 없음. 예시는 아래로!
console.log(json.model); //undefined
console.log(json.price); //undefined

// json 변수는 string 타입이므로, string 타입에 쓸 수 있는 내장 메서드는 사용할 수 있음.
// 예를들어 .split('')
console.log(json.split('')); // 모든 문자열을 하나씩 쪼개기
console.log(json.toUpperCase()); // 모든 문자를 대문자로 변경
