import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from "./firebase/firebaseConfig.js";

export default function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
    }

    return (
    <>
    <NavBar />
    <div>
        <button onclick={handleGoogle}>Sign In With Google</button>
    </div>

    </>
    )
}
