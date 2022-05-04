import React from 'react'

function Role({ bottomRatio }) {
    return (
        <div className='absolute inset-0 z-[2] flex-center'>
            <div data-swiper-parallax={'-1000'}
                data-swiper-parallax-opacity={0}
                data-swiper-parallax-duration={1200}
                style={{bottom: `${bottomRatio}`}}
                className='absolute left-[17%] my-4 text-4xl font-bold'>
                abc
            </div>
            <div data-swiper-parallax={'-2000'}
                data-swiper-parallax-opacity={0}
                data-swiper-parallax-duration={1400}>dhawui dhawuida dawhuid dawhudia dhwauidhwa dhwauidhawidhaw</div>
        </div>
    )
}

export default Role