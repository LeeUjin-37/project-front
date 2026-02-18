import React from "react";
import * as S from "../../pages/main/style";

import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MainLiveReviewSection = ({
  subtitle = "프리고고러들이 작성한",
  title = "실시간 생생 리뷰",
  onMoreClick,
  onCardClick,
  reviews = [],
}) => {
  return (
    <S.LiveReviewWrapper>
      <S.LiveReviewInner>
        <S.LiveReviewHeader>
          <S.LiveReviewTitleBox>
            <S.LiveReviewSubTitle>{subtitle}</S.LiveReviewSubTitle>
            <S.LiveReviewTitle>{title}</S.LiveReviewTitle>
          </S.LiveReviewTitleBox>

          <S.LiveReviewMoreButton type="button" onClick={onMoreClick}>
            더 보기 <span aria-hidden="true">›</span>
          </S.LiveReviewMoreButton>
        </S.LiveReviewHeader>

        <S.LiveReviewSwiper
          slidesPerView={4}
          spaceBetween={24}
          loop={reviews.length > 4} // 4개 초과일 때만 loop
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          allowTouchMove
          simulateTouch
          grabCursor
          touchStartPreventDefault={false}
          nested
          observer
          observeParents
          onSwiper={(swiper) => console.log("swiper mounted", swiper)}
        >
          {reviews.map((r) => {
            const imgs = Array.isArray(r.images) ? r.images.slice(0, 3) : [];
            const countClass = `count-${Math.min(imgs.length || 0, 3)}`;

            return (
              <SwiperSlide key={r.id}>
                <S.LiveReviewCard
                  className={imgs.length > 0 ? "has-images" : "no-images"}
                  role="button"
                  tabIndex={0}
                  onClick={() => onCardClick?.(r)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onCardClick?.(r);
                  }}
                >
                  <S.LiveReviewCardTop>
                    <S.LiveReviewMetaLeft>
                      <S.LiveReviewAvatar>
                        <img
                          src={
                            r.avatarUrl ||
                            "../../assets/images/main/user_profile01.png"
                          }
                          alt={`${r.userName} 프로필`}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src =
                              "../../assets/images/main/user_profile01.png";
                          }}
                        />
                      </S.LiveReviewAvatar>

                      <S.MinWidth0>
                        <S.LiveReviewRecipeTitle title={r.recipeTitle}>
                          {r.recipeTitle}
                        </S.LiveReviewRecipeTitle>
                      </S.MinWidth0>
                    </S.LiveReviewMetaLeft>

                    <S.LiveReviewArrowBtn
                      type="button"
                      aria-label="리뷰 상세로 이동"
                    />
                  </S.LiveReviewCardTop>

                  <S.LiveReviewDivider />

                  <S.LiveReviewMetaLeft>
                    <S.LiveReviewUserName>{r.userName}</S.LiveReviewUserName>
                    <S.LiveReviewBadgeRow>
                      <S.LiveReviewBadge className="star">
                        <i aria-hidden="true">★</i> Lv.{r.level}
                      </S.LiveReviewBadge>
                      <S.LiveReviewBadge className="xp">
                        XP {r.xp}
                      </S.LiveReviewBadge>
                    </S.LiveReviewBadgeRow>
                  </S.LiveReviewMetaLeft>

                  <S.LiveReviewContent>{r.content}</S.LiveReviewContent>

                  {imgs.length > 0 && (
                    <S.LiveReviewImageRow className={countClass}>
                      {imgs.map((src, idx) => (
                        <S.LiveReviewThumb key={`${r.id}-${idx}`}>
                          <img src={src} alt="" loading="lazy" />
                        </S.LiveReviewThumb>
                      ))}
                    </S.LiveReviewImageRow>
                  )}
                </S.LiveReviewCard>
              </SwiperSlide>
            );
          })}
        </S.LiveReviewSwiper>
      </S.LiveReviewInner>
    </S.LiveReviewWrapper>
  );
};

export default MainLiveReviewSection;
