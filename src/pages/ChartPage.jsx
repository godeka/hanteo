import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import firstImage from "../assets/ChartBanner/first.jpeg";
import secondImage from "../assets/ChartBanner/second.jpg";

import "./ChartPage.css";

const bannerItems = [
  {
    id: 0,
    image: firstImage,
    title: "[M COUNTDOWN] 10월 2주차 엠카 사전투표",
    period: "2025.03.20 10:00 - 2025.03.24 16:00",
  },
  {
    id: 1,
    image: secondImage,
    title: "[WhosPICK] 소풍 함께 가고 싶은 아이돌",
    period: "2025.03.18 11:00 - 2025.03.24 20:00",
  },
  {
    id: 2,
    image: "",
    title: "[Whosfan Cafe] SF9 MINI ALBUM [LOVE]",
    period: "2025.03.11 10:00 - 2025.03.31 18:00",
  },
];

export default function ChartPage() {
  return (
    <div>
      <Swiper modules={[Pagination]} pagination>
        {bannerItems.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="banner-item">
                <img src={item.image} />
                <div className="banner-item-content">
                  <div className="banner-item-title">{item.title}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
