import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import qr from 'qrcode';
import '../css/Auth.css'

export default function QrCode() {
    
   const userInput = {
     name : "harsh panchal",
     age : 20,
     subject : 'qrcode',
     array : ['qr','code','javascript']
   }
    
   const genrate = (data)=>{
       alert("Processing");
            qr.toCanvas(document.getElementById('canvas'),data,(error)=>{
          if(error){
            console.log(error.message);
          }
        })
        
        
        

    }
    return (
    <div className='qrcode'>
      
       <button variant='text' color='success' onClick={()=>genrate(JSON.stringify(userInput))}>Create</button>
        <div className='qr-space' id='qrspace'>
          Qr code 
        </div>

        <canvas id="canvas"></canvas>
    </div>
  )
}
