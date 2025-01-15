import React from 'react';
import { useForm } from 'react-hook-form';

export default function PracForm1() {
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

    const name = watch('name');
    const age = watch('age');

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <input
                    type="text"
                    placeholder="name"
                    id="name"
                    {...register('name', { required: '이름은 필수값입니다.' })}
                />
                <br /> {errors.name?.message}
                <br />
                <input
                    type="text"
                    placeholder="age"
                    id="age"
                    {...register('age', {
                        pattern: {
                            value: /^[1-9_]$/,
                            message:
                                '나이는 0이아닌 1부터의 숫자만 가능합니다.',
                        },
                    })}
                />
                <br /> <p style={{ color: 'red' }}>{errors.age.message}</p>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
