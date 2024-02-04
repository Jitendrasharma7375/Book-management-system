import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import Books from "./Components/Books";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import AddStudent from "./Components/AddStudent";
import Logout from "./Components/Logout";
import axios from "axios";
import { useEffect } from "react";
import AddBoook from "./Components/AddBooks";
import EditBook from "./Components/EditBook";
import DeleteBook  from "./Components/DeleteBook"

export function App() {

  const [role, setRole] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/auth/verify')
      .then(res => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole("");
        }
        console.log(res);
      }).catch(err => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books role={role}/>}></Route>
        <Route path="/login" element={<Login setRoleVar={setRole} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addstudent" element={<AddStudent />}></Route>
        <Route path="/logout" element={<Logout setRole={setRole} />}></Route>
        <Route path="/addbook" element={<AddBoook />}></Route>
        <Route path="/book/:id" element={<EditBook />}></Route>
        <Route path="/delete/:id" element={<DeleteBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
