import React from "react";
import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const InputText = styled.input`
  all: unset;
  position: relative;
  width: 327px;
  height: 48px;
  top: 24px;

  background: rgba(246, 246, 246, 1);
  border-radius: 5px;

  text-indent: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  overflow: hidden;
  color: rgba(136, 136, 136, 1);
`;

const EditDiv = styled.div`
  position: relative;
  top: 120px;

  margin-bottom: 24px;
`;

const TextDiv = styled.div`
  /* font-family: "Open Sans"; */
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: rgba(136, 136, 136, 1);
`;

const EditButton = styled.button`
  position: relative;
  width: 327px;
  height: 48px;

  margin-top: 145px;
  background: rgba(86, 174, 223, 1);
  border-radius: 5px;
  border: none;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
  text-align: center;

  color: #ffffff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const ProfileEdit = () => {
  const [nickname, setnickname] = useState("");
  const [location, setLocation] = useState("");

  const onNameHandler = (event) => {
    setnickname(event.currentTarget.value);
  };

  const onLocationHandler = (event) => {
    setLocation(event.currentTarget.value);
  };

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    [nickname, location]
  );

  return (
    <>
      <EditDiv>
        <TextDiv>닉네임</TextDiv>
        <label htmlFor="input_nickname"></label>
        <InputText
          type="text"
          name="input_nickname"
          placeholder="닉네임"
          value={nickname}
          onChange={onNameHandler}
        />
      </EditDiv>
      <br />
      <br />
      <EditDiv>
        {/* 일단 일반 입력으로 받고 우편번호 api 필요하다고 하면 추가하기  */}
        <TextDiv>활동 지역</TextDiv>
        <label htmlFor="input_location"></label>
        <InputText
          type="text"
          name="input_location"
          placeholder="서울시 성북구"
          value={location}
          onChange={onLocationHandler}
        />
      </EditDiv>
      <div>
        <EditButton type="submit" onSubmit={onSubmit}>
          <StyledLink to="/Main" style={{ color: "white" }}>
            {/* 수정 반영된 마이페이지로 이동으로 수정하기 */}
            {nickname.length < 1 && location.length < 1 ? (
              <div>수정하기</div>
            ) : (
              <div>수정완료</div>
            )}
          </StyledLink>
        </EditButton>
      </div>
    </>
  );
};

export default ProfileEdit;
