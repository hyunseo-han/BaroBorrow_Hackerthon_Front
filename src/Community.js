import React, { useRef, useState } from "react";
import data from "./data.json";
import styled from "styled-components";

const CommunityTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const CommunityDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 780px;
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
`;
const Content = styled.li`
  margin-bottom: 16px;
  width: 485px;
  padding: 20px;
  border-radius: 20px;
  list-style: disc;
  &::marker {
    color: #0090ff;
  }
`;
const ContentTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;
const ContentText = styled.div`
  width: 405px;
`;
const ContentBtn = styled.div`
  background: #0090ff;
  border-radius: 5px;
  padding: 7px 9px;
  color: #ffffff;
  cursor: pointer;
`;
const EditSelect = styled.div`
  position: absolute;
  width: 108px;
  height: 69px;
  top: 30px;
  box-shadow: 0px 0px 30px rgb(162 162 162 / 25%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 13px;
  right: 0;
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
const EditIcon = styled.div`
  display: flex;
  cursor: pointer;
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
  width: 25px;
  height: 25px;
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
          for (let idx = 0; idx < listRef.current.length; idx++) {
            listRef.current[idx].lastChild.lastChild.click();
          }
          setModify(true);
          listRef.current[index].style.backgroundColor = "#f2f2f2";
          setComBtn(!comBtn);
          setCorTitle(list.title);
          setCorContent(list.content);
          setModifyId(list.id);
        }
      }}
    >
      <ContentTitle>{list.title}(제목)</ContentTitle>
      <ContentBox>
        <ContentText>{list.content}(내용)</ContentText>
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
            setCorTitle(list.title);
            setCorContent(list.content);
            setModify(false);
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
  // 페이지네이션
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
      <CommunityTitle>
        공지사항
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setShowEdit(!showEdit);
          }}
        >
          <path
            d="M7.5 12.5C6.125 12.5 5 13.625 5 15C5 16.375 6.125 17.5 7.5 17.5C8.875 17.5 10 16.375 10 15C10 13.625 8.875 12.5 7.5 12.5ZM22.5 12.5C21.125 12.5 20 13.625 20 15C20 16.375 21.125 17.5 22.5 17.5C23.875 17.5 25 16.375 25 15C25 13.625 23.875 12.5 22.5 12.5ZM15 12.5C13.625 12.5 12.5 13.625 12.5 15C12.5 16.375 13.625 17.5 15 17.5C16.375 17.5 17.5 16.375 17.5 15C17.5 13.625 16.375 12.5 15 12.5Z"
            fill="#B7B7B7"
          />
        </svg>
        {showEdit ? (
          <EditSelect>
            <EditIcon onClick={() => setModify(true)}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5391 2.8413L12.1587 4.4602L10.5391 2.8413ZM11.5806 1.41511L7.20109 5.79462C6.97481 6.02059 6.82048 6.3085 6.75756 6.62204L6.35303 8.647L8.37799 8.24171C8.69152 8.179 8.97905 8.02529 9.20541 7.79894L13.5849 3.41942C13.7165 3.28782 13.8209 3.13158 13.8921 2.95963C13.9634 2.78768 14 2.60338 14 2.41726C14 2.23115 13.9634 2.04685 13.8921 1.8749C13.8209 1.70295 13.7165 1.54671 13.5849 1.41511C13.4533 1.2835 13.2971 1.17911 13.1251 1.10788C12.9532 1.03666 12.7689 1 12.5828 1C12.3966 1 12.2124 1.03666 12.0404 1.10788C11.8685 1.17911 11.7122 1.2835 11.5806 1.41511V1.41511Z"
                  stroke="#7E7E7E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4707 10.1764V12.4706C12.4707 12.8762 12.3096 13.2652 12.0227 13.552C11.7359 13.8389 11.3469 14 10.9413 14H2.52943C2.1238 14 1.73478 13.8389 1.44796 13.552C1.16114 13.2652 1 12.8762 1 12.4706V4.05872C1 3.65309 1.16114 3.26408 1.44796 2.97726C1.73478 2.69043 2.1238 2.5293 2.52943 2.5293H4.82357"
                  stroke="#7E7E7E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              수정하기
            </EditIcon>
            <EditIcon
              onClick={() => {
                setDel(!del);
                const earse = Object.keys(delId).filter(
                  (li) => delId[li] === true
                );
                for (let index = 0; index < earse.length; index++) {
                  data = data.filter(
                    (list) => list.id !== parseInt(earse[index])
                  );
                }
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
              삭제하기
            </EditIcon>
          </EditSelect>
        ) : (
          ""
        )}
      </CommunityTitle>
      <CommunityDiv>
        <CommunitySection>
          <ConetentList>
            {data.map((list, index) => (
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
                data.map((list) => {
                  if (list.id === parseInt(modifyid)) {
                    list.content = corContent;
                    list.title = corTitle;
                  }
                  setCorTitle("");
                  setCorContent("");
                });
              }}
            >
              업로드
            </EditBtn>
          </CommunityEdit>
        </CommunityEditSection>
      </CommunityDiv>
    </>
  );
}

export default Community;
