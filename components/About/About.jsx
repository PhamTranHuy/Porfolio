import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'swiper';

const background_imgs = ['/About/bg-1.jpg', '/About/bg-2.jpg', '/About/bg-3.jpg'];

function About() {
    return (
        <div id='about-section' className='w-screen h-screen'>
            <Swiper
                modules={[Parallax]}
                slidesPerView={1}
                speed={1000}
                parallax={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    background_imgs.map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                            <div style={{backgroundImage: `url(${imgUrl})`}}
                                className='absolute inset-0 
                                    bg-cover bg-center'
                                data-swiper-parallax={'80%'}/>
                            <span className="block absolute inset-0 opacity-30 bg-black" aria-hidden="true"></span>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default About