


import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/user/Navbar'
import Home from '../pages/user/Home'
import Footer from '../components/user/footer';
import DirectorDeskPage from '../pages/user/DirectorDeskPage';
import LogInPage from '../pages/user/LogInPage';
import JobPage from '../pages/user/JobPage'
import ContactUsPage from '../pages/user/ContactUsPage';

import CategoryPage from '../pages/user/courses/CategoryPage';
import CourseDetailsPage from '../pages/user/courses/CourseDetailsPage';
import PayOnlinePage from "../pages/user/payOnline/PayOnlinePage"
import ScholarshipTestPage from '../pages/user/ScholarshipTestPage';
import DownloadSyllabus from '../pages/user/downloads/DownloadSyllabus';
import PayInstallment from '../pages/user/payOnline/PayInstallment';
import NeeTAnswerKeyPage from '../pages/user/downloads/NeetAnswerKeyPage';

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
        <Route path="/pay-online" element={<PayOnlinePage />} />
        <Route path="/scholarship-test" element={<ScholarshipTestPage />} />
        <Route path="/download-syllabus" element={<DownloadSyllabus />} />
        <Route path="/pay-installment" element={<PayInstallment />} />
        <Route path="/neet-answer-key" element={<NeeTAnswerKeyPage />} />

      </Routes>
      
      {location.pathname !== '/login' && <Footer />}
    </>
  );
};

export default AppRoutes;
