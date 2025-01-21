


import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import DirectorDeskPage from '../pages/DirectorDeskPage';
import LogInPage from '../pages/LogInPage';
import { JobPage } from '../pages/JobPage';
import ContactUsPage from '../pages/ContactUsPage';
// import ClassRoomCourses from '../components/home/ClassRoomCourses';
import CategoryPage from '../pages/CategoryPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
     
      {location.pathname !== '/login' && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/director-desk" element={<DirectorDeskPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/jobs" element={<JobPage/>} />
        <Route path="/contact-us" element={<ContactUsPage/>} />
        <Route path="/category/:categoryId" element={<CategoryPage/>} />
        <Route path="/course/:courseId/:categoryId" element={<CourseDetailsPage />} />

      </Routes>
      
      {location.pathname !== '/login' && <Footer />}
    </>
  );
};

export default AppRoutes;
