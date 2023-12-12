import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import banner from "./resources/course-banner.jpg";

// const FLAG_URL =
//   "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/726563";

export default function CreateCourse() {
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseDuration, setCourseDuration] = useState("");
  const [faculty, setFaculty] = useState([]);
  const [courseRating, setCourseRating] = useState(0);
  const [syllabus, setSyllabus] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      courseName,
      coursePrice,
      courseDuration,
      faculty,
      courseRating,
      syllabus,
    };

    postData(data);

    // Resetting the form
    setCourseName("");
    setCoursePrice(0);
    setCourseDuration("");
    setFaculty([]);
    setCourseRating(0);
    setSyllabus([]);
    e.target.reset();
  };

  const postData = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="course-name">Course Name:</label>
      <input
        type="text"
        id="course-name"
        name="courseName"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="course-price">Course Price:</label>
      <input
        type="number"
        id="course-price"
        name="coursePrice"
        value={coursePrice}
        onChange={(e) => setCoursePrice(Number(e.target.value))}
      />
      <br />
      <br />
      <label htmlFor="course-duration">Course Duration:</label>
      <input
        type="text"
        id="course-duration"
        name="courseDuration"
        value={courseDuration}
        onChange={(e) => setCourseDuration(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="faculty">Faculty:</label>
      <input
        type="text"
        id="faculty"
        name="faculty"
        value={faculty}
        onChange={(e) => {
          const profs = e.target.value.split(",").map((val) => val.trim());
          setFaculty(profs);
        }}
      />
      <br />
      <br />
      <label htmlFor="courseRating">Course Rating:</label>
      <input
        type="number"
        id="courseRating"
        name="courseRating"
        value={courseRating}
        onChange={(e) => setCourseRating(Number(e.target.value))}
      />
      <br />
      <br />
      <label htmlFor="syllabus">Syllabus:</label>
      <input
        type="text"
        id="syllabus"
        name="syllabus"
        value={syllabus}
        onChange={(e) => {
          const subjects = e.target.value.split(",").map((val) => val.trim());
          setSyllabus(subjects);
        }}
      ></input>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
