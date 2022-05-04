import React from 'react'

function Welcome({ bottomRatio }) {
    return (
        <div style={{bottom: `${bottomRatio}`}}
            className={`absolute left-[10%] bottom-[${bottomRatio}] z-[2] 
                text-4xl font-bold
                child:my-4`}>
            <h1>Welcome to my Website!</h1>
            <h1>I am H<span className='text-2xl'>Myopic</span>.</h1>
            <h1>I'm a</h1>
    </div>
    )
}

export default Welcome