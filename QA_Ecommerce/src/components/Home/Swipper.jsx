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
        {/* Slide 1 */}
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

        {/* Slide 2 */}
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

        {/* Slide 3 */}
        <SwiperSlide>
            <div className="slide-content">
                <div className="text-only-slide">
                    <h2>Flash Sale is Live!</h2>
                    <p>Only for the next 24 hours.</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Swipper;