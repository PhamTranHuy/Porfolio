import React from 'react'

function Role({ titlePosition }) {
    return (
        <>
            <div style={{
                    top: `${titlePosition?.top}px`,
                    left: `${titlePosition?.left}px`
                }}
                className='absolute z-[2] text-4xl font-bold'
                data-swiper-parallax={'-2000'}
                data-swiper-parallax-opacity={0}
                data-swiper-parallax-duration={1200}>
                abc
            </div>
            <div className='absolute inset-0 z-[2] 
            w-full layout-max-w
            flex-center justify-end'>
                <div
                className=''
                data-swiper-parallax={'-4000'}
                data-swiper-parallax-opacity={0}
                data-swiper-parallax-duration={1400}>
                    <div className='w-60 h-60 border border-[#ffffff61] rounded-full'></div>
                </div>
            </div>
        </>
    )
}

export default Role