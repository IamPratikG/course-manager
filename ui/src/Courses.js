import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const FLAG_URL =
//   "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/726563";

const courseMock = [
  {
    id: 1,
    name: "Programming Fundamentals with Java",
    price: 175,
    duration: "3 months",
  },
  {
    id: 2,
    name: "Learn Web Development with React",
    price: 250,
    duration: "2 months",
  },
  {
    id: 3,
    name: "Decode Machine Learning and AI",
    price: 300,
    duration: "6 months",
  },
];

export default function Courses() {
  const [courses, setCourses] = useState(courseMock);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const getCourses = async () => {
  //     const res = await fetch(FLAG_URL);
  //     const data = await res.json();
  //     console.log(data);
  //     setCourses(data);
  //   };
  //   getCourses();
  // }, []);

  function handleClick(id) {
    navigate(`/course/${id}`);
  }

  const renderCourseCard = (courseData) => {
    return (
      <div className="course-data">
        <div className="course-name">{courseData.name}</div>
        <div className="course-price">{`Total Cost: $${courseData.price}`}</div>
        <div className="course-duration">{`Duration: ${courseData.duration}`}</div>
        <button
          className="course-detail-button"
          onClick={() => {
            handleClick(courseData.id);
          }}
        >
          View Details
        </button>
      </div>
    );
  };

  return (
    <div className="courses-container">
      {courses.length > 0 ? (
        courses.map((courseData) => (
          <div className="course" key={courseData.name}>
            {renderCourseCard(courseData)}
          </div>
        ))
      ) : (
        <h1>No Courses to show</h1>
      )}
    </div>
  );
}
