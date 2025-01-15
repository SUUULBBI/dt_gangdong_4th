import React from 'react';
import { useForm } from 'react-hook-form'; //써주어야함

export default function Form() {
    // #1. useForm Hook 호출하기
    // ㄴ 폼 관리에 필요한 메서드와 상태를 가져옴

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    /**
     * [register] : 입력필드를 폼 상태에 등록하는 메서드임. ->즉 input할당 및 value 변경 감지함
     * [handleSubmit] : 폼 제출 시 호출 할 함수
     * [watch] : 특정 입력 필드의 변화를 실시간으로 감지함
     * [formState: {errors}] : 폼 상태 객체, 유효성 검증 오류가 발생한 필드 정보를 담고 있음
     */
    ////////////////////////////////////////////////////////////////////////////

    /** #4. formState 객체 활용.
     *  formState : 폼의 상태를 나타내는 객체.
     *   - 폼의 유효성 검사 상태, 제출 상태, 에러 정보 등등 제공함
     *
     *  [ 제공하는 속성 ]
     *  - errors : 유효성 검사 에러 정보를 담고 있는 객체
     *  - isDirty : 폼이 수정되었는지 여부
     *  - isSubmitting : 모든 필드가 유효한지 여부 (제출시작 : true, 제출완료 : false)
     *  - isSubmitted : 폼이 한 번이라도 제출되었는지 여부.
     * 기타 등등..
     * */

    ////////////////////////////////////////////////////////////////////////////
    // #3-2. Submit 콜백함수 지정
    /** handleSubmit(funcA, [funcB]) : 2개의 함수를 받는다.
     *  - funcA : 필수, 유효성 검사 성공할 때 실행함 (수집된 폼 데이터를 인수로 받음)
     *  - [funcB] : 선택임, 유효성검사 실패할 때 실행됨 (에러정보객체인 errors를 인수로 받음)
     */
    const onSubmit = (data) => {
        console.log('폼 제출 성공 : ', data);
    };

    const onError = (err) => {
        console.log('폼 제출 실패 : ', err);
    };
    console.log('register >>>> ', register('username'));
    console.log('errors >>>> ', errors);
    console.log('watch>>>', watch('username')); // 실시간 입력값을 console에서 보여줌

    // #5. watch 사용하기
    const username = watch('username');

    return (
        <div>
            <h1>React-hook-form 라이브러리 데모</h1>
            {/* #3-1. handleSubmit 메서드 지정하기
             - handleSubmit(알기 쉬운 이름, 알기 쉬운 에러명)
             - 제출 시 입력된 데이터 수집 및 등록된 모든 입력 필드 유효성 검사 실행함
                 ㄴ 만약 통과했다? 콜백함수(onSumbit) 실행함
                 ㄴ 만약 실패했다? errors 객체에 에러정보 저장하고 콜백함수는 실행하지 않음  */}

            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor="username">이름</label>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    // #2. {...register()}로 폼과 input 연결하기
                    /**
                     * 구문 : {...register('필드명', {유효성 검사 옵션})}
                     *  - 필드명: 필수입력 필요하며 유효성검사는 생략 가능함 / 필드명은 해당 필드를 잘 나타내는 것으로 입력하기 / 필드명은 폼 데이터를 수집할 때 객체의 키(key)로 사용
                     *  - required : 필수 입력값 여부
                     *  - min, max Length : 최소, 최대 입력 길이 설정
                     *      ㄴ value : 유효성 검사의 기준 값 설정
                     *      ㄴ message : 유효성 검증의 실패시 에러메세지를 설정
                     *  - pattern : 정규식 검증
                     *      ㄴ // 로 감싸기 : 정규식 객체/정규식 표 라는 뜻
                     *      ㄴ ^ : 문자열 시작 의미
                     *      ㄴ $ : 문자열의 끝 의미
                     *      ㄴ \S+ : 공백이 아닌 문자가 1개 이상 반복해라 (*이메일 때 기본적인 정규식)
                     *  - validate : 커스텀 검증 로직
                     *      ㄴ 기본 제공되는 유효성 검사 옵션 외에 더 복잡한 유효성 검사를 직접 정의할 때 사용함
                     *          - 검증 '함수' (ex- useGmail)를 받으며 검증 결과를 반환함 (성공=true , 실패=false)
                     *          - 객체로 사용될 경우, 여러 개의 검증 조건 설정 가능함
                     *      ㄴ (매개변수) : 입력필드의 현재값
                     *               ex-(v) ->  value의 값을 가져옴
                     *
                     * */
                    {...register('username', {
                        required: '이름은 필수 항목입니다.',
                        minLength: {
                            value: 2,
                            message: '이름은 최소 2글자 이상 작성해주세요',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9_]{5,15}$/,
                            message:
                                '아이디는 영문, 숫자, 밑줄(_)로 5자 이상 15자 이하로 작성해야 합니다.',
                        },
                    })}
                />
                {/* -----------------------------------------
                 #4-2. 폼 상태 객체 formState! 활용
                이 표현은 *조건부 렌더링*과 *옵셔널체이닝*을 활용하여 폼 필드의 오류 메세지를 표시하는 방법임. 
                     >> errors : 유효성 검사가 실패한 경우에만 해당 필드에 오류 메시지가 저장됨
                     >> "errors.username" => usename 필드에 대한 오류 정보가 담긴 객체임
                     >> 옵셔널 체인지 연산자 ' ?.' :  JS에서 객체의 속성에 접근할 때 해당 속성이 존재하는지 확인하고 없을 경우 undefined를 반환하는 연산자임   */}
                {errors.username?.message}{' '}
                {/* 에러일 때 메세지 노출 : 아이디는 영문, 숫자, 밑줄(_)로 5자 이상 15자 이하로 작성해야 합니다. */}
                <br />
                <label htmlFor="email">이메일</label>
                <input
                    type="email"
                    placeholder="email(gmail)"
                    id="email"
                    {...register('email', {
                        required: '이메일을 입력해주세요',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: '유효한 이메일 주소를 입력해주세요',
                        },
                        // \S+ : 공백이 아닌 문자가 1개 이상 반복해라.
                        validate: {
                            useGmail: (v) =>
                                v.includes('gmail.com') ||
                                'gmail로만 가입 가능합니다',
                        },
                    })}
                />
                <br />
                <label htmlFor="pwd">비밀번호</label>
                <input
                    type="password"
                    placeholder="password"
                    id="pwd"
                    {...register('password')}
                />
                <br />
                <button type="submit">Submit</button>
            </form>

            {/* 아래 미리보기의 {username}의 경우 53번째줄의 watch로 담은 것임 */}
            <p>미리보기 : {username}</p>
        </div>
    );
}

/**
 *  # 일반 폼 작성과 라이브러리 차이
 *
 * [일반 폼] 특징
 *  - 각 입력필드(input)의 상태를 useState로 관리를 해야함
 *     ㄴ 따라서 모든 입력값의 상태를 관리하고 값이 바뀔때마다 전체 컴포넌트가 리렌더링 될 수 있음
 *  - 검증 로직을 직접 작성해야함 (= '유효성 검사' 를 해야했음 e.target.value === oo )
 *  - 폼 제출 시 각 입력필드의 상태를 모아서 폼 데이터를 수집해야함
 *  - 간단한 폼 작성에 적합했음
 *
 *  --------------------------------------------------
 * [라이브러리] 특징
 *    "npm i react-hook-form 설치 필요"
 *  - 코드의 간결화
 *  - 비체어 컴포넌트 / 필요한 경우에만 리렌더링
 *    ㄴ 즉 입력 필드 변경 시 전체 컴포넌트를 리렌더링하지 않고 필요한 필드만 리렌더링 함
 *    ㄴ 따라서 리렌더링 최소화로 인하여 성능이 개선됨
 *  - 다양한 검증 규칙을 쉽게 설정할 수 있음
 *  - 'handleSubmit' 이라는 함수를 통해 하나로 모든 폼 데이터를 쉽게 관리할 수 있음
 *    ㄴ 왜냐하면 폼 제출 시 자동으로 입력 필드를 수집하여 하나의 객체로 만들어주기 때문에 데이터를 수동으로 관리할 필요가 없음
 *  - 복잡하고 대규모 폼 작성에 적합함
 */

/**
 *  # 제어 컴포넌트 vs 비제어 컴포넌트
 *
 * [제어 컴포넌트]
 *  - React가 상태(state)로 값을 관리하는 컴포넌트 (ex. useState)
 *  - 입력 필드의 값이 useState와 같은 상태 변수에 저장되고 상태변경에 따라 리렌더링 됨
 *  - 입력값을 실시간으로 제어할 수 있어 동적인 폼 처리에 유리함
 *
 * 복잡한 상태값, 동적일 때 사용함 (ex. 회원가입 시 아이디중복확인과 같은 동적인 상황)
 *
 * ---------------------------------
 * [비제어 컴포넌트]
 *  - DOM의 상태를 직접 참조하여 값을 관리하는 컴포넌트
 *  - ref를 통해 입력값을 읽고 사용
 *  - 상태(state)관리가 필요하지 않고 폼 데이터를 빠르게 수집할 때 유리함.
 *  - state관리하지 않기 때문에 '리렌더링'이 적음 --> 성능이 더 좋을 가능성이 높음
 *
 * 간단한 데이터 수집 or 외부라이브러리를 가지고 와야할 때 or 성능이 더 중요한 컴포넌트일 때 사용함
 */

/**
 *   [ React Hook Form (=RHF) ]
 *  - 비제어 컴포넌트 기반 동작
 *  - 폼 필드가 업데이트 될때마다 전체 폼이 리렌더링 되지 않도록 성능 최적화
 *  - 필요할 때만 폼 필드의 상태를 업데이트하여 불필요한 렌더링을 줄이고
 *  - 결과적으로 애플리케이션의 성능을 향상시킴
 *  - 내부적으로 **ref**를 통해 DOM요소에 접근하여 값 변화를 감지함.
 */

///////////////////////////////////////////////////////////////

/** #2-2. ...register사용할 때 ...스프레드 왜 사용하는가?
 * register 메서드는 input 요소와 연결하기 위한 속성들로 구성된 '객체'를 반환함 (-> 반환객체는 아래에서 보기)
 *   ㄴ 따라서 ...연산자를 사용하여 아래의 반환객체의 속성들을 props를 전달하여 가져옴
 * 반환 객체 ex) {name: undefined, onChange: ƒ, onBlur: ƒ, ref: ƒ}
 * {
 *   name: "name",
 *   onChange: ()=>{}, // 입력 값이 변경될 때 호출되는 함수
 *   onBlur: ()=>{},   // 입력 필드가 포커스를 잃을 때 호출되는 함수 (커서포커싱이 없어지면 블러됨)
 *   ref: ()=>{},      // 해당 DOM 요소에 대한 참조를 설정하는 함수
 * }
 */
