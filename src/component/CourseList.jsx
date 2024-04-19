import React from "react";
import useCourseStore from "../app/courseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        gap: "10px",
        border: "1px solid red",
      }}
    >
      {courses.map((c) => {
        return (
          <div
            style={{
              display: "flex",
              border: "2px solid black",
              justifyContent: "space-between",

              padding: "5px",
            }}
          >
            <span
              style={{
                marginLeft: "50px",
              }}
            >
              <input
                type="checkbox"
                onChange={() => toggleCourseStatus(c.id)}
              />
            </span>
            <span
              style={{
                marginLeft: "50px",
              }}
            >
              {c?.title}
            </span>
            <button
              style={{
                justifySelf: "flex-end",
                marginLeft: "50px",
              }}
              onClick={() => {
                removeCourse(c.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
