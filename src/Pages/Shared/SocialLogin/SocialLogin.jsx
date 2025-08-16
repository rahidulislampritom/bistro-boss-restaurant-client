import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                // google login success
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