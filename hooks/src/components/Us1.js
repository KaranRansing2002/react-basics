import React, {useState,useEffect} from 'react'

function Us1() {
    const [count,setCount]=useState(0);

    useEffect( ()=>{
        console.log("useEffect")
        document.title=`button Clicked ${count} time`
    })
    console.log('render');
    return (
        <div>
            <h1>Current Count {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )
}

export default Us1
