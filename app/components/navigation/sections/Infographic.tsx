import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videos = [
  { 
    src: "https://www.youtube.com/embed/zcgSfXLFFVA",
    id: "zcgSfXLFFVA", 
    title: "دليل الأمان والمعلومات الهامة", 
  },
  { 
    src: "https://www.youtube.com/embed/McBXpbRw8fg",
    id: "McBXpbRw8fg", 
    title: "نصائح وحماية البيانات", 
  },
];

export default function VideoSlider() {
  // Removed _swiperInstance since it was unused
  const [activeIndex, setActiveIndex] = useState(0);

  const stopAllVideos = () => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe) => {
      iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-transparent">
      {/* Video Titles */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-gray-100">{videos[activeIndex].title}</h2>
      </div>
      
      {/* Video Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={false}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet bg-gray-300 opacity-50',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-500 !opacity-100',
          }}
          loop={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            stopAllVideos();
          }}
          className="rounded-lg overflow-hidden"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="w-full h-[550px] flex justify-center items-center bg-transparent">
                <iframe
                  className="w-[80%] h-[450px] rounded-xl"
                  src={`${video.src}?enablejsapi=1&rel=0`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev !text-white !bg-gray-800/60 !w-12 !h-12 !rounded-full hover:!bg-gray-800 after:!text-lg" />
          <div className="swiper-button-next !text-white !bg-gray-800/60 !w-12 !h-12 !rounded-full hover:!bg-gray-800 after:!text-lg" />
          <div className="swiper-pagination !bottom-4" />
        </Swiper>
      </div>
    </div>
  );
}
