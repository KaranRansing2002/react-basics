import React,{useState,useEffect} from 'react'
import {auth, database} from '../firebase'

function Firebase() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let createUserInDB=async()=>{
        let res=await database.users.add({name,age});
        console.log(res);
    }
    useEffect(async()=>{
        let data=await database.users.get();
        data.forEach((obj)=>console.log(obj.data()));
    })

    let update=async()=>{
        let uid='NgQ83FNrrFZD9g7UR0NT'
        await database.users.doc(uid).update({
            name,age
        })
    }

    let deletee=async()=>{
        let uid='NgQ83FNrrFZD9g7UR0NT'
        await database.users.doc(uid).delete();
    }

    return (
    <>
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>    
            <label htmlFor='age'>Age</label>
            <input type='number' value={age} onChange={(e)=>setAge(e.target.value)}></input>
            <button onClick={update}>update</button>
            <button onClick={deletee}>Delete</button>
        </div>
    </>
    )
}

export default Firebase
