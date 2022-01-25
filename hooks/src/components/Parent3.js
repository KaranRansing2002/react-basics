import React,{useContext} from 'react'
import context from './context';
import Child from './Child'

function Parent3() {
    const theme=useContext(context);
    return (
        <div className={theme ? 'dark' : 'white'}>
            <Child/>
        </div>
    )
}

export default Parent3
 