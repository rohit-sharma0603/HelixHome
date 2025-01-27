import React, { useState, useEffect } from "react";
import { FiBookOpen } from "react-icons/fi";
import { courseCategories } from "../../../data/courses";
import { useNavigate } from "react-router-dom";

function ClassRoomCourses() {
  const [selectedCategory, setSelectedCategory] = useState(courseCategories[0]);
  const [selectedCourse, setSelectedCourse] = useState(
    courseCategories[0].courses[0]
  );
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedCourse(category.courses[0]);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolling(scrollTop > 100); // Set the threshold to start scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategory = (category) => {
    // Navigate to category-specific page
    navigate(`/category/${category.id}`);
    
  };
  return (
    <div className="bg-gradient-to-b from-teal-100 to-gray-50 min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            Explore Our <span className="text-teal-600">Classroom Courses</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Discover a range of expertly designed courses to help you excel in
            your academic and competitive pursuits.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-2 text-sm font-semibold bg-teal-600 text-white rounded-full shadow-md hover:bg-teal-700 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Main Section: Wrapped in Transparent Gradient Background */}
        <div className="relative bg-transparent rounded-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8 relative z-10">
            {/* Left Column: Course List (Static) */}
            <div className="lg:w-7/12">
              <div className=" rounded-lg p-6 ">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {selectedCategory.type}{" "}
                </h3>
                <p className="mt-4 text-gray-600 text-sm">
                  {selectedCategory.description}
                </p>

                <div className="mt-4">
                  <table className="w-full text-left">
                    <tbody>
                      {selectedCategory.courses.map((course) => (
                        <tr
                          key={course.id}
                          className="hover:bg-gray-50 transition duration-200"
                        >
                          <td
                            className="py-3 flex items-center gap-3 text-gray-700 text-sm cursor-pointer"
                            onClick={() => handleCourseClick(course)}
                          >
                            <FiBookOpen size={14} className="text-teal-500" />
                            {course.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column: Course Categories (Scrollable with Transparent Gradient) */}
            <div
              className={`lg:w-5/12 ${
                scrolling ? "sticky top-24" : "static"
              } transition-all duration-300 overflow-y-auto`}
              style={{
                maxHeight: "calc(100vh - 120px)",
                scrollbarWidth: "none", // Hide scrollbar for Firefox
                WebkitOverflowScrolling: "touch", // Enable smooth scrolling
                scrollbarColor: "transparent transparent", // Hide scrollbar for Chrome, Edge
              }}
            >
              <div className="space-y-4">
                {courseCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`pricing-box cursor-pointer p-6 rounded-lg shadow-xl transition-all duration-300 transform ${
                      selectedCategory.id === category.id
                        ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                        : "bg-white text-gray-700"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                    style={{
                      animationDelay: "0.2s",
                      borderRadius: "20px",
                      padding: "20px",
                    }}
                  >
                    <div className="flex flex-col items-start">
                      <h3 className="font-semibold text-xl mb-2">
                        {category.type}
                      </h3>
                      {/* <p className="text-gray-600 text-sm">{category.description}</p> */}
                      <p
                        className={`text-sm ${
                          selectedCategory.id === category.id
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      >
                        {category.description}
                      </p>

                      <div className="mt-4 flex justify-start">
                        <button className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
                        onClick={() => handleCategory(category)}>
                          VIEW COURSES
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassRoomCourses;
