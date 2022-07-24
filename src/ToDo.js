import React, { useState, useRef } from "react";
import data from "./data.json";
import userdata from "./userdata.json";
import styled from "styled-components";
import CommunityHeader from "./CommunityHeader";
import Comment from "./Comment";

const TDAndCmt = styled.div`
  display: flex;
`;
const ToDoBox = styled.div`
  padding-right: 50px;
  border-right: 1px solid #d6d6d6;
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 780px;
`;
const ToDoList = styled.ul`
  height: 625px;
`;
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
const TDText = styled.div`
  width: 450px;
`;
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

const ContentBtn = styled.div`
  background: #0090ff;
  border-radius: 5px;
  padding: 7px 9px;
  color: #ffffff;
  cursor: pointer;
`;
const ToDoPost = ({
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
  const [check, setCheck] = useState(false);
  const [comBtn, setComBtn] = useState(false);
  return (
    <TDContent
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
            ].lastChild.click();
          }
          setModify(true);
          setModifyId(list.id);
          setCorContent(list.content);
          setComBtn(true);
        }
        if (del) {
          if (listRef.current[index].style.boxShadow) {
            listRef.current[index].style.boxShadow = "";
            delId[list.id] = false;
          } else {
            listRef.current[index].style.boxShadow =
              "0px 0px 10px rgba(0, 144, 255, 0.52)";
            delId[list.id] = true;
          }
        }
      }}
    >
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
        {list.writer ? `${list.writer}-` : ""}
        {list.content}
      </TDText>
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
        완료
      </ContentBtn>
    </TDContent>
  );
};

function ToDo() {
  // head
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
  // 책임자
  const [corCharge, setCorCharge] = useState("");
  // api 연동때 수정할 부분
  const [saveData, setSaveData] = useState(data);
  return (
    <>
      <TDAndCmt>
        <ToDoBox>
          <CommunityHeader
            titleName="할일"
            showEdit={showEdit}
            setShowEdit={setShowEdit}
            setModify={setModify}
            saveData={saveData}
            setDel={setDel}
            del={del}
            delId={delId}
            setSaveData={setSaveData}
          />
          <ToDoList>
            {saveData.map((list, index) => (
              <ToDoPost
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
          </ToDoList>
          <ToDoAdd>
            <Input
              placeholder="내용을 입력해주세요"
              value={corContent}
              onChange={(event) => {
                setCorContent(event.target.value);
              }}
            />
            <ToDoInfo>
              <Charge
                onChange={(event) => {
                  setCorCharge(event.target.value);
                }}
              >
                <option value={"담당"} defaultValue>
                  담당
                </option>
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
                      list.content = corContent;
                      list.writer = corCharge;
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
                      title: "",
                      content: corContent,
                      writer: corCharge,
                      created_data: today,
                      modified_data: today,
                      user_id: 2466,
                    };
                    setSaveData([...saveData, addData]);
                  }
                }}
              >
                {modify ? "수정" : "업로드"}
              </Upload>
            </ToDoInfo>
          </ToDoAdd>
        </ToDoBox>
        <Comment />
      </TDAndCmt>
    </>
  );
}

export default ToDo;
