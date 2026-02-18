import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from "react";
import * as S from "./CommunityPostModal.style";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const CommunityPostModal = ({
  open,
  onClose,
  post,
  onClickDetail,
  onSubmitComment,

  meNickname, // "요리왕곰순"
  onEditComment, // (comment, nextText) => {}
  onDeleteComment, // (comment) => {}
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [commentText, setCommentText] = useState("");
  const [isCommentComposeOpen, setIsCommentComposeOpen] = useState(false);

  // ✅ 내 댓글 메뉴(⋮) 열려있는 댓글 key
  const [openMenuKey, setOpenMenuKey] = useState(null);

  // ✅ 인라인 수정 모드
  const [editingKey, setEditingKey] = useState(null);
  const [draftText, setDraftText] = useState("");

  const images = useMemo(() => post?.images ?? [], [post]);
  const comments = useMemo(() => post?.comments ?? [], [post]);

  const hasImages = images.length > 0;
  const safeIndex = clamp(activeIndex, 0, Math.max(0, images.length - 1));
  const currentImage = hasImages ? images[safeIndex] : "";

  const isMine = useCallback(
    (c) => {
      if (!meNickname) return false;
      return String(c?.nickname ?? "").trim() === String(meNickname).trim();
    },
    [meNickname],
  );

  const handlePrev = useCallback(() => {
    if (!hasImages) return;
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [hasImages, images.length]);

  const handleNext = useCallback(() => {
    if (!hasImages) return;
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [hasImages, images.length]);

  const resetComposer = useCallback(() => {
    setCommentText("");
    setIsCommentComposeOpen(false);
  }, []);

  const handleSend = useCallback(() => {
    const text = commentText.trim();
    if (!text) return;

    onSubmitComment?.(text);
    setCommentText("");
    setIsCommentComposeOpen(false);
  }, [commentText, onSubmitComment]);

  // ✅ 수정 시작
  const startEdit = useCallback((key, c) => {
    setEditingKey(key);
    setDraftText(String(c?.text ?? ""));
    setOpenMenuKey(null);
  }, []);

  // ✅ 수정 취소
  const cancelEdit = useCallback(() => {
    setEditingKey(null);
    setDraftText("");
  }, []);

  // ✅ 수정 저장
  const saveEdit = useCallback(
    (c) => {
      const next = draftText.trim();
      if (!next) return;
      onEditComment?.(c, next);
      setEditingKey(null);
      setDraftText("");
    },
    [draftText, onEditComment],
  );

  useEffect(() => {
    if (!open) return;

    setActiveIndex(0);
    setCommentText("");
    setIsCommentComposeOpen(false);
    setOpenMenuKey(null);
    setEditingKey(null);
    setDraftText("");
  }, [open, post?.id]); // post 바뀔 때도 초기화되게

  const [hoverKey, setHoverKey] = useState(null);

  // ✅ 최신 상태를 키다운 이벤트에서 쓰기 위해 ref로 보관
  const openMenuKeyRef = useRef(openMenuKey);
  const editingKeyRef = useRef(editingKey);

  useEffect(() => {
    openMenuKeyRef.current = openMenuKey;
  }, [openMenuKey]);

  useEffect(() => {
    editingKeyRef.current = editingKey;
  }, [editingKey]);

  // ✅ 2) 키보드 이벤트만 담당 (초기화 절대 금지)
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        if (editingKeyRef.current) {
          cancelEdit();
          return;
        }
        if (openMenuKeyRef.current) {
          setOpenMenuKey(null);
          return;
        }
        onClose?.();
      }
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") handleSend();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, handlePrev, handleNext, handleSend, cancelEdit]);

  // ✅ 🔥 메뉴(⋮)가 열려있을 때만: 바깥 클릭하면 닫기 (MenuBox 1초컷 해결)
  useEffect(() => {
    if (openMenuKey === null) return;

    const handleWindowClick = () => {
      setOpenMenuKey(null);
    };

    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [openMenuKey]);

  if (!open) return null;

  const count = commentText.length;

  return (
    <S.Backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <S.Modal
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* 상단 이미지 영역 */}
        <S.Hero>
          <S.CloseButton type="button" onClick={onClose} aria-label="닫기">
            <S.CloseIcon
              src={`${process.env.PUBLIC_URL}/assets/icons/close.svg`}
              alt="닫기"
            />
          </S.CloseButton>

          {hasImages ? (
            <S.ImageWrapper>
              {/* ✅ 배경: 같은 이미지 cover + blur */}
              <S.HeroBg src={currentImage} alt="" aria-hidden="true" />
              <S.HeroBgDim aria-hidden="true" />

              {/* ✅ 중앙 메인 이미지: contain */}
              <S.HeroMain>
                <S.HeroMainImg src={currentImage} alt="요리 인증 이미지" />
              </S.HeroMain>

              {images.length > 1 && (
                <S.NavControls>
                  <S.NavButtonLeft
                    disabled={images.length <= 1}
                    onClick={handlePrev}
                    type="button"
                  >
                    <S.NavIcon src="/assets/icons/left.svg" alt="이전" />
                  </S.NavButtonLeft>

                  <S.NavButtonRight
                    disabled={images.length <= 1}
                    onClick={handleNext}
                    type="button"
                  >
                    <S.NavIcon src="/assets/icons/right.svg" alt="다음" />
                  </S.NavButtonRight>
                </S.NavControls>
              )}

              {images.length > 1 && (
                <S.ImageIndex>
                  {safeIndex + 1} / {images.length}
                </S.ImageIndex>
              )}
            </S.ImageWrapper>
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
            <S.CommentCard>
              <S.CommentHeader>
                <S.CommentHeaderTop>
                  댓글 <b>{comments.length}</b>
                </S.CommentHeaderTop>
              </S.CommentHeader>

              <S.SectionDivider />

              {/* 댓글 리스트 */}
              <S.CommentScrollArea>
                {comments.length === 0 ? (
                  <S.EmptyComment>
                    아직 댓글이 없어요. 첫 댓글을 남겨보세요!
                  </S.EmptyComment>
                ) : (
                  comments.map((c, idx) => {
                    const mine = isMine(c);
                    const key = `${c.nickname}-${idx}`;
                    const isEditing = editingKey === key;

                    return (
                      <S.CommentItem key={key}>
                        {/* 닉네임 줄(오른쪽 끝에 메뉴) */}
                        <S.CommentTop>
                          <S.CommentLeft>
                            <S.CommentNickname>{c.nickname}</S.CommentNickname>

                            <S.CommentMeta>
                              <S.CommentTime>{c.time}</S.CommentTime>
                              {mine && <S.MineTag>나</S.MineTag>}
                            </S.CommentMeta>
                          </S.CommentLeft>

                          {/* 내 댓글만 ⋮ */}
                          {mine && (
                            <S.CommentMenuWrap
                              onClick={(e) => e.stopPropagation()}
                              onMouseDown={(e) => e.stopPropagation()}
                            >
                              <S.KebabButton
                                type="button"
                                aria-label="댓글 옵션"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (isEditing) return;

                                  setOpenMenuKey((prev) =>
                                    prev === key ? null : key,
                                  );
                                }}
                              >
                                <S.KebabDots />
                              </S.KebabButton>

                              {/* 메뉴: 위로 펼쳐지게 */}
                              {openMenuKey === key && (
                                <S.MenuBox
                                  $direction="up"
                                  onClick={(e) => e.stopPropagation()}
                                  onMouseDown={(e) => e.stopPropagation()}
                                >
                                  <S.MenuItem
                                    type="button"
                                    $primary
                                    onMouseEnter={() =>
                                      setHoverKey(key + "-edit")
                                    }
                                    onMouseLeave={() => setHoverKey(null)}
                                    onClick={() => startEdit(key, c)}
                                  >
                                    <S.MenuIcon
                                      src={
                                        hoverKey === key + "-edit"
                                          ? "/assets/icons/main_pencil.svg"
                                          : "/assets/icons/default_pencil.svg"
                                      }
                                      alt="수정"
                                    />
                                    수정
                                  </S.MenuItem>

                                  <S.MenuItem
                                    type="button"
                                    $danger
                                    onMouseEnter={() =>
                                      setHoverKey(key + "-del")
                                    }
                                    onMouseLeave={() => setHoverKey(null)}
                                    onClick={() => {
                                      setOpenMenuKey(null);
                                      onDeleteComment?.(c);
                                    }}
                                  >
                                    <S.MenuIcon
                                      src={
                                        hoverKey === key + "-del"
                                          ? "/assets/icons/main_trash.svg"
                                          : "/assets/icons/default_trash.svg"
                                      }
                                      alt="삭제"
                                    />
                                    삭제
                                  </S.MenuItem>
                                </S.MenuBox>
                              )}
                            </S.CommentMenuWrap>
                          )}
                        </S.CommentTop>

                        {/* 텍스트(수정모드면 인라인 편집 + 밑줄 primary) */}
                        <S.CommentTextWrap $editing={isEditing}>
                          {isEditing ? (
                            <S.EditTextarea
                              value={draftText}
                              autoFocus
                              onChange={(e) => setDraftText(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                  e.preventDefault();
                                  saveEdit(c);
                                }
                                if (e.key === "Escape") {
                                  e.preventDefault();
                                  cancelEdit();
                                }
                              }}
                              onClick={(e) => e.stopPropagation()}
                            />
                          ) : (
                            <S.CommentText>{c.text}</S.CommentText>
                          )}
                        </S.CommentTextWrap>

                        {/* 수정중일 때 우측에 작은 저장/취소 */}
                        {isEditing && (
                          <S.EditActionRow>
                            <S.EditActionButton
                              type="button"
                              onClick={cancelEdit}
                            >
                              취소
                            </S.EditActionButton>
                            <S.EditActionButton
                              type="button"
                              $primary
                              onClick={() => saveEdit(c)}
                              disabled={!draftText.trim()}
                            >
                              저장
                            </S.EditActionButton>
                          </S.EditActionRow>
                        )}
                      </S.CommentItem>
                    );
                  })
                )}
              </S.CommentScrollArea>

              {/* 입력 영역 */}
              <S.CommentComposer>
                <S.Textarea
                  value={commentText}
                  onFocus={() => setIsCommentComposeOpen(true)}
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
                <S.CounterText>{count} / 300</S.CounterText>
              </S.CounterRow>

              {/* 입력 드랍다운 용 취소/저장 */}
              {isCommentComposeOpen && (
                <S.ActionRow>
                  <S.ActionButton
                    type="button"
                    $variant="ghost"
                    onClick={resetComposer}
                  >
                    취소
                  </S.ActionButton>
                  <S.ActionButton
                    type="button"
                    $variant="primary"
                    onClick={handleSend}
                    disabled={count === 0}
                    $disabled={count === 0}
                  >
                    저장
                  </S.ActionButton>
                </S.ActionRow>
              )}
            </S.CommentCard>
          </S.Right>
        </S.Body>
      </S.Modal>
    </S.Backdrop>
  );
};

export default CommunityPostModal;
