import React from "react";
import { useParams } from "react-router-dom";
import { courseCategories } from "../../../data/courses";

function CourseDetailsPage() {
 const { courseId, categoryId } = useParams(); // Extract both courseId and categoryId
  const selectedCategory = courseCategories.find(
    (category) => category.id === parseInt(categoryId)
  );
  

//    // Find the course within the selected category
  const selectedCourse = selectedCategory?.courses.find(
    (course) => course.id === parseInt(courseId)
  );

  if (!selectedCourse) {
    return <p>Course not found</p>; // Handle case if course is not found
  }

    

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-gray-800">{selectedCourse.name}</h2>
        <p className="text-gray-600 text-lg mt-4">{selectedCourse.description}</p>
        
      </div>
    </div>
  );
}

export default CourseDetailsPage;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { courseCategories } from "../data/courses";

// function CourseDetailsPage() {
//   const { courseId, categoryId } = useParams(); // Extract both courseId and categoryId
//   const selectedCategory = courseCategories.find(
//     (category) => category.id === parseInt(categoryId)
//   );
  
//   // Find the course within the selected category
//   const selectedCourse = selectedCategory?.courses.find(
//     (course) => course.id === parseInt(courseId)
//   );

//   if (!selectedCourse) {
//     return <p>Course not found</p>; // Handle case if course is not found
//   }

//   return (
//     <div>
//       <h2>{selectedCourse.name}</h2>
//       <p>{selectedCourse.description}</p>
//     </div>
//   );
// }

// export default CourseDetailsPage;
