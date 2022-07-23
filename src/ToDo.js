import React, { useState } from "react";
import data from "./data.json";
import userdata from "./userdata.json";
import styled from "styled-components";
const CommunityTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 16px;
`;
const TDAndCmt = styled.div`
  display: flex;
`;
const ToDoBox = styled.div`
  padding-right: 50px;
  border-right: 1px solid #d6d6d6;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 780px;
`;
const ToDoList = styled.ul``;
const TDContent = styled.li`
  background: #f2f2f2;
  border-radius: 20px;
  height: 105px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const TDCheckBox = styled.input`
  position: relative;
  left: -15px;
  width: 25px;
  height: 25px;
`;
const TDText = styled.div``;
const ToDoAdd = styled.div`
  background: #f2f2f2;
  border-radius: 20px;
  height: 105px;
  display: flex;
  padding: 0 25px;
`;
const ToDoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 30%;
`;
const Upload = styled.div`
  background: #0090ff;
  font-size: 10px;
  color: #ffffff;
  padding: 10px 12px;
  border-radius: 5px;
`;
const Charge = styled.select`
  width: 101.25px;
  height: 30px;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  border: none;
  padding-left: 10px;
`;
const Input = styled.input`
  all: unset;
  width: 70%;
`;
const CommentBox = styled.div`
  padding-left: 50px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  height: 780px;
  flex-direction: column;
`;
const CommentContent = styled.li`
  height: 105px;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  margin-bottom: 20px;
  background: #ffffff;
  display: flex;
  align-items: flex-start;
  padding: 10px 25px;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;
const CommentList = styled.ul``;
const CommentHeader = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 7px;
`;
const CommentWriter = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
const CommentDot = styled.div`
  margin: 0 8px;
`;
const CommentDiff = styled.div`
  font-size: 15px;
  color: #7e7e7e;
`;
const CommentText = styled.div`
  font-size: 18px;
  overflow: auto;
  min-height: 20px;
`;
const CommentAdd = styled.div`
  height: 105px;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;
const CommentUser = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 7px;
`;
const CommentUpload = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ToDoPost = ({ list }) => {
  const [check, setCheck] = useState(false);
  return (
    <TDContent>
      <TDCheckBox
        type="checkbox"
        onClick={(event) => {
          setCheck(event.target.checked);
        }}
      />
      <TDText
        style={{
          color: check ? "#7E7E7E" : "#000000",
          textDecoration: check ? "line-through" : "inherit",
        }}
      >
        {list.content}
      </TDText>
    </TDContent>
  );
};

const CommentPost = ({ list }) => {
  const today = new Date();
  const modifiedDate = new Date(list.modified_data);
  const diff = Math.abs(today - modifiedDate);
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  return (
    <CommentContent>
      <CommentHeader>
        <CommentWriter>{list.username}(이름)</CommentWriter>
        <CommentDot>·</CommentDot>
        <CommentDiff>{diffDay}일전</CommentDiff>
      </CommentHeader>
      <CommentText>{list.comment}(내용)</CommentText>
    </CommentContent>
  );
};

function ToDo() {
  return (
    <>
      <TDAndCmt>
        <ToDoBox>
          <CommunityTitle>할일</CommunityTitle>
          <ToDoList>
            {data.map((list) => (
              <ToDoPost list={list} key={list.id} />
            ))}
          </ToDoList>
          <ToDoAdd>
            <Input placeholder="내용을 입력해주세요" />
            <ToDoInfo>
              <Charge>
                {userdata.map((list) => (
                  <option value={list.username} key={list.username}>
                    {list.username}
                  </option>
                ))}
              </Charge>
              <Upload>업로드</Upload>
            </ToDoInfo>
          </ToDoAdd>
        </ToDoBox>
        <CommentBox>
          <CommunityTitle>댓글</CommunityTitle>
          <CommentList>
            {userdata.map((list) => (
              <CommentPost list={list} key={list.id} />
            ))}
          </CommentList>
          <CommentAdd>
            <CommentUser>나</CommentUser>
            <CommentUpload>
              <Input placeholder="내용을 입력해주세요" />
              <Upload>추가</Upload>
            </CommentUpload>
          </CommentAdd>
        </CommentBox>
      </TDAndCmt>
    </>
  );
}

export default ToDo;
