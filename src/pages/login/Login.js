import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authcontext/AuthProvider';


const Login = () => {
    const { userSignin } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit
    } = useForm();
    const [loginError, setLoginerror] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleLogin = data => {
        setLoginerror('');
        userSignin(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err.message);
                setLoginerror(err.message)
            })

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl'>Login</h2>
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
                                    minLength: { value: 6, message: 'password must be 6 characters or longer' }
                                })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget password?</span></label>
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                {
                    loginError && <p className='text-red-600'>{loginError}</p>
                }
                <p>New to Doctor's Portal? <Link to='/signup' className='text-secondary'>Create an account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login; 