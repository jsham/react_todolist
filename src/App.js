import React, {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

//1. Create an input window and button
//2. Input somethin to input the window and click the button, then an item is added
//3. It can be deleted by delete button.
function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, sestTodoList] = useState([])
  const addItem = ()=>{
    sestTodoList([...todoList, inputValue]) // 기존 값을 유지하고 추가
  }
  return (
    <main>
      <input value = {inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)} />
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
