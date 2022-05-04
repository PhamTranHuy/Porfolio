import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'swiper';
import Welcome from './Welcome/Welcome';
import Role from './Welcome/Role';

const background_imgs = ['/About/bg-1.jpg', '/About/bg-2.jpg', '/About/bg-3.jpg'];
const welcome_bottom_ratio = '45%';
function About() {
    return (
        <div id='about-section' className='relative w-screen h-screen'>
            <Welcome bottomRatio={welcome_bottom_ratio} />
            <Swiper
                modules={[Parallax]}
                slidesPerView={1}
                speed={1000}
                parallax={true}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    background_imgs.map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                            <div style={{backgroundImage: `url(${imgUrl})`}}
                                className='absolute inset-0 bg-cover bg-center'
                                data-swiper-parallax={'80%'}>
                                <Role bottomRatio={welcome_bottom_ratio}/>
                                <span className="block absolute inset-0 z-[1] opacity-30 bg-black" aria-hidden="true"></span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default About