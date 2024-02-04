import React from "react";
import "../css/AddStudent.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/student/register", {
        roll,
        username,
        grade,
        password,
      })
      .then((res) => {
        if (res.data.registered) {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className="form-group">
          <label htmlFor="roll">Roll No:</label>
          <input
            type="text"
            id="roll"
            name="roll"
            placeholder="Enter Roll No"
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Student Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Student Name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            placeholder="Enter Grades"
            onchange={(e) => setGrade(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Student Password"
            onchange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-add-student">
          Register
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
