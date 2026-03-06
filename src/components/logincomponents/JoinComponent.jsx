import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import S from "./style";

const JoinComponent = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({ mode: "onChange" });

  //[] 바깥 ^는 문자열 처음을 의미
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  const join = async (member) => {
    const response = await fetch("http://localhost:10000/members/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });

    if (!response.ok) {
      throw new Error("회원가입 실패");
    }
    return response.json();
  };

  const joinMutation = useMutation({
    mutationFn: join,
    onSuccess: (res) => {
      // 성공 처리
      console.log(res);
    },
    onError: (error) => {
      // 에러시 처리
    },
  });

  const onSubmit = (formData) => {
    const { memberPasswordConfirm, ...member } = formData;
    // 데이터 요청(react query)
    joinMutation.mutate(member);
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>
          <p>아이디</p>
          <S.Input
            type="text"
            placeholder="이메일을 입력하세요."
            {...register("memberEmail", {
              required: true,
              pattern: {
                value: emailRegex,
              },
            })}
          />
          {errors?.memberEmail?.type === "required" && (
            <p>이메일을 입력해주세요</p>
          )}
          {errors?.memberEmail?.type === "pattern" && (
            <p>이메일 양식에 맞게 입력해주세요</p>
          )}
        </S.Label>

        <S.Label>
          <p>비밀번호</p>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력하세요."
            {...register("memberPassword", {
              required: true,
              pattern: {
                value: passwordRegex,
              },
            })}
          />
          {errors?.memberPassword?.type === "required" && (
            <p>비밀번호를 입력해주세요</p>
          )}
          {errors?.memberPassword?.type === "pattern" && (
            <p>
              소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.
            </p>
          )}
        </S.Label>

        <S.Label>
          <p>비밀번호 확인</p>
          <S.Input
            type="password"
            placeholder="비밀번호를 확인해주세요."
            {...register("memberPasswordConfirm", {
              required: true,
              validate: {
                matchPassword: (memberPasswordConfirm) => {
                  const { memberPassword } = getValues();
                  console.log(
                    memberPasswordConfirm,
                    memberPassword,
                    memberPassword === memberPasswordConfirm,
                  );
                  return memberPassword === memberPasswordConfirm;
                },
              },
            })}
          />
          {errors?.memberPasswordConfirm && <p>비밀번호를 확인해주세요</p>}
        </S.Label>

        <S.Label>
          <p>이름</p>
          <S.Input
            type="text"
            placeholder="이름을 입력하세요"
            {...register("memberName", {
              required: true,
            })}
          />
          {errors?.memberName && <p>이름을 입력하세요</p>}
        </S.Label>
        <S.Button disabled={isSubmitting}>회원가입</S.Button>
      </S.Form>
    </>
  );
};

export default JoinComponent;
