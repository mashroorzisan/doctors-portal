import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authcontext/AuthProvider';

const Signup = () => {
    const { userSignup } = useContext(AuthContext);

    const { register, formState: { errors }, handleSubmit
    } = useForm();

    const handleLogin = data => {
        userSignup(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl'>Sign up</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email",
                                { required: 'Email address is requierd' })}
                            className="input input-bordered w-full max-w-xs" />
                        {
                            errors.email &&
                            <p className='text-red-600' role="alert">{errors.email?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">password</span></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'password must be 6 characters and longer' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[0-9])/, message: 'password must contain 6 characters and at least one number' }
                                })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget password?</span></label>
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
                </form>
                <p>Already have an account? <Link to='/login' className='text-secondary'>Log in</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Signup;