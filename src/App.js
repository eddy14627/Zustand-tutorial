import "./App.css";
import CourseList from "./component/CourseList";
import Courses from "./component/Courses";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Zustand
      </h1>
      <Courses />
      <CourseList />
    </div>
  );
}

export default App;
