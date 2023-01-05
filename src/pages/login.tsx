import { auth, provider} from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 

export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    };

    return(
    <div>
        <p> <h1>Sign in with Google to continue...</h1></p>
        <button onClick={signInWithGoogle}> SignIn</button>
    </div>
    );
};