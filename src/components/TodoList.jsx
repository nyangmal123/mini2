import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const StBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  padding: 20px;
  background-color: #faeab1;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  font-family: 'IBMPlexSansKR-Regular';
`;

function TodoList({ todos, isActive, setTodos }) {
  return (
    <StBox>
      <h3>{isActive ? '해야 할 것' : '완료된 것'}</h3>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <Todo item={item} isActive={isActive} setTodos={setTodos}></Todo>
          );
        })}
    </StBox>
  );
}

export default TodoList;
