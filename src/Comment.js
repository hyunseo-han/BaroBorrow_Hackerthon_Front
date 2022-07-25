import React, { useState } from "react";
import userdata from "./comment.json";
import styled from "styled-components";
const CommunityTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 16px;
`;
const CommentBox = styled.div`
  padding-left: 50px;
  width: 50%;
  display: flex;
  height: 780px;
  flex-direction: column;
`;
const CommentCount = styled.span`
  font-size: 20px;
  color: #7e7e7e;
`;
const CommentList = styled.ul`
  height: 580px;
  overflow: auto;
  margin: 0 0 15px 0;
  padding: 0;
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
  margin-right: 12px;
`;

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
const Input = styled.input`
  all: unset;
  width: 70%;
`;
const Upload = styled.div`
  background: #0090ff;
  font-size: 10px;
  color: #ffffff;
  padding: 10px 12px;
  border-radius: 5px;
`;
const CommentDel = styled.div`
  cursor: pointer;
`;
const CommentPost = ({ list, saveUserData, setSaveUserData }) => {
  const today = new Date();
  const modifiedDate = new Date(list.created_date);
  const diff = Math.abs(today - modifiedDate);
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  return (
    <CommentContent>
      <CommentHeader>
        <CommentWriter>{list.author}</CommentWriter>
        <CommentDot>·</CommentDot>
        <CommentDiff>{diffDay ? `${diffDay}일전` : "오늘"}</CommentDiff>
        <CommentDel
          onClick={() => {
            setSaveUserData(
              saveUserData.filter((noChange) => noChange.id !== list.id)
            );
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.03125 3.59375H6.875C6.96094 3.59375 7.03125 3.52344 7.03125 3.4375V3.59375H12.9688V3.4375C12.9688 3.52344 13.0391 3.59375 13.125 3.59375H12.9688V5H14.375V3.4375C14.375 2.74805 13.8145 2.1875 13.125 2.1875H6.875C6.18555 2.1875 5.625 2.74805 5.625 3.4375V5H7.03125V3.59375ZM16.875 5H3.125C2.7793 5 2.5 5.2793 2.5 5.625V6.25C2.5 6.33594 2.57031 6.40625 2.65625 6.40625H3.83594L4.31836 16.6211C4.34961 17.2871 4.90039 17.8125 5.56641 17.8125H14.4336C15.1016 17.8125 15.6504 17.2891 15.6816 16.6211L16.1641 6.40625H17.3438C17.4297 6.40625 17.5 6.33594 17.5 6.25V5.625C17.5 5.2793 17.2207 5 16.875 5ZM14.2832 16.4062H5.7168L5.24414 6.40625H14.7559L14.2832 16.4062Z"
              fill="#FF2626"
            />
          </svg>
        </CommentDel>
      </CommentHeader>
      <CommentText>{list.content}</CommentText>
    </CommentContent>
  );
};
function Comment() {
  const [saveUserData, setSaveUserData] = useState(userdata);
  const [commentInput, setCommentInput] = useState("");
  return (
    <CommentBox>
      <CommunityTitle>
        댓글
        <CommentCount>({saveUserData.length})</CommentCount>
      </CommunityTitle>
      <CommentList className="scrollBar">
        {saveUserData.map((list, index) => (
          <CommentPost
            list={list}
            key={list.id}
            index={index}
            saveUserData={saveUserData}
            setSaveUserData={setSaveUserData}
          />
        ))}
      </CommentList>
      <CommentAdd>
        <CommentUser>나</CommentUser>
        <CommentUpload>
          <Input
            placeholder="내용을 입력해주세요"
            value={commentInput}
            onChange={(event) => {
              setCommentInput(event.target.value);
            }}
          />
          <Upload
            onClick={() => {
              const td = new Date();
              const today = new Date(
                td.getTime() - td.getTimezoneOffset() * 60000
              )
                .toISOString()
                .slice(0, 10);
              const addData = {
                id: Date.now(),
                author: "나",
                content: commentInput,
                created_date: today,
                post: "comment",
              };
              setSaveUserData([...saveUserData, addData]);
              setCommentInput("");
            }}
          >
            추가
          </Upload>
        </CommentUpload>
      </CommentAdd>
    </CommentBox>
  );
}

export default Comment;
