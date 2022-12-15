import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  font-family: 'IBMPlexSansKR-Regular';
`;

function Todo({ item, isActive, setTodos }) {
  const handleDeleteButtonClick = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      alert('삭제되었습니다.');
      setTodos((prev) => prev.filter((t) => t.id !== item.id));
    } else {
      alert('취소되었습니다.');
    }
  };
  const handleSwitchButtonClick = () => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === item.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return t;
        }
      })
    );
  };

  return (
    <div
      style={{
        border: '1px solid black',
      }}
      key={item.id}
    >
      <h4>{item.title}</h4>
      <p>{item.contents}</p>
      <ButtonBox borderColor='blue' onClick={handleSwitchButtonClick}>
        {isActive ? '완료' : '취소'}
      </ButtonBox>
      <ButtonBox borderColor='red' onClick={handleDeleteButtonClick}>
        삭제
      </ButtonBox>
    </div>
  );
}

export default Todo;
