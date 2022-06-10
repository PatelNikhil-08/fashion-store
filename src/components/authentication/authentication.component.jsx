import {  signInWithGooglePopup, createUserDocumentFromAuth } from  '../../Utils/firebase/firebase.utils'; 

import SignUpForm from '../sign-up-form/sign-up-form.component';


const Authentication = () =>{

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup(); 
        const userDocRef = await createUserDocumentFromAuth(user); 
    }


    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                sign in with Google Popup
            </button>
            <SignUpForm />
            
        </div>
    )
};


export default Authentication; 