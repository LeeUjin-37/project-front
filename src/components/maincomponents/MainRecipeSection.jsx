import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";

import * as S from "../../pages/main/style";

const TABS = [
  { key: "all", label: "전체" },
  { key: "kr", label: "한식" },
  { key: "ws", label: "양식" },
  { key: "ch", label: "중식" },
  { key: "salad", label: "샐러드" },
];

const panelMotion = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const MainRecipeSection = ({ title, data }) => {
  const [active, setActive] = useState("all");

  const list = useMemo(() => {
    if (active === "all") {
      const merged = [...data.kr, ...data.ws, ...data.ch, ...data.salad];
      return Array.from(new Map(merged.map((x) => [x.recipeId, x])).values());
    }
    return data[active] ?? [];
  }, [active, data]);

  const navigate = useNavigate();

  // 스와이프(드래그) 중 클릭 오작동 방지
  const isDraggingRef = useRef(false);

  const goDetail = (recipeId) => {
    if (!recipeId) return;
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <S.RecipeWrapper>
      <S.RecipeInner>
        <S.RecipeTitle>{title}</S.RecipeTitle>

        <S.RecipeTabs role="tablist" aria-label="레시피 카테고리">
          {TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <S.RecipeTab
                key={t.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={isActive ? "is-active" : ""}
                onClick={() => setActive(t.key)}
                as={motion.button}
                whileTap={{ scale: 0.98 }}
              >
                {t.label}
              </S.RecipeTab>
            );
          })}
        </S.RecipeTabs>

        <S.RecipePanel>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={panelMotion}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Swiper
                modules={[A11y]}
                spaceBetween={30}
                slidesPerView={5}
                slidesPerGroup={1}
                grabCursor
                speed={520}
                onSliderMove={() => {
                  isDraggingRef.current = true;
                }}
                onTouchEnd={() => {
                  setTimeout(() => (isDraggingRef.current = false), 0);
                }}
                onTransitionEnd={() => {
                  isDraggingRef.current = false;
                }}
              >
                {list.map((r) => (
                  <SwiperSlide key={r.recipeId}>
                    <S.RecipeCard
                      as={motion.article}
                      whileHover={{ y: -2 }}
                      role="link"
                      tabIndex={0}
                      onClick={() => {
                        if (isDraggingRef.current) return;
                        goDetail(r.recipeId);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          goDetail(r.recipeId);
                      }}
                    >
                      <S.RecipeThumb>
                        <img src={r.img} alt={r.title} />
                      </S.RecipeThumb>

                      <S.RecipeBody>
                        <S.RecipeName title={r.title}>{r.title}</S.RecipeName>

                        <S.BadgeRow>
                          <S.Badge className="star">
                            <i aria-hidden="true">★</i>
                            {r.rating}
                          </S.Badge>
                          <S.Badge className="xp">XP {r.xp}</S.Badge>
                        </S.BadgeRow>

                        <S.MetaRow>
                          <S.MetaChip>조리시간&nbsp;|&nbsp;{r.time}</S.MetaChip>
                          <S.MetaChip>
                            부족한 재료&nbsp;|&nbsp;{r.ing}
                          </S.MetaChip>
                        </S.MetaRow>
                      </S.RecipeBody>
                    </S.RecipeCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>
        </S.RecipePanel>
      </S.RecipeInner>
    </S.RecipeWrapper>
  );
};

export default MainRecipeSection;
