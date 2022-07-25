import React, { useState, useRef } from "react";
import data from "./todo.json";
import styled from "styled-components";
import CommunityHeader from "./CommunityHeader";
import Comment from "./Comment";
const CommunityBox = styled.section`
  background: #ffffff;
  border-radius: 50px;
  height: 822px;
  padding: 50px;
  width: 70vw;
  position: relative;
  left: 20%;
  box-sizing: border-box;
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
  height: 730px;
`;
const ToDoList = styled.ul`
  height: 580px;
  overflow: auto;
  margin: 0 0 15px 0;
  padding: 0;
`;
const TDContent = styled.li`
  background: #f2f2f2;
  border-radius: 20px;
  height: 105px;
  display: flex;
  align-items: center;
  margin: 0 10px 20px 12px;
`;
const TDCheckBox = styled.input`
  position: relative;
  left: -15px;
  width: 25px;
  height: 25px;
`;
const TDText = styled.div`
  width: 80%;
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
  width: 35px;
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
  saveData,
}) => {
  const [todoCheck, setTodoCheck] = useState(list.Todo_comlete);
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
          setCorContent(list.Todo_content);
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
        checked={todoCheck}
        onChange={(event) => {
          setTodoCheck(event.target.checked);
          list.Todo_comlete = todoCheck;
        }}
      />
      <TDText
        style={{
          color: todoCheck ? "#7E7E7E" : "#000000",
          textDecoration: todoCheck ? "line-through" : "inherit",
        }}
      >
        {list.Todo_content}
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
  const [corContent, setCorContent] = useState("");
  const [modifyid, setModifyId] = useState("");
  // 삭제
  const [del, setDel] = useState(false);
  const [delId, setDelId] = useState({});
  // api 연동때 수정할 부분
  const [saveData, setSaveData] = useState(data);
  // 체크여부
  return (
    <CommunityBox>
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
          <ToDoList className="scrollBar">
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
                setCorContent={setCorContent}
                setModifyId={setModifyId}
                setModify={setModify}
                saveData={saveData}
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
              <Upload
                onClick={() => {
                  saveData.map((list) => {
                    if (list.id === parseInt(modifyid) && modify) {
                      // api 연동때 수정할 부분
                      list.Todo_content = corContent;
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
                      id: Date.now(),
                      Todo_content: corContent,
                      Todo_complete: false,
                      Todo_created_at: today,
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
    </CommunityBox>
  );
}

export default ToDo;
