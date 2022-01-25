import React,{useContext} from 'react'
import context from './context'

function Parent1() {
    const theme=useContext(context)
    return (
        <div className={theme ? 'dark' : 'white'}>
            parent1
        </div>
    )
}

export default Parent1
