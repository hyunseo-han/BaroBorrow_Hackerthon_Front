import React from "react";
import styled from "styled-components";
import InfoBar from "./InfoBar";
const OwnerContainer = styled.div`
  color: #666666;
  font-weight: 700;
  max-width: 900px;
  margin: 52px auto 70px;
`;
const OwnerHead = styled.div`
  padding: 24px 12px 0;
`;
const OwnerHeadDes = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
  color: #888888;
`;
const OwnerHeadTitle = styled.div`
  padding-bottom: 10px;
`;

const OwnerInfoBox = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #d9d9d9;
`;

const ownerex = [
  { title: "1.약속한 날짜에 대여가 잘 이루어졌나요?", per: 43 },
  { title: "2.설정한 위치에서 대여가 잘 이루어졌나요?", per: 80 },
  { title: "3.물건의 상태는 대여자가 설정한 것과 일치했나요?", per: 7 },
  { title: "4.구성품이 빠짐없이 잘 있었나요?", per: 100 },
  { title: "5.대여비와 보증금은 적절했나요?", per: 0 },
];
function ProductOwner() {
  return (
    <OwnerContainer>
      <OwnerHead>
        <OwnerHeadTitle>대여자 정보</OwnerHeadTitle>
        <OwnerHeadDes>(실제 대여자들의 후기 평균입니다.)</OwnerHeadDes>
      </OwnerHead>
      {ownerex.map((li, Index) => (
        <OwnerInfoBox key={Index}>
          <InfoBar title={li.title} percentage={li.per} />
        </OwnerInfoBox>
      ))}
    </OwnerContainer>
  );
}

export default ProductOwner;
