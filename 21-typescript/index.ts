/**[[ 타입스크립트 사용하기 ]]
mkdir 폴더명 (폴더생성)
cd 폴더명 (해당 폴더이동)
npm init -y (package.json 생성)
npm install typescript (타입스크립트 생성)
npx tsc -v ( 타입스크립트 버전확인)
npx tsc —init (TypeScript 프로젝트의 초기화 파일(.tsconfig.json)을 생성하는 명령어 )
npx tsc 파일명.ts( -> 해당 tsc파일의 js파일로 생성 / )
node 파일명.js ( -> 터미널에서 js파일 읽어서 콘솔처럼 보여주기) 

// 전역으로 설치 (전역설치시 npm 쓰지않아도 됨)
sudo npm i -g ts-node (:맥에서는 sudo 붙여서 전역으로 설치하기 & pw 입력)
ts-node 파일명.ts (-> 터미널에서 콘솔처럼 보여주기)
 */

console.log('HI');
const msg: string = '타입 스크립트 사용';
const num: number = 100;
console.log('msg >>>> ', msg);
console.log('num >>> ', num);
