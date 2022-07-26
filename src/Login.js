import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginWindow = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  overflow: hidden;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 30px;
`;
const LoginHello = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginBigText = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
`;
const LoginText = styled.p`
  font-size: 20px;
  margin: 0;
`;
const LoginInputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 476px;
`;
const LoginLabel = styled.label`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 30px;
`;
const LoginInput = styled.input`
  background: #f2f2f2;
  border-radius: 20px;
  height: 73px;
  border: none;
  outline: none;
  font-size: 20px;
  padding-left: 20px;
`;
const LoginBtn = styled.button`
  background: #0090ff;
  border-radius: 20px;
  height: 73px;
  border: none;
  color: white;
  font-weight: bold;
  width: 100%;
  margin-top: 70px;
`;
const LoginToMembership = styled.div`
  margin-top: 60px;
`;

const MemberShipBtn = styled.span`
  text-decoration: underline;
  padding-left: 15px;
  font-size: 20px;
`;
function Login({ setLogin }) {
  const [membership, setMemberShip] = useState(false);
  return (
    <LoginWindow>
      <LoginBox>
        <LoginHeader>
          <svg
            width="245"
            height="245"
            viewBox="0 0 245 245"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_194_194)">
              <rect
                x="70"
                y="70"
                width="105"
                height="105"
                rx="20"
                fill="white"
              />
            </g>
            <path
              d="M142.637 134.923C145.46 136.564 146.456 140.235 144.293 142.682C141.203 146.178 137.322 148.926 132.938 150.676C126.712 153.162 119.832 153.491 113.398 151.61C106.963 149.729 101.343 145.746 97.4361 140.299C93.529 134.851 91.5592 128.251 91.8412 121.553C92.1232 114.855 94.6407 108.444 98.992 103.344C103.343 98.2433 109.277 94.7476 115.848 93.4141C122.418 92.0806 129.245 92.9863 135.241 95.9866C139.461 98.0989 143.098 101.164 145.884 104.907C147.833 107.527 146.532 111.101 143.581 112.5C140.63 113.898 137.156 112.54 134.887 110.19C133.468 108.72 131.801 107.49 129.948 106.563C126.316 104.745 122.18 104.197 118.2 105.005C114.22 105.812 110.625 107.93 107.989 111.02C105.353 114.109 103.828 117.993 103.658 122.05C103.487 126.108 104.68 130.106 107.047 133.406C109.414 136.706 112.818 139.118 116.716 140.258C120.614 141.397 124.781 141.198 128.553 139.693C130.477 138.924 132.242 137.839 133.78 136.493C136.238 134.343 139.814 133.281 142.637 134.923Z"
              fill="url(#paint0_linear_194_194)"
            />
            <circle cx="150.5" cy="123.5" r="7.5" fill="#0090FF" />
            <defs>
              <filter
                id="filter0_d_194_194"
                x="0"
                y="0"
                width="245"
                height="245"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="35" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.371143 0 0 0 0 0.368957 0 0 0 0 0.368957 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_194_194"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_194_194"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_194_194"
                x1="91.8261"
                y1="123.641"
                x2="159.515"
                y2="121.776"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0090FF" />
                <stop offset="1" stopColor="#48D9D9" stopOpacity="0.23" />
              </linearGradient>
            </defs>
          </svg>
          <img
            alt="Clog"
            src="img/Clog.png"
            style={{
              width: "125px",
              height: "55px",
              position: "relative",
              left: "-45px",
            }}
          />
        </LoginHeader>

        {membership ? (
          <>
            <LoginInputForm>
              <LoginLabel htmlFor="newEmail">이메일</LoginLabel>
              <LoginInput
                id="newEmail"
                placeholder="이메일을 형식에 맞게 입력해주세요"
              />
              <LoginLabel htmlFor="newId">아이디</LoginLabel>
              <LoginInput id="newId" placeholder="아이디를 입력해주세요" />
              <LoginLabel htmlFor="newPassword">비밀번호</LoginLabel>
              <LoginInput
                id="newPassword"
                type="password"
                placeholder="6장 이상(영문, 숫자, 특수문자 조합)"
              />
              <LoginBtn
                onClick={() => {
                  setMemberShip(false);
                }}
              >
                회원가입
              </LoginBtn>
            </LoginInputForm>
            <LoginToMembership>
              <LoginText>
                이미 Clog 회원이신가요?
                <MemberShipBtn
                  onClick={() => {
                    setMemberShip(false);
                  }}
                >
                  로그인하기
                </MemberShipBtn>
              </LoginText>
            </LoginToMembership>
          </>
        ) : (
          <>
            <LoginHello>
              <LoginBigText>반갑습니다</LoginBigText>
              <LoginText>
                Clog와 함께 동아리를 효율적으로 운영해보세요
              </LoginText>
            </LoginHello>
            <LoginInputForm>
              <LoginLabel htmlFor="loginId">아이디</LoginLabel>
              <LoginInput id="loginId" />
              <LoginLabel htmlFor="loginPassword">비밀번호</LoginLabel>
              <LoginInput id="loginPassword" type="password" />
              <Link to={"/"} onClick={() => setLogin(true)}>
                <LoginBtn>로그인</LoginBtn>
              </Link>
            </LoginInputForm>
            <LoginToMembership>
              <LoginText>
                아직 Clog 회원이 아닌신가요?
                <MemberShipBtn
                  onClick={() => {
                    setMemberShip(true);
                  }}
                >
                  회원가입하기
                </MemberShipBtn>
              </LoginText>
            </LoginToMembership>
          </>
        )}
      </LoginBox>
    </LoginWindow>
  );
}

export default Login;
