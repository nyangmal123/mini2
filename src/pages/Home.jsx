import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // 인풋창

  // 투두리스트 - 투두의 집합(진행,완료로 나뉨)
  // 투두 - 상세보기버튼 + 제목,내용 + 완료버튼 + 삭제버튼

  // 상세보기 페이지로 이동
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/todo');
      }}
    >
      상세페이지
    </button>
  );
};
