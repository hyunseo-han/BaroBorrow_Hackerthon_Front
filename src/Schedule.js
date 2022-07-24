import React, { useState, useRef } from "react";
import styled from "styled-components";
import CommunityHeader from "./CommunityHeader";
import data from "./data.json";
import userdata from "./userdata.json";

const ScheduleBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 780px;
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
  padding: 30px 0 30px 45px;
`;
const ShContent = styled.li`
  list-style: disc;
  &::marker {
    color: #0090ff;
  }
  padding-bottom: 20px;
  &:last-child {
    padding: 0;
  }
`;
const ShContentDiv = styled.div`
  display: flex;
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
const SchedulePost = ({
  list,
  listRef,
  index,
  del,
  delId,
  setCorTitle,
  setCorContent,
  modify,
  setModifyId,
  setModify,
}) => {
  return (
    <ShContent
      ref={(list) => (listRef.current[index] = list)}
      onClick={() => {
        if (modify) {
          for (let idx = 0; idx < listRef.current.length; idx++) {
            listRef.current[idx].style.backgroundColor = "";
          }
          setModify(true);
          listRef.current[index].style.backgroundColor = "#f2f2f2";
          setCorTitle(list.title);
          setCorContent(list.content);
          setModifyId(list.id);
        }
      }}
    >
      <ShContentDiv>
        <ShContentDate>{list.created_data}</ShContentDate>
        <ShContentText>{list.content}</ShContentText>
        <ShContentWriter>{list.writer}</ShContentWriter>
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
  const [saveData, setSaveData] = useState(data);
  const listRef = useRef([]);
  // 수정
  const [showEdit, setShowEdit] = useState(false);
  const [modify, setModify] = useState(false);
  const [corTitle, setCorTitle] = useState("");
  const [corContent, setCorContent] = useState("");
  const [modifyid, setModifyId] = useState("");
  // 삭제
  const [del, setDel] = useState(false);
  const [delId, setDelId] = useState({});
  console.log(delId);
  console.log(corTitle, corContent);
  return (
    <>
      <CommunityHeader
        titleName="일정"
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        setModify={setModify}
        setCorTitle={setCorTitle}
        setCorContent={setCorContent}
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
          <ScheduleList>
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
                setCorTitle={setCorTitle}
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
            <Charge>
              {userdata.map((list) => (
                <option value={list.username} key={list.username}>
                  {list.username}
                </option>
              ))}
            </Charge>
            <Upload>업로드</Upload>
          </ScheduleInfo>
        </ScheduleAdd>
      </ScheduleBox>
    </>
  );
}

export default Schedule;
