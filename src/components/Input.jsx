import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const IpBox = styled.form`
  max-width: 800px;
  /* min-width: px; */
  background-color: #faf8f1;
  display: flex;
  justify-content: space-around;

  align-items: center;
  font-family: 'IBMPlexSansKR-Regular';
`;

function Input({ setTodos }) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleSubmitClick = (event) => {
    event.preventDefault();
    console.log('here!');

    setTitle('');
    setContents('');

    if (title === '') {
      alert('제목을 입력해주세요');
      return;
    }
    if (contents === '') {
      alert('내용을 입력해주세요');
      return;
    }

    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    // 지금 세팅된 title과 contents를 todos에 넣어주는 작업
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <section>
      <IpBox onSubmit={handleSubmitClick}>
        제목 : <input value={title} onChange={handleTitleChange} />
        내용 : <input value={contents} onChange={handleContentsChange} />
        <button>추가</button>
      </IpBox>
    </section>
  );
}

export default Input;
