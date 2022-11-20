import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import AdminLogin from "../screens/adminLogin";
import AdminScreen from "../screens/admindashboard";
import Home from "../screens/home";
import StudentForm from "../screens/studentform";
import QuizApp from "../screens/givequiz";

export default function AppRouter() {
    return (
        <Router>


            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="registration" element={<StudentForm />} />
            </Routes>
            <Routes>
                <Route path="adminLogin" element={<AdminLogin />} />
            </Routes>
            <Routes>
                <Route path="adminLogin/:id/*" element={<AdminScreen />} />
            </Routes>
            <Routes>
                <Route path="quiz" element={<QuizApp />} />
            </Routes>

        </Router>
    );
}