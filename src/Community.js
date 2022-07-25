import React, { useRef, useState } from "react";
import data from "./post.json";
import styled from "styled-components";
import CommunityHeader from "./CommunityHeader";

const CommunityDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 660px;
`;
const CommunitySection = styled.div`
  width: 70%;
  border-right: 1px solid #d6d6d6;
`;

const CommunityEditSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 50px;
`;

const ConetentList = styled.ul`
  padding-left: 35px;
  overflow-y: auto;
  height: 660px;
  margin: 0 10px 0 0;
`;
const Content = styled.li`
  // width: 485px;
  padding: 20px 10px;
  border-radius: 20px;
  list-style: disc;
  margin-right: 20px;
  &::marker {
    color: #0090ff;
  }
`;
const ContentTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  width: 420px;
`;
const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  // margin-top: 10px;
`;
const ContentText = styled.div`
  width: 420px;
`;
const ContentBtn = styled.div`
  background: #0090ff;
  border-radius: 5px;
  padding: 7px 9px;
  color: #ffffff;
  cursor: pointer;
`;

const CommunityEdit = styled.div`
  background: #f2f2f2;
  border-radius: 20px;
  width: 465px;
  height: 303px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const EditTitle = styled.input`
  all: unset;
  border-bottom: 1px solid #b7b7b7;
  font-size: 14px;
  width: 331.05px;
  padding-bottom: 4px;
`;
const EditContent = styled.textarea`
  background: #ffffff;
  border-radius: 10px;
  outline: none;
  border: none;
  width: 402px;
  height: 164px;
  resize: none;
  padding: 12px;
  box-sizing: border-box;
  font-size: 12px;
`;

const EditBtn = styled.button`
  width: 55px;
  height: 30px;
  background: #0090ff;
  border-radius: 5px;
  color: #ffffff;
  font-size: 10px;
  border: none;
`;
const DeleteCheck = styled.input`
  width: 20px;
  height: 20px;
  &:checked {
    background: red;
  }
`;
const CommunityPost = ({
  list,
  listRef,
  index,
  modify,
  setShowEdit,
  setCorTitle,
  setCorContent,
  setModifyId,
  setModify,
  del,
  delId,
}) => {
  const [comBtn, setComBtn] = useState(false);
  return (
    <Content
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
          setComBtn(true);
          setCorTitle(list.title);
          setCorContent(list.content);
          setModifyId(list.id);
        }
      }}
    >
      <ContentTitle>{list.title}</ContentTitle>
      <ContentBox>
        <ContentText>{list.content}</ContentText>
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
            setCorTitle("");
          }}
          style={{ display: comBtn ? "block" : "none" }}
        >
          완료
        </ContentBtn>
      </ContentBox>
    </Content>
  );
};

function Community() {
  // api 연동때 수정할 부분
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
  return (
    <>
      <CommunityHeader
        titleName="공지사항"
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        setModify={setModify}
        saveData={saveData}
        setDel={setDel}
        del={del}
        delId={delId}
        setSaveData={setSaveData}
      />
      <CommunityDiv>
        <CommunitySection>
          <ConetentList className="scrollBar">
            {saveData.map((list, index) => (
              <CommunityPost
                list={list}
                listRef={listRef}
                index={index}
                setShowEdit={setShowEdit}
                key={list.id}
                modify={modify}
                setCorTitle={setCorTitle}
                setCorContent={setCorContent}
                setModifyId={setModifyId}
                setModify={setModify}
                del={del}
                delId={delId}
              />
            ))}
          </ConetentList>
        </CommunitySection>
        <CommunityEditSection>
          <CommunityEdit>
            <EditTitle
              placeholder="제목을 입력해주세요"
              value={corTitle}
              onChange={(event) => {
                setCorTitle(event.target.value);
              }}
            />
            <EditContent
              placeholder="내용을 입력해주세요"
              value={corContent}
              onChange={(event) => {
                setCorContent(event.target.value);
              }}
            />
            <EditBtn
              onClick={() => {
                saveData.map((list) => {
                  if (list.id === parseInt(modifyid) && modify) {
                    list.content = corContent;
                    list.title = corTitle;
                  }
                  setCorTitle("");
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
                    title: corTitle,
                    content: corContent,
                    created: today,
                  };
                  setSaveData([...saveData, addData]);
                }
              }}
            >
              {modify ? "수정" : "업로드"}
            </EditBtn>
          </CommunityEdit>
        </CommunityEditSection>
      </CommunityDiv>
    </>
  );
}

export default Community;
