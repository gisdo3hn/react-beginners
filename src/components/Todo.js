import { useEffect, useState } from "react";

function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  function onChange(event) {
    setToDo(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => {
          return <li key={index}>{item}</li>; //key는 고유의 li를 만들기 위해.Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 도움.
          //배열을 반환해도 li는 display가 블럭이라 차례로 밑으로 나옴.
          //그냥 배열은 jsx에서 적었을때 []표시 없이 한줄로 나옴
        })}
      </ul>
    </div>
  );
}

export default Todo;
