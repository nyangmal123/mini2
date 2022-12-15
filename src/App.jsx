// src/App.js

import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  // const TodosStore = useSelector((state) => state);
  // console.log(TodosStore);

  const [todos, setTodos] = useState(initialState);
  return (
    <div>
      <Header>Todo-List</Header>
      <main>
        <Input setTodos={setTodos} />

        {/* todo-list 출력 */}
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />
      </main>
      <Footer>
        The best preparation for tomorrow is to do today's work superbly well. -
        William Osler
        <br />
        내일을 위한 최선의 준비는 오늘의 일을 훌륭하게 해내는 것이다. -윌리엄
        오슬러, 의학자, 1849-1919
      </Footer>
    </div>
  );
};

export default App;

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
