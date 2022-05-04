import React from 'react'

function Role({bottomRatio}) {
    return (
        <div className='absolute inset-0 z-[2] flex-center'>
            <div className={`absolute bottom-[${bottomRatio}] left-[17%] my-4 text-4xl font-bold`}>abc</div>
        </div>
    )
}

export default Role