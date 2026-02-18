import React, { useId } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import * as S from "../../pages/reportandchallenge/style";

const BASE_IMG_URL = process.env.PUBLIC_URL + "/assets/images/main";

const CookingProofSwiper = ({
  title = "나의 요리 인증",
  items = [
    {
      id: 1,
      image: `${BASE_IMG_URL}/r_tab3_slide01.jpg`,
      name: "초간단한 한우 달달 토마토 스튜",
      rating: 4.8,
      xp: 360,
      likes: 80,
    },
    {
      id: 2,
      image: `${BASE_IMG_URL}/r_tab3_slide02.jpg`,
      name: "스윗 달콤한 콘앤치즈",
      rating: 4.9,
      xp: 430,
      likes: 80,
    },
    {
      id: 3,
      image: `${BASE_IMG_URL}/r_tab3_slide03.jpg`,
      name: "꾸덕한 버섯 크림 리조또",
      rating: 4.6,
      xp: 240,
      likes: 80,
    },
    {
      id: 4,
      image: `${BASE_IMG_URL}/r_tab3_slide04.jpg`,
      name: "매콤 쫀득한 치즈 떡볶이",
      rating: 4.6,
      xp: 240,
      likes: 80,
    },
    {
      id: 5,
      image: `${BASE_IMG_URL}/r_tab3_slide05.jpg`,
      name: "따뜻하게 먹는 치즈 에그인헬",
      rating: 4.6,
      xp: 240,
      likes: 80,
    },
    {
      id: 6,
      image: `${BASE_IMG_URL}/r_tab3_slide01.jpg`,
      name: "토마토 스튜",
      rating: 4.8,
      xp: 360,
      likes: 80,
    },
    {
      id: 7,
      image: `${BASE_IMG_URL}/r_tab3_slide02.jpg`,
      name: "콘앤치즈",
      rating: 4.9,
      xp: 430,
      likes: 80,
    },
    {
      id: 8,
      image: `${BASE_IMG_URL}/r_tab3_slide03.jpg`,
      name: "크림 리조또",
      rating: 4.6,
      xp: 240,
      likes: 80,
    },
  ],
  onClickItem, // 외부에서 받으면 사용
}) => {
  const navigate = useNavigate(); // 여기서 정의해야 함

  // onClickItem 없으면 기본 이동 로직 사용
  const handleClickItem = (item) => {
    const url = `/communitymain?postId=${item.id}`;

    // 새창으로 열기
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const uid = useId().replaceAll(":", "");
  const prevCls = `cook-prev-${uid}`;
  const nextCls = `cook-next-${uid}`;

  return (
    <S.CookSection>
      <S.CookInner>
        <S.CookHeader>
          <S.CookTitle>{title}</S.CookTitle>

          <S.CookNav>
            <S.CookNavBtn className={prevCls} type="button" aria-label="이전">
              ‹
            </S.CookNavBtn>
            <S.CookNavBtn className={nextCls} type="button" aria-label="다음">
              ›
            </S.CookNavBtn>
          </S.CookNav>
        </S.CookHeader>

        <S.CookSwiperWrap>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: `.${prevCls}`,
              nextEl: `.${nextCls}`,
            }}
            loop={true}
            autoplay={{
              delay: 3000, // 3초
              disableOnInteraction: false, // 드래그 후에도 계속 자동재생
              pauseOnMouseEnter: true, // hover 시 잠깐 멈춤
            }}
            speed={600} // 슬라이드 이동 속도
            spaceBetween={20}
            slidesPerView={5}
            breakpoints={{
              0: { slidesPerView: 1.3, spaceBetween: 14 },
              520: { slidesPerView: 2.2, spaceBetween: 16 },
              768: { slidesPerView: 3.2, spaceBetween: 18 },
              1024: { slidesPerView: 4.2, spaceBetween: 20 },
              1280: { slidesPerView: 5, spaceBetween: 20 },
            }}
          >
            {items.map((it) => (
              <SwiperSlide key={it.id} className="cook-slide">
                <S.CookCardBtn type="button" onClick={() => handleClickItem(it)}>
                  <S.CookThumb>
                    <S.CookImg src={it.image} alt={it.name} />

                    <S.CookLikeOverlay className="cook-like">
                      <S.CookHeart aria-hidden="true">❤</S.CookHeart>
                      <S.CookLikeCount>{it.likes}</S.CookLikeCount>
                    </S.CookLikeOverlay>
                  </S.CookThumb>

                  <S.CookName title={it.name}>{it.name}</S.CookName>

                  <S.CookMetaRow>
                    <S.CookBadge $tone="rating">
                      <S.CookStar aria-hidden="true">★</S.CookStar>
                      {it.rating}
                    </S.CookBadge>
                    <S.CookBadge $tone="xp">XP {it.xp}</S.CookBadge>
                  </S.CookMetaRow>
                </S.CookCardBtn>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.CookSwiperWrap>
      </S.CookInner>
    </S.CookSection>
  );
};

export default CookingProofSwiper;
