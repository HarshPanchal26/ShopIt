import React , {useState} from 'react'
import '../css/Auth.css'
// import { initializeApp } from 'firebase/app';
import {app} from './firbaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



export default function SignIn() {      

const [data , setData] = useState({
    name : "",
    email : "",
    password : ""
})    
    const auth = getAuth();

    const handleInput = (event)=>{

        let newInput = {
            [event.target.name] : event.target.value
        }

        setData({...data, ...newInput});
    }
    const handleEvent = (e)=>{
        e.preventDefault();
      createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                    // ..
                });

                document.getElementById("form-signIn").reset();
    }       
    return (
        <div className='sign-in-prompt'>
            SIGN IN PLZ Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus corporis neque totam illo ut dolor enim voluptatum voluptatem. Adipisci ab tempora minima molestiae veritatis nemo delectus assumenda iure doloremque.

            <div className='sign-in-modla'>

                <h2>Sign Up</h2>
                <form className='form' method='POST' id="form-signIn">
                    <div className='form-in'>
                        <div className='sign-form'>
                            <input type="text" name="name" className='sign-elem' placeholder='Enter your name ' onChange={handleInput}></input>
                        </div>
                        <div className='sign-form'>
                            <input type="text" name="email" className='sign-elem' placeholder='Enter your Email' onChange={handleInput}></input>
                        </div>
                        <div className='sign-form'>
                            <input type="password" name="password" className='sign-elem' placeholder='Enter Password' onChange={handleInput}></input>
                        </div>
                        <div>
                            <button type='submit' name="submit" onClick={handleEvent}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}

