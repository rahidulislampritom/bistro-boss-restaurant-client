import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';



const Login = () => {

    const [disable, setDisable] = useState(true);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    console.log(location.state)

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;
        const loginData = {
            email,
            password
        }
        console.log(loginData)

        // auth login start
        login(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful!')
                navigate(from, { replace: true });

            })
            .catch((err) => {
                console.log(err.message);
                toast.error("Login failed! Check your credentials.");
            });

        // auth login end
    }


    // captcha start 
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const inputRef = useRef()
    const handleCaptchaValidate = () => {
        const user_captcha_value = inputRef.current.value;
        console.log(user_captcha_value);

        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }
    }
    // captcha end

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-2xl">

                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card  w-full max-w-sm shrink-0   p-4">
                        <h1 className="text-4xl text-center font-bold">Login now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleLoginSubmit}>
                                {/* email  */}
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input focus:outline-0" placeholder="Email" />
                                </fieldset>

                                {/* password  */}
                                <fieldset className="fieldset">
                                    <label className="label">Password</label>
                                    <input name="password" type="text" className="input focus:outline-0" placeholder="Password" />
                                </fieldset>

                                {/* forgot password  */}
                                <fieldset className="fieldset">
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                </fieldset>

                                {/* reload captcha */}
                                <fieldset className="fieldset mt-3">
                                    <LoadCanvasTemplate />
                                    <input ref={inputRef} type="text" className="input focus:outline-0" placeholder="type..." />
                                    <div onClick={handleCaptchaValidate} className="btn btn-outline btn-xs">VALIDATE</div>
                                </fieldset>

                                {/* submit button  */}
                                <fieldset className="fieldset">

                                    <input disabled={disable} className="btn btn-neutral mt-4" type="submit" value="Login" />

                                </fieldset>
                            </form>
                        </div>
                        <h2 className="text-center">Don’t have an account? <span className="text-amber-700 font-medium"><Link>Sign Up</Link></span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;