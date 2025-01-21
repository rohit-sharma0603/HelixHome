// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import logInImage from "../../assets/loginImage.png"; // Your background image
// import logInImage from "../../assets/poster.jpg";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate(); // For navigation after successful login

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setErrorMessage("Both fields are required.");
//     } else {
//       // Simulate a login process or handle actual login here
//       console.log("Logging in with", email, password);
//       // Reset error message on successful submission
//       setErrorMessage("");

//       // Simulate successful login and redirect to a dashboard or home
//       // navigate("/dashboard"); // Change "/dashboard" to your target route after successful login
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-300 to-purple-400 flex items-center justify-center">
//       <div className="flex w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden">
//         {/* Left Side Image with Overlay */}
//         <div className="relative w-1/2 h-full">
//           <img
//             src={logInImage}
//             alt="Background"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Side Login Form with Glassmorphism */}
//         <div className="w-1/2 flex items-center justify-center p-8 bg-white bg-opacity-30 backdrop-blur-xl rounded-lg border border-white/30 shadow-xl">
//           <div className="w-full max-w-md">
//             <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Log In</h2>

//             {errorMessage && (
//               <div className="bg-red-200 text-red-800 p-3 mb-4 rounded-md text-center">
//                 {errorMessage}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Submit Button */}
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
//                 >
//                   Log In
//                 </button>
//               </div>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-600">
//                 Don't have an account?{" "}
//                 <Link to="/join" className="text-blue-600 hover:underline">
//                   Sign Up
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";

// const LoginSignup = () => {
//   const [activeForm, setActiveForm] = useState("");

//   const changeToLogin = () => setActiveForm("login");
//   const changeToSignUp = () => setActiveForm("signUp");
//   const hideForms = () => setActiveForm("");

//   return (
//     <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600">
//       <div className="relative flex flex-col items-center w-full max-w-4xl h-96 shadow-lg bg-white rounded-lg overflow-hidden">
//         <div className="absolute w-full h-full overflow-hidden opacity-20">
//           <img
//             src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d"
//             alt="background"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="relative flex justify-between w-full h-full">
//           {/* Login & Signup Info Section */}
//           <div className="flex-1 flex flex-col items-center justify-center bg-gray-700 bg-opacity-70 text-white p-4">
//             <h2 className="text-2xl font-semibold">LOGIN</h2>
//             <p className="mt-2 text-sm text-gray-200">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>
//             <button
//               className="mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded shadow"
//               onClick={changeToLogin}
//             >
//               LOGIN
//             </button>
//           </div>
//           <div className="flex-1 flex flex-col items-center justify-center bg-gray-500 bg-opacity-70 text-white p-4">
//             <h2 className="text-2xl font-semibold">SIGN UP</h2>
//             <p className="mt-2 text-sm text-gray-200">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>
//             <button
//               className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow"
//               onClick={changeToSignUp}
//             >
//               SIGN UP
//             </button>
//           </div>
//         </div>

//         {/* Forms Section */}
//         <div
//           className={`absolute top-0 left-0 w-1/2 h-full bg-gray-100 p-8 transition-transform duration-500 ${
//             activeForm === "login" ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           <button
//             className="absolute top-2 right-4 text-gray-500"
//             onClick={hideForms}
//           >
//             ✕
//           </button>
//           <h2 className="text-xl font-semibold">LOGIN</h2>
//           <input
//             type="text"
//             placeholder="Email"
//             className="w-full mt-4 p-2 border rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full mt-4 p-2 border rounded"
//           />
//           <button className="mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded shadow">
//             LOGIN
//           </button>
//         </div>
//         <div
//           className={`absolute top-0 left-1/2 w-1/2 h-full bg-gray-100 p-8 transition-transform duration-500 ${
//             activeForm === "signUp" ? "translate-y-0" : "-translate-y-full"
//           }`}
//         >
//           <button
//             className="absolute top-2 right-4 text-gray-500"
//             onClick={hideForms}
//           >
//             ✕
//           </button>
//           <h2 className="text-xl font-semibold">SIGN UP</h2>
//           <input
//             type="text"
//             placeholder="Email"
//             className="w-full mt-4 p-2 border rounded"
//           />
//           <input
//             type="text"
//             placeholder="User"
//             className="w-full mt-4 p-2 border rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full mt-4 p-2 border rounded"
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="w-full mt-4 p-2 border rounded"
//           />
//           <button className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow">
//             SIGN UP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


  import React, { useState } from "react";

  const LoginSignup = () => {
    const [activeForm, setActiveForm] = useState("");

    const changeToLogin = () => setActiveForm("login");
    const changeToSignUp = () => setActiveForm("signUp");
    const hideForms = () => setActiveForm("");

    return (
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d')",
        }}
      >
        <div className="relative flex flex-col items-center w-full max-w-4xl h-96 shadow-lg bg-white bg-opacity-80 rounded-lg overflow-hidden">
          <div className="relative flex justify-between w-full h-full">
            {/* Login Section */}
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-700 bg-opacity-70 text-white p-4">
              <h2 className="text-2xl font-semibold">LOGIN</h2>
              <p className="mt-2 text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button
                className="mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded shadow"
                onClick={changeToLogin}
              >
                LOGIN
              </button>
            </div>

            {/* Signup Section */}
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-500 bg-opacity-70 text-white p-4">
              <h2 className="text-2xl font-semibold">SIGN UP</h2>
              <p className="mt-2 text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button
                className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow"
                onClick={changeToSignUp}
              >
                SIGN UP
              </button>
            </div>
          </div>

          {/* Forms Section */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-gray-100 p-8 transition-transform duration-500 ${
              activeForm === "login" ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <button
              className="absolute top-2 right-4 text-gray-500"
              onClick={hideForms}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold">LOGIN</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full mt-4 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-4 p-2 border rounded"
            />
            <button className="mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded shadow">
              LOGIN
            </button>
          </div>

          <div
            className={`absolute top-0 left-1/2 w-1/2 h-full bg-gray-100 p-8 transition-transform duration-500 ${
              activeForm === "signUp" ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <button
              className="absolute top-2 right-4 text-gray-500"
              onClick={hideForms}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold">SIGN UP</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full mt-4 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="User"
              className="w-full mt-4 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-4 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mt-4 p-2 border rounded"
            />
            <button className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default LoginSignup;
