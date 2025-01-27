
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { courseCategories } from "../data/courses";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import bgImage from "../assets/bgImage.jpg";

// function CategoryPage() {
//   const { categoryId } = useParams();
//   const navigate = useNavigate();

//   const selectedCategory = courseCategories.find(
//     (category) => category.id === parseInt(categoryId)
//   );

//   const handleCourseClick = (course) => {
//     navigate(`/course/${course.id}`);
//   };

//   return (
//     <div
//       className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 min-h-screen"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="container mx-auto px-6 py-12">
//         <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
//           Explore Our {selectedCategory.type} Courses
//         </h2>

//         <div className="services flex flex-wrap justify-center gap-8">
//           {selectedCategory.courses.map((course, index) => (
//             <div
//               key={course.id}
//               className={`content p-6 bg-white/40 backdrop-blur-sm border-2 border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${
//                 index === 0
//                   ? "content-1 hover:border-[#1DA1F2] hover:bg-[#1DA1F2]"
//                   : index === 1
//                   ? "content-2 hover:border-[#E1306C] hover:bg-[#E1306C]"
//                   : index === selectedCategory.courses.length - 1
//                   ? "content-3 hover:border-[#ff0000] hover:bg-[#ff0000]"
//                   : `content-${index + 1} hover:border-[#${Math.floor(
//                       Math.random() * 16777215
//                     ).toString(16)}] hover:bg-[#${Math.floor(
//                       Math.random() * 16777215
//                     ).toString(16)}]`
//               }`}
//               onClick={() => handleCourseClick(course)}
//             >
//               <h3 className="text-2xl font-semibold text-white mb-4">{course.name}</h3>
//               <p className="text-white text-base mb-4">{course.description}</p>
//               <a
//                 href="#"
//                 className="block text-center text-white font-medium border-2 border-transparent rounded-full py-2 px-4 mt-4 transition-all duration-300 hover:border-white"
//               >
//                 Read More
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryPage;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseCategories } from '../../../data/courses'
import bgImage from '../../../assets/bgImage.jpg'

function CategoryPage() {
  const { categoryId } = useParams(); // Get the categoryId from the URL
  const navigate = useNavigate(); // Used to navigate to the CourseDetailsPage

  // Find the selected category based on categoryId
  const selectedCategory = courseCategories.find(
    (category) => category.id === parseInt(categoryId)
  );

  
//   // Handle the click on a course to navigate to the course details page
//   const handleCourseClick = (course) => {
//     navigate(`/course/${course.id}`); // Navigate to the specific course details page
//   };

// CategoryPage.js

const handleCourseClick = (course) => {
    // Navigate to the Course Details Page and pass the courseId and categoryId as URL params
    navigate(`/course/${course.id}/${categoryId}`);
  };

  
  return (
    <div
      className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-white mb-10 text-center">
          Explore Our {selectedCategory?.type} Courses
        </h2>

        <div className="services flex flex-wrap justify-center gap-8">
          {selectedCategory?.courses.map((course, index) => (
            <div
              key={course.id}
              className={`content p-6 bg-white/40 backdrop-blur-sm border-2 border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${
                index === 0
                  ? "content-1 hover:border-[#1DA1F2] hover:bg-[#1DA1F2]"
                  : index === 1
                  ? "content-2 hover:border-[#E1306C] hover:bg-[#E1306C]"
                  : index === selectedCategory.courses.length - 1
                  ? "content-3 hover:border-[#ff0000] hover:bg-[#ff0000]"
                  : `content-${index + 1} hover:border-[#${Math.floor(
                      Math.random() * 16777215
                    ).toString(16)}] hover:bg-[#${Math.floor(
                      Math.random() * 16777215
                    ).toString(16)}]`
              }`}
              onClick={() => handleCourseClick(course)} // Call the function on click
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{course.name}</h3>
              <p className="text-white text-base mb-4">{course.description}</p>
              <a
                href="#"
                className="block text-center text-white font-medium border-2 border-transparent rounded-full py-2 px-4 mt-4 transition-all duration-300 hover:border-white"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
