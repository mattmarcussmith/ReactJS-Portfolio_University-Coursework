import React from 'react'
import "./testimonials.css"
import { Data } from "./Data"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
   <section className="testimonial container section">
          <h2 className="section__title">Former Colleagues. </h2>
    <span className="section__subtitle">Testimonials</span>

    <Swiper 
    pagination={true} 
    modules={[Pagination, Autoplay]} 
    className="testimonial__container mySwiper"
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    grabCursor={true}
    spaceBetween={24}
    breakpoints={{
      576: {
        slidesPerView: 2,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
    }}
 
    
    >
        {Data.map(({id, image, title, relation, description}) => {
           return (<SwiperSlide className="testimonial__card" key={id}>
                <img src={image} alt="" className="testimonial__img" />
                <h3 className="testimonial__name">{title}</h3>
                <p className="testimonial__relation">{relation}</p>
                <p className="testimonial__description">{description}</p>
            </SwiperSlide>
           )
        })}
    </Swiper>
   </section>
  )
}

export default Testimonials