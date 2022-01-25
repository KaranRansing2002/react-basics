import React, {useState,useEffect} from 'react'

function Us3() {
    const [count,setCount]=useState(0);
    const [val,setVal]=useState('');
    useEffect( ()=>{
        console.log("useEffect")
        document.title=`button Clicked ${count} time`
    },[count])
    console.log('render');
    return (
        <div>
            <h1>Current Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}></input>
        </div>
    )
}

export default Us3
