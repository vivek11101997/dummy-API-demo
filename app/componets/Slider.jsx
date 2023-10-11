import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const photosData = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97",
    },
    {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      // pagination={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },

        375: {
          slidesPerView: 1,

          spaceBetween: 16,
        },

        420: {
          slidesPerView: 1,

          spaceBetween: 16,
        },

        767: {
          slidesPerView: 2,

          spaceBetween: 16,
        },
      }}
      className="mySwiper"
    >
      {photosData &&
        photosData.map((val, i) => (
          <SwiperSlide key={i}>
            <div className="card">
              <div className="img_wraper">
                <Image
                  src={val.thumbnailUrl}
                  height={200}
                  width={300}
                  alt="image"
                />
              </div>
              <p className="search_doctor">{val.title.substr(1, 25)}</p>
              <p className="doctor_description">{val.title}</p>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
