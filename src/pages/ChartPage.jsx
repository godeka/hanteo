import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Ranking from "../components/ranking/Ranking";

import firstImage from "../assets/banner/first.jpeg";
import secondImage from "../assets/banner/second.jpg";
import thirdImage from "../assets/banner/third.jpg";

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
    image: thirdImage,
    title: "[Whosfan Cafe] SF9 MINI ALBUM [LOVE]",
    period: "2025.03.11 10:00 - 2025.03.31 18:00",
  },
];

const rankingList = [
  { id: 0, title: "Unexpected", artist: "THE BOYZ" },
  { id: 1, title: "Fe304 : FORWARD", artist: "NMIXX" },
  { id: 2, title: "ZERO : FEVER EPILOGUE", artist: "ATEEZ" },
  { id: 3, title: "Only One Story", artist: "The Wind" },
  { id: 4, title: "PLEASURE : 스페셜 미니앨범", artist: "TREASURE" },
  { id: 5, title: "S", artist: "STAYC" },
];

export default function ChartPage() {
  return (
    <>
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
      <Ranking title="실시간" rankingList={rankingList} size="bottom" />
    </>
  );
}
