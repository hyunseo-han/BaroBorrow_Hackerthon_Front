import React from "react";
import styled from "styled-components";
import data from "./data.json";
const ScheduleBox = styled.div``;
const ScheduleCase = styled.div`
  background: #f5f5f5;
  border-radius: 20px;
  width: 1089px;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const DesText = styled.div`
  color: #7e7e7e;
`;
const ScheduleList = styled.ul``;
const ShContent = styled.li``;
function Schedule(props) {
  return (
    <ScheduleBox>
      <ScheduleCase>
        <DesText>기한</DesText>
        <DesText>내용</DesText>
        <DesText>담당</DesText>
      </ScheduleCase>
      <ScheduleList>
        {data.map((list) => (
          <ShContent>
            {list.created_data}
            {list.content}
            {list.writer}
          </ShContent>
        ))}
      </ScheduleList>
      <ScheduleCase></ScheduleCase>
    </ScheduleBox>
  );
}

export default Schedule;
