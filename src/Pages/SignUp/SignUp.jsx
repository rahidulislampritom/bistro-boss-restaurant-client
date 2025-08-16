import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {

    const { createUser, profileUpdate } = useAuth();
    const navigate = useNavigate();
    const axiosPublicUsers = useAxiosPublic();


    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[A-Za-z\d\W_]{6}/;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(() => {
                // const loggedUser = result.user;
                // console.log(loggedUser);

                // update profile start
                const profile = {
                    displayName: data.name,
                    photoURL: data.photo
                };

                profileUpdate(profile)
                    .then(() => {
                        // profile updated 
                        navigate('/');
                    })
                    .catch((err) => {
                        console.log('profile update error', err.message);
                    });
                // update profile end
                const userInfo = {
                    name: data.name,
                    email: data.email
                }

                axiosPublicUsers.post(`/users`, userInfo)
                    .then(() => {

                        // console.log(res.data)
                    })


            })
            .catch(() => {
                // console.log('signup error', err.message)
            })

    };


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-2xl">
                        <h1 className="text-5xl font-bold">Sign up!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card w-full max-w-sm shrink-0 ">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* name  */}
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input {...register('name', { required: true })} type="text" className="input" placeholder="Name" />
                                    {errors.name && <span className="text-red-500">This field is required</span>}
                                </fieldset>
                                {/* photo  */}

                                <fieldset className="fieldset">
                                    <label className="label">Photo URL</label>
                                    <input {...register('photo', { required: true })} type="text" className="input" placeholder="Photo URL" />
                                    {errors.photo && <span className="text-red-500">This field is required</span>}
                                </fieldset>

                                {/* email  */}
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input {...register('email', { required: true })} type="email" className="input" placeholder="Email" />
                                    {errors.email && <span className="text-red-500">This field is required</span>}
                                </fieldset>

                                {/* password  */}
                                <fieldset className="fieldset">
                                    <label className="label">Password</label>
                                    <input {...register('password', { pattern: regex }, { required: true, })} type="text" className="input" placeholder="Password" />
                                    {errors.password?.type === 'required' && <span className="text-red-500">Give a Strong Password</span>}
                                    {errors.password?.type === "pattern" && <span className="text-red-500">Password must have one Uppercase one lower case ,one number and one special character.</span>}

                                </fieldset>

                                <fieldset className="fieldset">
                                    <input className="btn btn-neutral " type="submit" value="Sign up" />
                                </fieldset>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                        
                        <h2 className="text-center">Have an account? <span className="text-amber-700 font-medium"><Link>Login</Link></span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;