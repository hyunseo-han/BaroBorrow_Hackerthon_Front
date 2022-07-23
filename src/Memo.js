import React from "react";
import { useState } from "react";
import styled from "styled-components";

const MemoBox = styled.div`
  display: flex;
`;
const useInput = (initalValue, validator) => {
  const [value, setValue] = useState(initalValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
function Memo(props) {
  const name = useInput("Mr");
  const [revise, setRevise] = useState(false);

  return (
    <MemoBox>
      {revise ? (
        <>
          <textarea
            value={name.value}
            onChange={name.onChange}
            style={{ width: "300px", height: "200px", resize: "none" }}
          />
          <button
            onClick={() => {
              setRevise(false);
            }}
          >
            확인
          </button>
        </>
      ) : (
        <>
          <div>{name.value}</div>
          <button
            onClick={() => {
              setRevise(true);
            }}
          >
            수정하기
          </button>
        </>
      )}
    </MemoBox>
  );
}

export default Memo;
