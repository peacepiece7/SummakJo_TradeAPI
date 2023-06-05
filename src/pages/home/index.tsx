import React, { useEffect } from 'react'
import styles from './index.module.scss'
import './swiper.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

// import Swiper from "swiper/react/swiper"
import 'swiper/css'

const sildeItems = [
  {
    name: 'poketmon',
    url: '/images/home/poketmon_slide.webp',
    icon: '/images/home/sv_icon.webp',
    title: '포켓몬스터 스칼렛 & 바이올렛'
  },
  {
    name: 'splatoon3',
    url: '/images/home/splatoon3_slide.webp',
    icon: '/images/home/splatoon3_icon.webp',
    title: '스플레툰 3'
  },
  {
    name: 'zelda edition',
    url: '/images/home/zelda_slide_edition.webp',
    icon: '/images/home/zelda_totk_hard_icon.webp',
    title: '젤다의 전설 티어스 오브 더 킹덤 에디션'
  },
  {
    name: 'zelda slide',
    url: '/images/home/zelda_slide.webp',
    icon: '/images/home/zelda_totk_icon.webp',
    title: '젤다의 전설 티어스 오브 더 킹덤'
  }
]

export default function Home() {
  function fillProgressiveBar함수() {
    // todo : nintendo처럼 hover시 slide change가 안 되려면 fillProgressiveBar함수 완성하기
    const fragment = document.querySelector('.image-slider__current')
    // https://stackoverflow.com/questions/74261179/how-to-create-swiper-slider-with-progress-bar
  }

  // useEffect(() => {ssss
  //   const swiperPageBulletCover = document.querySelector('.swiper-pagination-bullets') as HTMLDivElement
  //   swiperPageBulletCover.style.display = 'flex'
  //   const swp = document.querySelector('.swiper-pagination') as HTMLDivElement
  //   swp.style.position = 'relative'
  //   swp.style.bottom = '0'
  //   document.querySelectorAll('.swiper-pagination-bullets > span').forEach((el) => {
  //     return ((el as HTMLSpanElement).style.flexGrow = '1')
  //   })
  // }, [])

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          renderBullet(idx, className) {
            return `<div class="${className} ${styles.bullet}">
              <img src="${sildeItems[idx].icon}" alt="${sildeItems[idx].name}" />
              <p>${sildeItems[idx].title}</p>
            </div>`
          }
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={fillProgressiveBar함수}
        autoplay={{
          delay: 3000
        }}
        // watchSlidesProgress
        onProgress={(swiper, progress) => {
          // todo : nintendo처럼 hover시 slide change가 안 되려면 fillProgressiveBar함수 완성하기
          console.log(progress)
        }}
      >
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/poketmon_slide.webp" alt="poketmon" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/splatoon3_slide.webp" alt="splatoon3" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/zelda_slide_edition.webp" alt="zelda edition" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/zelda_slide.webp" alt="zelda slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
