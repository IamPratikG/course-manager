import "./styles.css";
import Courses from "./Courses";
import CourseDetails from "./CourseDetails";
import CreateCourse from "./CreateCourse";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Courses />}></Route>
          <Route path="/new" element={<CreateCourse />}></Route>
          <Route path="/course/:id" element={<CourseDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Check file myScript.js in the project to see the script that
// I used to get the URL
