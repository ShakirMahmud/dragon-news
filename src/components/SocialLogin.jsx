import { FaGithub, FaGoogle } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai"; 
import { FcGoogle } from "react-icons/fc"; 

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="*:w-full space-y-2">
                <button className="btn text-blue-600"><FaGoogle />Login with Google</button>
                <button className="btn"><FaGithub/>Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;