import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'swiper';

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
                <SwiperSlide>
                    <div className="absolute inset-0 
                        bg-cover bg-[url('/About/bg-2.jpg')]" 
                        data-swiper-parallax={'80%'}/>
                    <span class="block absolute inset-0 opacity-30 bg-dark" aria-hidden="true"></span>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="absolute inset-0 bg-cover bg-[url('/About/bg-1.jpg')]" data-swiper-parallax={'80%'}/>
                    <span class="block absolute inset-0 opacity-30 bg-dark" aria-hidden="true"></span>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="absolute inset-0 bg-cover bg-[url('/About/bg-3.jpg')]" data-swiper-parallax={'80%'}/>
                    <span class="block absolute inset-0 opacity-30 bg-dark" aria-hidden="true"></span>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default About