import React from 'react'
import './Products.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'


export const Products = () => {
  
  return (  
    <div id='produtos' className='container-brand'>
      <div className='flexColStart header-brand'>
        <h3> PRODUTOS </h3>
      </div>
      <div className='slide-brand'>
        <Swiper {...sliderSettings}>
        <SliderButtons/>
          {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className='flexColStart r-card'>
                  <img src={card.image} alt='home' style={{ width: '250px', height: '250px' }} />
                  <span className="primaryTextText">{card.name}</span>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className='swiper-brand'>
      </div>
    </div>
  )
}

export default Products

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className='r-button'>
        <button onClick={()=> swiper.slidePrev()}>&lt;</button>
        <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
}
