import { v4 as uuidv4 } from 'uuid';

// 초기값 설정
const initialState = [
  {
    title: '제목1',
    contents: '내용1',
    isDone: false,
    id: uuidv4(),
  },
  {
    title: '제목2',
    contents: '내용2',
    isDone: true,
    id: uuidv4(),
  },
  {
    title: '제목3',
    contents: '내용3',
    isDone: false,
    id: uuidv4(),
  },
];

// 리듀서
// setTodos() 해준거 여기다 함수로 써준다.
const handleDeleteButtonClick = (state = initialState, action) => {
  // if (window.confirm('삭제하시겠습니까?')) {
  //     alert('삭제되었습니다.');
  //     setTodos((prev) => prev.filter((t) => t.id !== item.id));
  //   } else {
  //     alert('취소되었습니다.');
  //   }
  switch (action.type) {
    default:
      return state;
  }
};

// configStore에서 handleDeleteButtonClick 임포트 해줘야함

export default handleDeleteButtonClick;
