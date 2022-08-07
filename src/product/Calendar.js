import React, { useState } from "react";
import style from "styled-components";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import ko from "date-fns/locale/ko";
import { Link } from "react-router-dom";

const CalendarSection = style.section`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #FFFFFF;
    border-radius: 30px 30px 0px 0px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    box-sizing: border-box;
    font-weight: 700;
`;
const CalendarBtn = style.div`
background: #DADADA;
border-radius: 5px;
padding: 13px 45px;
align-self: flex-end;
color: white;
`;

function Calendar({ item }) {
  console.log(item);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <CalendarSection>
      <div>대여 시작일을 선택해주세요</div>
      <span>대여가능한 날짜 쓰는게 좋은 거 같애</span>
      <DateRange
        editableDateInputs={false}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        minDate={new Date()} // 과거 날짜 disable
        maxDate={new Date(item.last_date)}
        locale={ko}
      />
      <Link
        to={`/detail${item.id}/result`}
        state={{
          borrow: item,
          borrower: {
            user: "수정하기",
            borrowDate: "2022-03",
            borrowEndDate: "2022-04",
          },
        }}
      >
        <CalendarBtn>바로</CalendarBtn>
      </Link>
    </CalendarSection>
  );
}

export default Calendar;
