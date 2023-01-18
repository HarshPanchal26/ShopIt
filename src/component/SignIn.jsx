import React , {useState} from 'react'
import '../css/Auth.css'
// import { initializeApp } from 'firebase/app';
import {app,database} from './firbaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection , getDocs , where , query , onSnapshot} from 'firebase/firestore';
import { async } from '@firebase/util';
import Table from './Table';



export default function SignIn() {      

    const [count , changeIt] = useState(0);

 

const auth = getAuth();

const collectionRef = collection(database, 'users');


    const [data , setData] = useState({
    name : "",
    email : "",
    password : ""
})    
    
    const handleInput = (event)=>{

        let newInput = {
            [event.target.name] : event.target.value
        }
        setData({...data, ...newInput});

    }
    
    
    // submit event handler............. 
    const handleEvent = (e)=>{
        var status = false;
        e.preventDefault();
        console.log(data.email);
        console.log(data.name);
      createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // status = true;
                  
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    status = true;
                    alert(errorMessage);
                    // ..
                });
             
           // storing in database 
            if(!status){
            addDoc(collectionRef, {
                name : data.name,
                email : data.email,
                password : data.password,
            })
            .then((responce)=>{
               console.log("Data Added Succesfully");
               changeIt((prev)=> prev +1);
               alert("You are now verifiyd user");
            })
            .catch((error)=>{
                alert(error.message);
            })
        }else{
            alert("There is some problem");
        }
                document.getElementById("form-signIn").reset();
    }
    
    const filtter = ()=>{
        const nameQuery = query(collectionRef ,where("name",'==','sahil'));
        
        onSnapshot(nameQuery,(data)=>{
            console.log(data.docs.map((x)=>{
                return x.data(); 
            }))
        })

    }    
    return (
        <div className='sign-in-prompt'>
            

            <div className='sign-in-modla'>

                <h2>Sign Up</h2>
                <form className='form' method='POST' id="form-signIn">
                    <div className='form-in'>
                        <div className='sign-form'>
                            <input type="text" name="name" className='sign-elem' placeholder='Enter your name ' onChange={handleInput} required></input>
                        </div>
                        <div className='sign-form'>
                            <input type="text" name="email" className='sign-elem' placeholder='Enter your Email' onChange={handleInput} required></input>
                        </div>
                        <div className='sign-form'>
                            <input type="password" name="password" className='sign-elem' placeholder='Enter Password' onChange={handleInput} required></input>
                        </div>
                        <div>
                            <button type='submit' name="submit" onClick={handleEvent}>Submit</button>
                            <button type='button' name="btn" onClick={filtter}>Show-Data</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='data-base'>
                
             <Table count={count}></Table>

            </div>
        </div>


    )
}

