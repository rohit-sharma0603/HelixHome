// import React from "react";
// import { useNavigate } from "react-router-dom";
// import directorImage from "../../assets/directorImage.jpg";

// function DirectorsDeskPreview() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50 py-16 px-6 md:px-20">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Director's Image */}
//         <div className="rounded-lg shadow-lg overflow-hidden">
//           <img
//             src={directorImage}
//             alt="Director"
//             className="w-full h-full object-cover object-center transform hover:scale-105 transition-all duration-500"
//           />
//         </div>

//         {/* Director's Message Preview */}
//         <div className="space-y-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//             A Message from Our Director
//           </h2>
//           <p className="text-gray-700 leading-relaxed line-clamp-5">
//             This gives me immense happiness to announce that with wholehearted
//             co-operation of teaching and administrative staff, we have
//             successfully entered the Twelveth year under the banner of Helix
//             Institute. Success in Medical Entrance Examinations, in face of a
//             stiff and cut-throat competition, calls for a planned approach and
//             cultivation of requisite skills.
//           </p>

//           {/* Read More Button */}
//           <button
//             onClick={() => navigate("/director-desk")}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md font-medium transition-all"
//           >
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DirectorsDeskPreview;

import React from "react";
import { useNavigate } from "react-router-dom";
import directorImage from "../../assets/directorImage.jpg";

function DirectorsDeskPreview() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50  px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* Director's Image */}
        <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
          <img
            src={directorImage}
            alt="Director"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Director's Message Preview */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            A Message from Our Director
          </h2>
          <p className="text-gray-700 leading-relaxed line-clamp-4">
            This gives me immense happiness to announce that with wholehearted
            co-operation of teaching and administrative staff, we have
            successfully entered the Twelveth year under the banner of Helix
            Institute. Success in Medical Entrance Examinations, in face of a
            stiff and cut-throat competition, calls for a planned approach and
            cultivation of requisite skills.
          </p>

          {/* Read More Button */}
          <button
            onClick={() => navigate("/director-desk")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg font-medium transition-all transform hover:scale-105"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default DirectorsDeskPreview;
