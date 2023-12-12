import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import banner from "./resources/course-banner.jpg";

// const FLAG_URL =
//   "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/726563";

const courseMock = {
  name: "Programming Fundamentals with Java",
  price: 175,
  duration: "3 months",
  faculty: ["Prof. Jonathan Schutt", "Dr. Hannah Whiteman"],
  rating: 4.1,
  syllabus: [
    "Object Oriented Programming Concepts",
    "JVM",
    "Conditonal statements",
    "Loops",
  ],
};

export default function CourseDetails() {
  const [courseDetails, setCourseDetails] = useState(courseMock);
  let { id: courseId } = useParams();

  useEffect(() => {
    // const getCourses = async () => {
    //   const res = await fetch(FLAG_URL);
    //   const data = await res.json();
    //   console.log(data);
    //   setCourses(data);
    // };
    // getCourses();
  }, []);

  const renderFacultyList = (faculty) =>
    faculty.map((teacher) => (
      <li className="faculty" key={teacher}>
        {teacher}
      </li>
    ));

  const renderSyllabusList = (syllabus) =>
    syllabus.map((chapter) => (
      <li className="chapter" key={chapter}>
        {chapter}
      </li>
    ));

  return (
    <div className="course-details">
      <img className="course-banner" src={banner} alt={courseDetails.name} />
      <div className="course-name">{courseDetails.name}</div>
      <div className="details">
        <div className="price">{`Price: $${courseDetails.price}`}</div>
        <div className="duration">{`This course takes ${courseDetails.duration} to complete`}</div>
        {!!courseDetails.faculty.length && (
          <ul className="faculty-list">
            {renderFacultyList(courseDetails.faculty)}
          </ul>
        )}
        {!!courseDetails.syllabus.length && (
          <ul className="syllabus-list">
            {renderSyllabusList(courseDetails.syllabus)}
          </ul>
        )}
      </div>
    </div>
  );
}
