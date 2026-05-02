import { useState } from "react";

const newID = (() => {
  let id = 0;
  return () => {
    id++;
    return id;
  };
})();
const sampleTasks = [
  {
    id: newID(),
    task: "買い物",
  },
];

export default function TodoList() {
  const [tasks, setTasks] = useState(sampleTasks);
  const [inputText, setInputText] = useState("");
  return (
    <>
      <h1>TodoList</h1>
      <input
        type="text"
        aria-label="入力欄"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTasks([...tasks, { id: newID(), task: inputText }]);
          setInputText("");
        }}
      >
        追加
      </button>
      {tasks.map(({ id, task }) => {
        return (
          <div key={id}>
            {task}
            <button
              onClick={() => {
                setTasks(
                  tasks.filter((element) => {
                    return element.id !== id;
                  }),
                );
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}
