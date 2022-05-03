import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

function About() {
    return (
        <div id='about-section' className='w-screen h-screen'>
            <Swiper
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image layout='fill' objectFit='cover' alt='' src='/About/bg-2.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image layout='fill' objectFit='cover' alt='' src='/About/bg-1.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image layout='fill' objectFit='cover' alt='' src='/About/bg-3.jpg' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default About