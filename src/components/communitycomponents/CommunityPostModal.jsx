import React, { useEffect, useMemo, useState, useCallback } from "react";
import * as S from "./CommunityPostModal.style";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const CommunityPostModal = ({
  open,
  onClose,
  post,
  onClickDetail,
  onSubmitComment,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [commentText, setCommentText] = useState("");

  const images = useMemo(() => post?.images ?? [], [post]);
  const comments = useMemo(() => post?.comments ?? [], [post]);

  const hasImages = images.length > 0;
  const safeIndex = clamp(activeIndex, 0, Math.max(0, images.length - 1));
  const currentImage = hasImages ? images[safeIndex] : "";

  const handlePrev = useCallback(() => {
    if (!hasImages) return;
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [hasImages, images.length]);

  const handleNext = useCallback(() => {
    if (!hasImages) return;
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [hasImages, images.length]);

  const handleSend = useCallback(() => {
    const text = commentText.trim();
    if (!text) return;

    onSubmitComment?.(text);
    setCommentText("");
  }, [commentText, onSubmitComment]);

  useEffect(() => {
    if (!open) return;

    setActiveIndex(0);
    setCommentText("");

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") handleSend(); // Ctrl+Enter 전송
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, handlePrev, handleNext, handleSend]);

  if (!open) return null;

  const count = commentText.length;

  return (
    <S.Backdrop onClick={onClose} role="presentation">
      <S.Modal onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {/* 상단 이미지 영역 */}
        <S.Hero>
          <S.CloseButton type="button" onClick={onClose} aria-label="닫기">
            <S.CloseIcon
              src={`${process.env.PUBLIC_URL}/assets/icons/close.svg`}
              alt="닫기"
            />
          </S.CloseButton>

          {hasImages ? (
            <>
              <S.HeroImage src={currentImage} alt="요리 인증 이미지" />

              {images.length > 1 && (
                <>
                  <S.NavButtonLeft type="button" onClick={handlePrev} aria-label="이전 이미지">
                    <S.NavIcon
                      src={`${process.env.PUBLIC_URL}/assets/icons/left.svg`}
                      alt="이전"
                    />
                  </S.NavButtonLeft>

                  <S.NavButtonRight type="button" onClick={handleNext} aria-label="다음 이미지">
                    <S.NavIcon
                      src={`${process.env.PUBLIC_URL}/assets/icons/right.svg`}
                      alt="다음"
                    />
                  </S.NavButtonRight>
                </>
              )}

              {images.length > 1 && (
                <S.ImageIndex>
                  {safeIndex + 1} / {images.length}
                </S.ImageIndex>
              )}
            </>
          ) : (
            <S.HeroPlaceholder>이미지가 없습니다.</S.HeroPlaceholder>
          )}
        </S.Hero>

        {/* 하단 컨텐츠 영역 */}
        <S.Body>
          {/* 왼쪽 정보 */}
          <S.Left>
            <S.TopRow>
              <S.Nickname>{post?.author?.nickname ?? "익명"}</S.Nickname>

              <S.MetaRight>
                <S.LevelBadge>
                  <S.LevelIcon
                    src={`${process.env.PUBLIC_URL}/assets/icons/star.svg`}
                    alt="레벨"
                  />
                  <span>Lv.{post?.author?.level ?? 1}</span>
                </S.LevelBadge>

                <S.LikeBadge>
                  <S.HeartIcon
                    src={`${process.env.PUBLIC_URL}/assets/icons/heart.svg`}
                    alt="좋아요"
                  />
                  <span>{post?.likes ?? 0}</span>
                </S.LikeBadge>
              </S.MetaRight>
            </S.TopRow>

            <S.DateText>{post?.createdAt ?? ""}</S.DateText>

            <S.Title>{post?.recipeTitle ?? "제목"}</S.Title>
            <S.Desc>{post?.content ?? ""}</S.Desc>

            <S.DetailLink type="button" onClick={() => onClickDetail?.(post)}>
              자세히 보기
            </S.DetailLink>

            <S.SectionTitle>사용한 재료</S.SectionTitle>

            <S.ChipRow>
              {(post?.ingredients ?? []).map((ing) => (
                <S.Chip key={ing}>{ing}</S.Chip>
              ))}
            </S.ChipRow>

            <S.XpBox>
              재료 소진 후 획득 XP : <b>+{post?.xp ?? 0} XP</b>
            </S.XpBox>
          </S.Left>

          {/* 오른쪽 댓글 */}
          <S.Right>
            <S.CommentHeader>
              댓글 <b>{comments.length}</b>
            </S.CommentHeader>

            <S.CommentList>
              {comments.length === 0 ? (
                <S.EmptyComment>아직 댓글이 없어요. 첫 댓글을 남겨보세요!</S.EmptyComment>
              ) : (
                comments.map((c, idx) => (
                  <S.CommentItem key={`${c.nickname}-${idx}`}>
                    <S.CommentTop>
                      <S.CommentNickname>{c.nickname}</S.CommentNickname>
                      <S.CommentTime>{c.time}</S.CommentTime>
                    </S.CommentTop>
                    <S.CommentText>{c.text}</S.CommentText>
                  </S.CommentItem>
                ))
              )}
            </S.CommentList>

            <S.CommentComposer>
              <S.Textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value.slice(0, 300))}
                placeholder="댓글을 입력하세요(최대 300자)"
              />
              <S.SendButton
                type="button"
                onClick={handleSend}
                aria-label="댓글 전송"
                $disabled={count === 0}
                disabled={count === 0}
              >
                <S.SendIcon
                  src={`${process.env.PUBLIC_URL}/assets/icons/send.svg`}
                  alt="전송"
                />
              </S.SendButton>
            </S.CommentComposer>

            <S.CounterRow>
              <S.HelperText>Ctrl+Enter로 전송</S.HelperText>
              <S.CounterText>{count} / 300</S.CounterText>
            </S.CounterRow>
          </S.Right>
        </S.Body>
      </S.Modal>
    </S.Backdrop>
  );
};

export default CommunityPostModal;
