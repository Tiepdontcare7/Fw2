import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Banner = () => {
  return (
    <div className='mb-[64px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div>
            <img className='w-full object-cover' src='/images/banner-v1.2.jpg' alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src='/images/BANNER-V1.5.jpg' alt='' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner
