// Form.js 파일의 주석을 모두 걷어낸 코드만 보는 파일.

import React from 'react';
import { useForm } from 'react-hook-form'; //써주어야함

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        console.log('폼 제출 성공 : ', data);
    };

    const onError = (err) => {
        console.log('폼 제출 실패 : ', err);
    };
    console.log('register >>>> ', register('username'));
    console.log('errors >>>> ', errors);
    console.log('watch>>>', watch('username'));

    const username = watch('username');

    return (
        <div>
            <h1>React-hook-form 라이브러리 데모</h1>

            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor="username">이름</label>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
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
                {errors.username?.message} <br />
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
            <p>미리보기 : {username}</p>
        </div>
    );
}
