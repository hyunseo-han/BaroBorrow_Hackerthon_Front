import React, { useState, useRef } from "react";
import styled from "styled-components";
import CommunityHeader from "./CommunityHeader";
import data from "./calendar.json";
import userdata from "./user.json";

const ScheduleBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 660px;
  justify-content: space-between;
`;
const ScheduleCase = styled.div`
  background: #f5f5f5;
  border-radius: 20px;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 45px;
`;
const DesText = styled.div`
  color: #7e7e7e;
`;
const ScheduleList = styled.ul`
  padding: 0 0 30px 45px;
  overflow: auto;
  height: 400px;
  margin: 30px 0;
`;
const ShContent = styled.li`
  list-style: disc;
  margin-right: 10px;
  border-radius: 10px;
  &::marker {
    color: #0090ff;
  }
  padding: 10px;
  &:first-child {
    padding-top: 0;
  }
`;
const ShContentDiv = styled.div`
  display: flex;
  align-items: center;
`;
const ShContentDate = styled.div`
  width: 33.3333%;
  text-align: center;
  font-size: 20px;
`;
const ShContentText = styled.div`
  width: 33.3333%;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
`;
const ScheduleAdd = styled.div`
  background: #f5f5f5;
  border-radius: 20px;
  height: 100px;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ShContentWriter = styled.div`
  width: 33.3333%;
  text-align: center;
  color: #0090ff;
  font-size: 20px;
`;
const ScheduleInput = styled.textarea`
  resize: none;
  height: 60px;
  background: none;
  border: none;
  outline: none;
`;
const ScheduleInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const InfoBox = styled.div`
  width: 101.25px;
  height: 30px;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 8px;
`;
const DeadLineInput = styled.input`
  all: unset;
`;
const Charge = styled.select`
  width: 101.25px;
  height: 30px;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 8px;
  border: none;
  padding-left: 10px;
`;
const Upload = styled.div`
  background: #0090ff;
  font-size: 10px;
  color: #ffffff;
  padding: 10px 12px;
  border-radius: 5px;
`;
const DeleteCheck = styled.input`
  width: 20px;
  height: 20px;
  &:checked {
    background: red;
  }
`;
const ContentBtn = styled.div`
  background: #0090ff;
  border-radius: 5px;
  padding: 2px;
  color: #ffffff;
  cursor: pointer;
  height: 18px;
  width: 18px;
`;
const SchedulePost = ({
  list,
  listRef,
  index,
  del,
  delId,
  setCorContent,
  modify,
  setModifyId,
  setModify,
  setShowEdit,
}) => {
  const [comBtn, setComBtn] = useState(false);
  return (
    <ShContent
      ref={(list) => (listRef.current[index] = list)}
      onClick={() => {
        if (modify) {
          for (
            let idx = 0;
            idx < listRef.current[index].parentElement.children.length;
            idx++
          ) {
            listRef.current[index].parentElement.children[
              idx
            ].lastChild.lastChild.click();
          }
          setModify(true);
          listRef.current[index].style.backgroundColor = "#f2f2f2";
          setCorContent(list.calendar_title);
          setModifyId(list.id);
          setComBtn(true);
        }
      }}
    >
      <ShContentDiv>
        <ShContentDate>{list.calendar_final}</ShContentDate>
        <ShContentText>{list.calendar_title}</ShContentText>
        <ShContentWriter>
          {list.calendar_damdang !== "담당없음" ? list.calendar_damdang : ""}
        </ShContentWriter>
        {del ? (
          <DeleteCheck
            type="checkbox"
            onClick={(event) => {
              delId[list.id] = event.target.checked;
            }}
          />
        ) : (
          ""
        )}
        <ContentBtn
          onClick={(event) => {
            event.stopPropagation();
            setComBtn(false);
            listRef.current[index].style.backgroundColor = "";
            setShowEdit(false);
            setModify(false);
            setCorContent("");
          }}
          style={{ display: comBtn ? "block" : "none" }}
        >
          완
        </ContentBtn>
      </ShContentDiv>
    </ShContent>
  );
};

function Schedule() {
  const td = new Date();
  const today = new Date(td.getTime() - td.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
  const [selectDay, setSelectDay] = useState(today);
  // head
  const listRef = useRef([]);
  // 수정
  const [showEdit, setShowEdit] = useState(false);
  const [modify, setModify] = useState(false);
  const [corContent, setCorContent] = useState("");
  const [modifyid, setModifyId] = useState("");
  // 삭제
  const [del, setDel] = useState(false);
  const [delId, setDelId] = useState({});
  // 날짜와 책임자
  const [corCharge, setCorCharge] = useState("");
  // api 연동때 수정할 부분
  const [saveData, setSaveData] = useState(data);
  return (
    <>
      <CommunityHeader
        titleName="일정"
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        setModify={setModify}
        saveData={saveData}
        setDel={setDel}
        del={del}
        delId={delId}
        setSaveData={setSaveData}
      />
      <ScheduleBox>
        <div>
          <ScheduleCase>
            <DesText>기한</DesText>
            <DesText>내용</DesText>
            <DesText>담당</DesText>
          </ScheduleCase>
          <ScheduleList className="scrollBar">
            {saveData.map((list, index) => (
              <SchedulePost
                list={list}
                key={list.id}
                listRef={listRef}
                index={index}
                setShowEdit={setShowEdit}
                del={del}
                delId={delId}
                modify={modify}
                setCorCharge={setCorCharge}
                setCorContent={setCorContent}
                setModifyId={setModifyId}
                setModify={setModify}
              />
            ))}
          </ScheduleList>
        </div>
        <ScheduleAdd>
          <ScheduleInput
            placeholder="내용을 입력해주세요"
            value={corContent}
            onChange={(event) => {
              setCorContent(event.target.value);
            }}
          />
          <ScheduleInfo>
            <InfoBox>
              <DeadLineInput
                id="deadline"
                type="date"
                value={selectDay}
                onChange={(event) => {
                  setSelectDay(event.target.value);
                }}
              />
            </InfoBox>
            <Charge
              onChange={(event) => {
                setCorCharge(event.target.value);
              }}
            >
              <option value={"담당없음"}>담당없음</option>
              {userdata.map((list) => (
                <option value={list.username} key={list.username}>
                  {list.username}
                </option>
              ))}
            </Charge>
            <Upload
              onClick={() => {
                saveData.map((list) => {
                  if (list.id === parseInt(modifyid) && modify) {
                    // api 연동때 수정할 부분
                    list.calendar_title = corContent;
                    list.calendar_damdang = corCharge;
                    list.calendar_final = selectDay;
                  }
                  setCorContent("");
                });
                if (modify === false) {
                  const td = new Date();
                  const today = new Date(
                    td.getTime() - td.getTimezoneOffset() * 60000
                  )
                    .toISOString()
                    .slice(0, 10);
                  const addData = {
                    // api 적용할 때 wirter랑 title, 고치기
                    id: Date.now(),
                    calendar_title: corContent,
                    calendar_damdang: corCharge,
                    calendar_final: selectDay,
                    calendar_created: today,
                  };
                  setSaveData([...saveData, addData]);
                }
              }}
            >
              {modify ? "수정" : "업로드"}
            </Upload>
          </ScheduleInfo>
        </ScheduleAdd>
      </ScheduleBox>
    </>
  );
}

export default Schedule;
