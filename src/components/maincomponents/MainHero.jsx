import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css";

import * as S from "../../pages/main/style";

const TOTAL_SLIDES = 3;

const slides = [
  {
    id: 1,
    title: "냉장고를 비우는\n가장 재밌는 방법",
    desc:
      "냉장고 속 재료만 넣으면\n" +
      "그 재료로 바로 만들 수 있는 요리를 추천해주고\n" +
      "요리를 완성하면 레벨업되는 요리 게임 플랫폼입니다.",
    cta: "내 냉장고를 채워볼까요?",
    bg: `${process.env.PUBLIC_URL}/assets/images/main/visual01.jpg`,
  },
  {
    id: 2,
    title: "냉장고 재료로\n바로 만드는 요리 추천",
    desc:
      "냉장고 속 재료를 입력하면\n" +
      "만들 수 있는 요리를 우선순위로 추천해요.\n" +
      "재료 낭비 없이 맛있게 즐겨요!",
    cta: "추천 요리 보러가기",
    bg: `${process.env.PUBLIC_URL}/assets/images/main/visual02.jpg`,
  },
  {
    id: 3,
    title: "요리 인증하고\n레벨업 도전!",
    desc:
      "요리를 만들고 사진으로 인증하면\n" +
      "XP가 쌓이고 뱃지와 레벨이 올라가요.\n" +
      "게임처럼 즐기며 성장해요!",
    cta: "인증하러 가기",
    bg: `${process.env.PUBLIC_URL}/assets/images/main/visual03.jpg`,
  },
];

const MainHero = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);
  const [current, setCurrent] = useState(1);

  const handleToggleAutoplay = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (isPaused) {
      swiper.autoplay?.start();
      setIsPaused(false);
    } else {
      swiper.autoplay?.stop();
      setIsPaused(true);
    }
  };

  const handlePrev = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    swiper.slidePrev();
  };

  const handleNext = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    swiper.slideNext();
  };

  return (
    <S.HeroWrapper>
      {/* 이전 버튼 */}
      <S.HeroArrowButton
        ref={prevRef}
        className="left"
        aria-label="이전 슬라이드"
        type="button"
        onClick={handlePrev}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/main/ico_arrow_left.png`}
          alt=""
          aria-hidden="true"
        />
      </S.HeroArrowButton>

      {/* 다음 버튼 */}
      <S.HeroArrowButton
        ref={nextRef}
        className="right"
        aria-label="다음 슬라이드"
        type="button"
        onClick={handleNext}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/main/ico_arrow_right.png`}
          alt=""
          aria-hidden="true"
        />
      </S.HeroArrowButton>

      {/* 하단 컨트롤바 */}
      <S.HeroControlBar>
        <S.ControlBtn
          type="button"
          className={`pause ${isPaused ? "is-play" : ""}`}
          aria-label={isPaused ? "자동 재생" : "자동 정지"}
          onClick={handleToggleAutoplay}
        />
        <S.ControlCount>
          {current} / {TOTAL_SLIDES}
        </S.ControlCount>

        <S.ControlBtn
          type="button"
          className="next"
          aria-label="다음 슬라이드"
          onClick={handleNext}
        >
          ›
        </S.ControlBtn>
      </S.HeroControlBar>

      <Swiper
        modules={[Autoplay, A11y]}
        slidesPerView={1}
        speed={650}
        loop
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setCurrent(swiper.realIndex + 1);
        }}
        onSlideChange={(swiper) => {
          setCurrent(swiper.realIndex + 1);
        }}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <S.HeroSlide>
              <S.HeroBlurBg $bg={s.bg} />
              <S.HeroImage $bg={s.bg} />
              <S.HeroContent>
                <S.HeroTitle>
                  {s.title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </S.HeroTitle>

                <S.HeroDesc>
                  {s.desc.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </S.HeroDesc>

                <S.HeroButton>
                  {s.cta}
                  <span aria-hidden="true">›</span>
                </S.HeroButton>
              </S.HeroContent>
            </S.HeroSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.HeroWrapper>
  );
};

export default MainHero;
