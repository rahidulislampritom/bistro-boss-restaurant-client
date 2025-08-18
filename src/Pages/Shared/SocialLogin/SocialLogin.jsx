import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const axiosGoogleLogin = useAxiosPublic();
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                // console.log(result.user)

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                }
                console.log(userInfo)
                axiosGoogleLogin.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 shadow-md">
                <FcGoogle className="text-xl mr-2" />
                Sign in with Google
            </button>
        </div>
    );
};

export default SocialLogin;