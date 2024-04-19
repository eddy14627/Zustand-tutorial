import React, { useState } from "react";
import useCourseStore from "../app/courseStore";
import "../App.css";

const Courses = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState("");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please enter a title");
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    });
    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input
        className="form-input"
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
      />
      <button className="form-submit-btn" onClick={handleCourseSubmit}>
        {" "}
        Submit
      </button>
    </div>
  );
};

export default Courses;
