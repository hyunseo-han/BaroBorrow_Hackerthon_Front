import React, { useState } from "react";
import style from "styled-components";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import ko from "date-fns/locale/ko";
import { Link } from "react-router-dom";
import moment from "moment";

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
    // overflow: hidden;
`;
const CalendarBtn = style.div`
background: #56AEDF;
border-radius: 5px;
padding: 13px 45px;
align-self: flex-end;
color: white;
margin-top: 20px;
`;

function Calendar({ item, ban }) {
  let compare = new Date();
  if (compare <= new Date(item.start_date)) {
    compare = new Date(item.start_date);
  }
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      color: "#56AEDF",
    },
  ]);
  const start = moment(state[0].startDate).format("YYYY-MM-DD");
  const end = moment(state[0].endDate).format("YYYY-MM-DD");
  const diffMonth = moment(item.last_date).diff(item.start_date, "months");
  return (
    <CalendarSection>
      <div>
        <div>
          {item.start_date}
          {item.last_date}
        </div>
        <div>
          대여 시작일:{start !== null ? start : "대여 시작일을 선택해주세요"}
        </div>
        <div>
          대여 마지막일:{end !== null ? end : "대여 마지막일을 선택해주세요"}
        </div>
      </div>
      <DateRange
        editableDateInputs={false}
        onChange={(item) => setState([item.selection])}
        minDate={compare} // 과거 날짜 disable
        maxDate={new Date(item.last_date)}
        locale={ko}
        showDateDisplay={false}
        disabledDates={ban} // 빌리는 거 금지 날짜
        color={"#aeb9bf"}
        showMonthAndYearPickers={false}
        ranges={state}
        scroll={{ enabled: true }}
      />
      <Link
        to={`/detail${item.id}/result`}
        state={{
          borrow: item,
          borrower: {
            user: "수정하기",
            borrowDate: start,
            borrowEndDate: end,
          },
        }}
      >
        <CalendarBtn>바로</CalendarBtn>
      </Link>
    </CalendarSection>
  );
}

export default Calendar;
