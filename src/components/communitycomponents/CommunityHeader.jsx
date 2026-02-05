import React, { useEffect, useRef, useState } from "react";
import * as S from "../../pages/community/style";

// 기본 옵션(커뮤니티에서 사용)
const DEFAULT_SORT_OPTIONS = [
  { key: "latest", label: "최신순" },
  { key: "popular", label: "인기순" },
];

export const CommunityHeader = ({
  title = "요리 인증 커뮤니티",
  placeholder = "요리명, 코멘트, 재료로 검색...",
  showSort = true,
  sortOptions = DEFAULT_SORT_OPTIONS,
  defaultSortKey,
  onSearch, // ({ keyword, sort }) => void
  onSortChange, // (option) => void
}) => {
  const dropdownRef = useRef(null);

  const initialSort =
    sortOptions.find((o) => o.key === defaultSortKey) || sortOptions[0];

  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState(initialSort);
  const [keyword, setKeyword] = useState("");

  // 바깥 클릭하면 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSort(option);
    setIsOpen(false);
    onSortChange?.(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchKeyword = keyword.trim();

    // onSearch 없으면 기존처럼 임시 동작(디버그용)
    if (!onSearch) {
      alert("검색 실행됨!");
      console.log("검색!", { keyword: searchKeyword, sort: sort.key });
      return;
    }

    onSearch({ keyword: searchKeyword, sort: sort.key });
  };

  return (
    <S.HeaderSection>
      <S.Title>{title}</S.Title>

      <S.SearchRow>
        <S.SearchWrap as="form" onSubmit={handleSubmit}>
          <S.SearchInput
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder={placeholder}
          />
          <S.SearchButton type="submit" aria-label="검색">
            <S.SearchIcon src="/assets/icons/search.svg" alt="검색 아이콘" />
          </S.SearchButton>
        </S.SearchWrap>

        {showSort && (
          <S.DropdownWrap ref={dropdownRef}>
            <S.FilterButton
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <S.FilterIcon src="/assets/icons/filter.svg" alt="정렬 아이콘" />
              {sort.label}
            </S.FilterButton>

            {isOpen && (
              <S.DropdownMenu>
                {sortOptions.map((opt) => (
                  <S.DropdownItem
                    key={opt.key}
                    type="button"
                    $active={opt.key === sort.key}
                    onClick={() => handleSelect(opt)}
                  >
                    {opt.label}
                  </S.DropdownItem>
                ))}
              </S.DropdownMenu>
            )}
          </S.DropdownWrap>
        )}
      </S.SearchRow>
    </S.HeaderSection>
  );
};
