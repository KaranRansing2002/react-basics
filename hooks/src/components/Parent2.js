import React,{useContext} from 'react'
import context from './context'

function Parent2() {
    const theme=useContext(context);
    return (
        <div className={theme ? 'dark' : 'white'}> 
            parent2
        </div>
    )
}

export default Parent2
