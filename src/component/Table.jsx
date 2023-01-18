import React, { useEffect , useState} from 'react'
import '../css/Auth.css'
// import { initializeApp } from 'firebase/app';
import { database } from './firbaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';


 function Table(props) {
  
    //  const [dataFetched , useBool] = useState(false);

    const collectionRef = collection(database, 'users');
    var dataFromBase = [];
    // var container = [];
   
    useEffect(()=>{
        const fetching = async ()=> {
          const container = await getDocs(collectionRef);
          dataFromBase = [...container.docs.map((x)=>{
            return ({...x.data(),id:x.ix});
          })];
          console.log(dataFromBase);
        }
        fetching();
    },[dataFromBase]);


    console.log(dataFromBase);



console.log(dataFromBase);
console.log(dataFromBase);

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
                    { dataFromBase.length>0 &&
                        dataFromBase.map((item=>{
                            return (
                            console.log('datafromBase :>> ', dataFromBase),
                            <tr>
                                <td key={item.id}>{item.name}</td>
                                <td key={item.id}>{item.email}</td>
                                <td key={item.id}>Update</td>
                                <td key={item.id}>Delete</td>
                            </tr>)
                            
                        }))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default React.memo(Table);







// useEffect(async () => {
    //     // const takeIt = async () => {
    //         const q = await getDocs(collectionRef)
    //         var dataFromBase = q.docs.map((item)=>{
    //             return({
    //                 ...item.data(),
    //                 id:item.id
    //             })
    //         })     
    //     // dataFromBase = [...dataFrom]    
    //     console.log(props.count);
    //     console.log(dataFromBase);
    // //  };

    //  console.log(dataFromBase);

    // });