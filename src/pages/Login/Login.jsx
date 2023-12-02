import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import image from '../../assets/others/authentication2.png';
import "./Login.css";

const Login = () => {
    const [disabled, setDisabled] = useState(true);

    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'hjfhaj'
                    },
                    hideClass: {
                        popup: 'hfah'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = e => {
        const user_captchaValue = e.target.value;
        if (validateCaptcha(user_captchaValue)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }



    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Log In</title>
            </Helmet>

            <div className="hero min-h-screen custom my-5 shadow-xl">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img className='w-[40rem] h-[28.43rem]' src={image} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm bg-base-100 bg-inherit shadow-none">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;