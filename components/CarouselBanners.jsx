import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import style from '@/css/CarouselHome.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default function CarouselHome() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={style.mySwiper}
      >
        <SwiperSlide>
          <Image layout="fill" src="/static/images/banner1.png" alt="Vercel Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image layout="fill" src="/static/images/banner2.png" alt="Vercel Logo" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
