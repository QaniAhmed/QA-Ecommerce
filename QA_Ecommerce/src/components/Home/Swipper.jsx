import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './Swipper.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function Swipper() {
  return (
    <div className="swiper-container">
      <Swiper
        // Configuration
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
  <div className="slide-content">
    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" alt="Latest Fashion Trends" />
    <div className="slide-overlay">
      <h2>Modern Apparel</h2>
      <p>Redefine your wardrobe with our curated seasonal collection</p>
      <button className="banner-btn">Explore</button>
    </div>
  </div>
</SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" alt="Sale 1" />
            <div className="slide-overlay">
              <h2>Summer Collection 2026</h2>
              <p>Get up to 50% off on all electronics</p>
              <button className="banner-btn">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
  <div className="slide-content">
    <img src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=2070&auto=format&fit=crop" alt="Premium Electronics Sale" />
    <div className="slide-overlay">
      <h2>Next-Gen Electronics</h2>
      <p>Upgrade your setup with exclusive deals on premium devices</p>
      <button className="banner-btn">Shop Now</button>
    </div>
  </div>
</SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" alt="Sale 2" />
            <div className="slide-overlay">
              <h2>New Arrivals</h2>
              <p>Check out the latest fashion trends</p>
              <button className="banner-btn">Explore</button>
            </div>
          </div>
        </SwiperSlide>




      </Swiper>
    </div>
  );
}

export default Swipper;