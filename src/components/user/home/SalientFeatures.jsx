// import React from "react";
// import SailentImage from "../../assets/sailent.jpg";

// const SalientFeatures = () => {
//   const features = [
//     { title: "Comprehensive Learning Materials", image: SailentImage },
   
//     { title: "Video Features", image: SailentImage },
//     { title: "Live Classes", image: SailentImage },
//     { title: "Digital Study Material", image: SailentImage },
//     { title: "Home Assignments", image: SailentImage },
//     { title: "Regular Tests Analysis", image: SailentImage },
//     { title: "Affordable Courses", image: SailentImage },
//     { title: "Doubt Resolving Sessions", image: SailentImage },
  
//   ];

//   return (
//     <div className="bg-gray-50 py-0">
//       {/* Flex Container for Left and Right Sections */}
//       <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start max-w-6xl mx-auto px-4 gap-32">
//         {/* Left Section (Heading, Description, Button) */}
//         <div className="lg:w-1/2 text-center lg:text-left ">
//           <p className="text-green-500 font-semibold text-lg uppercase tracking-wide">Our Expertise</p>
//           <h2 className="text-4xl font-bold text-gray-800 leading-tight mt-2">
//             Salient Features of <span className="text-green-500">Digital Online Courses</span>
//           </h2>
//           <p className="text-gray-500 mt-4 text-lg">
//             Digital online courses provide a flexible, engaging, and accessible way to learn new skills and enhance knowledge. 
//             Explore the features that make our courses an exceptional learning experience.
//           </p>
//           <button className="mt-6 px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition">
//             Enroll Now →
//           </button>
//         </div>

//         {/* Right Section (Features Section) */}
//         <div className="lg:w-1/2 flex flex-wrap justify-start gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="flex items-center space-x-4 bg-white shadow-md hover:shadow-lg transition rounded-full px-6 py-3 w-full sm:w-auto"
//             >
//               <img
//                 src={feature.image}
//                 alt={feature.title}
//                 className="w-14 h-14 object-cover rounded-full"
//               />
//               <p className="text-gray-800 font-medium text-lg">{feature.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SalientFeatures;



import React from "react";
import SailentImage from "../../../assets/sailent.jpg";

const SalientFeatures = () => {
  const features = [
    { title: "Regular Tests Analysis", image: SailentImage },
    { title: "Video Features", image: SailentImage },
    { title: "Live Classes", image: SailentImage },
    { title: "Digital Study Material", image: SailentImage },
    { title: "Home Assignments", image: SailentImage },
 
  
    { title: "Doubt Resolving Sessions", image: SailentImage },
  ];

  return (
    <div className="bg-gray-50 py-12">
      {/* Flex Container for Left and Right Sections */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start max-w-6xl mx-auto px-4 gap-32">
        {/* Left Section (Heading, Description, Button) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-green-500 font-semibold text-lg uppercase tracking-wide">
            Our Expertise
          </p>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mt-2">
            Salient Features of{" "}
            <span className="text-green-500">Digital Online Courses</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Digital online courses provide a flexible, engaging, and accessible
            way to learn new skills and enhance knowledge. Explore the features
            that make our courses an exceptional learning experience.
          </p>
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition">
            Enroll Now →
          </button>
        </div>

        {/* Right Section (Features Section) */}
        <div className="lg:w-1/2 flex flex-wrap justify-center gap-6">
          {features.length === 1 ? (
            // Center Single Icon
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-white shadow-md hover:shadow-lg transition rounded-full px-6 py-3">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="w-14 h-14 object-cover rounded-full"
                />
              </div>
              <p className="text-gray-800 font-medium text-lg mt-4">
                {features[0].title}
              </p>
            </div>
          ) : (
            // Multiple Icons
            features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white shadow-md hover:shadow-lg transition rounded-full px-6 py-3 w-full sm:w-auto"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-14 h-14 object-cover rounded-full"
                />
                <p className="text-gray-800 font-medium text-lg">
                  {feature.title}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SalientFeatures;
