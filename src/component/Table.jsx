import React, { useEffect , useState} from 'react'
import '../css/Auth.css'
// import { initializeApp } from 'firebase/app';
import { database } from './firbaseConfig.js';
import {doc , updateDoc , deleteDoc} from 'firebase/firestore';

function Table(props) {
  
     var dataFromBase = [];
   
   
        console.log(props.array);
        dataFromBase = [...props.array];
        
    const deleteData = (id) =>{
        const docToDelete = doc(database,"users" ,id);
          deleteDoc(docToDelete)
          .then(()=>{
            alert("data is deleted")
          })
          .catch((err)=>{
            alert(err.message)
          })
    }    
    const updateData = (id) =>{
        
    }    
    
    
    return (
        <div className='data-base'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { dataFromBase.map((item=>{
                            return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                {/* <td><button type='button' name="Update" onClick={updateData(item.id)}>Update</button></td> */}
                                {/* <td><button type='button' name="Delete" onClick={deleteData(item.id)}>Delete</button></td> */}
                            </tr>)
                            
                        }))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(Table);







