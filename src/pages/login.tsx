import { auth, provider} from "../config/firebase";
import { signInWithPopup } from "firebase/auth";


export const Login = () => {
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider); 
    }
    return(
    <div>
        <p> <h1>Sign in with Google to continue...</h1></p>
        <button onClick={signInWithGoogle}> SignIn</button>
    </div>
    );
};