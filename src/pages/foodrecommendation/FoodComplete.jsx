import React, { useRef, useState, useEffect } from "react";
import S from "./style";
import usePostStore from "../../store/postStore";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const FoodComplete = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [review, setReview] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [animatedOrange, setAnimatedOrange] = useState(0);
  const [animatedBlue, setAnimatedBlue] = useState(0);
  const xpRef = useRef(null);
  const { addPost } = usePostStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const toggleItem = (index) => {
    setSelectedItems((prev) =>
      prev.includes(index) ? prev.filter((v) => v !== index) : [...prev, index],
    );
  };

  // 파일 선택 핸들러
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      alert("JPG 또는 PNG 파일만 업로드 가능합니다.");
      return;
    }

    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const ingredientList = [
    "밥 1공기",
    "김치",
    "고춧가루",
    "대파",
    "마늘",
    "돼지고기",
    "참치",
    "두부",
    "양파",
    "고추장",
    "간장",
    "소금",
    "후추",
    "물",
    "멸치육수",
    "파슬리",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedOrange(20);
          setAnimatedBlue(90);
          observer.disconnect(); // 한 번만 실행
        }
      },
      {
        threshold: 0.4, // 40% 보이면 실행
      },
    );

    if (xpRef.current) {
      observer.observe(xpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 완료 버튼 클릭
  const handleSubmit = () => {
    if (!previewImage) {
      alert("사진을 업로드해주세요.");
      return;
    }

    if (!review.trim()) {
      alert("후기를 작성해주세요.");
      return;
    }

    const selectedIngredientNames = selectedItems.map(
      (index) => ingredientList[index],
    );

    const newPost = {
      id: Date.now(),

      recipeTitle: "얼큰한 김치찌개", // 변경
      content: review,

      images: [previewImage], // 배열로 변경

      ingredients: selectedIngredientNames,

      author: {
        // 객체로 통일
        id: user?.id || 1,
        nickname: user?.nickname || "요리왕곰순",
        level: user?.level || 1,
      },

      createdAt: new Date().toLocaleDateString(),
      likes: 0,
      xp: selectedIngredientNames.length * 10, // 선택사항
      comments: [],
    };

 addPost(newPost);

alert("커뮤니티에 업로드되었습니다!");

// 초기화
setReview("");
setPreviewImage(null);
setSelectedItems([]);

// 내 게시글 페이지로 이동
navigate("/myposts"); // ← 경로는 당신 프로젝트에 맞게 수정
  };

  return (
    <S.FCPage>
      <S.FCHero>
        <S.FCHeroImage src="/assets/images/kimchi_soup.png" alt="요리 이미지" />
        <S.FCHeroOverlay>
          <S.FCHeroInner>
            <S.FCTitle>얼큰한 김치찌개</S.FCTitle>
            <S.FCSubText>축하합니다! 요리를 완성하셨네요~!</S.FCSubText>
          </S.FCHeroInner>
        </S.FCHeroOverlay>
      </S.FCHero>

      <S.FCWrapper>
        <S.FCContent>
          {/* 사진 업로드 */}
          <S.FCSection>
            <S.FCSectionTitleRow>
              <S.FCSectionIcon src="/assets/icons/add-web.png" />
              <S.FCSectionHeading>완성 사진 업로드</S.FCSectionHeading>
            </S.FCSectionTitleRow>

            <S.FCUploadBox onClick={() => fileInputRef.current.click()}>
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <>
                  클릭하여 사진을 업로드 하세요.
                  <br />
                  JPG, PNG 파일 가능
                </>
              )}
            </S.FCUploadBox>

            <input
              type="file"
              accept="image/jpeg, image/png"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </S.FCSection>

          {/* 후기 */}
          <S.FCSection>
            <S.FCSectionTitleRow>
              <S.FCSectionIcon src="/assets/icons/comment-one.png" />
              <S.FCSectionHeading>요리후기</S.FCSectionHeading>
            </S.FCSectionTitleRow>

            <S.FCTextarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="요리를 만들어본 소감을 자유롭게 남겨주세요."
            />
          </S.FCSection>

          {/* 재료 체크 */}
          <S.FCSection>
            <S.FCSectionTitleRow>
              <S.FCSectionIcon src="/assets/icons/product.png" />
              <S.FCSectionHeading>사용한 재료 체크</S.FCSectionHeading>
            </S.FCSectionTitleRow>

            <S.FCIngredientBox>
              {Array.from({ length: 16 }).map((_, index) => {
                const isActive = selectedItems.includes(index);

                return (
                  <S.FCIngredientItem
                    key={index}
                    onClick={() => toggleItem(index)}
                  >
                    <S.FCCheckIcon
                      src={
                        isActive
                          ? "/assets/icons/thick_check_orange.png"
                          : "/assets/icons/thick_check_grey.png"
                      }
                      alt="check"
                    />
                    밥 1공기
                  </S.FCIngredientItem>
                );
              })}

              <S.FCSelectedCount>
                {selectedItems.length}개 재료 선택됨
              </S.FCSelectedCount>
            </S.FCIngredientBox>
          </S.FCSection>

          {/* ================= 획득한 XP ================= */}

          <S.FCSection>
            <S.FCSectionTitleRow>
              <S.FCSectionIcon src="/assets/icons/circle-double-up.png" />
              <S.FCSectionHeading>획득한 XP</S.FCSectionHeading>
            </S.FCSectionTitleRow>

            <S.FCXPBox ref={xpRef}>
              {/* 총 획득 XP */}
              <S.FCXPLabelRow>
                <S.FCXPLabel>총 획득 XP</S.FCXPLabel>
                <S.FCXPText>20 / 200XP</S.FCXPText>
              </S.FCXPLabelRow>

              <S.FCProgressBar>
                <S.FCProgressOrange value={animatedOrange} />
              </S.FCProgressBar>

              {/* 현재 레벨 */}
              <S.FCXPLabelRow>
                <S.FCXPLabel>현재 Lv. 12</S.FCXPLabel>
                <S.FCXPText>180 / 200XP</S.FCXPText>
              </S.FCXPLabelRow>

              <S.FCProgressBar>
                <S.FCProgressBlue value={animatedBlue} />
              </S.FCProgressBar>
            </S.FCXPBox>
          </S.FCSection>

          {/* 커뮤니티 공유 */}
          <S.FCSection>
            <S.FCSectionTitleRow>
              <S.FCSectionIcon src="/assets/icons/community.png" />
              <S.FCSectionHeading>커뮤니티 공유</S.FCSectionHeading>
            </S.FCSectionTitleRow>
            <S.FCShareBox>
              완성된 메뉴는 커뮤니티에 자동으로 업로드 됩니다. 다른 사용자들과
              함께 요리 경험을 공유하세요!
            </S.FCShareBox>
          </S.FCSection>

          {/* 완료 버튼 */}
          <S.FCCompleteButton onClick={handleSubmit}>
            완료 인증하기
          </S.FCCompleteButton>
        </S.FCContent>
      </S.FCWrapper>
    </S.FCPage>
  );
};

export default FoodComplete;
