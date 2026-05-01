import "./App.css";
import Accordion from "./components/Accordion";
import TodoList from "./components/TodoList";

function App() {
  const data = [
    { id: "html", title: "HTML", contents: "コンテンツ" },
    { id: "css", title: "CSS", contents: "CSSコンテンツ" },
    { id: "js", title: "JS", contents: "JSコンテンツ" },
  ];
  return (
    <>
      {/* <Accordion data={data} /> */}
      <TodoList />
    </>
  );
}

export default App;
