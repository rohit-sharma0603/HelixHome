
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Testimonials = () => {
  const testimonials = [
    {
      image:
        "https://demo.awaikenthemes.com/html-preview/infine/images/testimonial-img-2.jpg",
      title: "HELIXIAN",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis odio obcaecati consequatur facilis id eos distinctio debitis adipisci sunt laboriosam asperiores non eum unde, maiores error, ad suscipit quidem soluta!",
      name: "Mrunal Thakur",
      role: "Software Engineer",
    },
    {
      image:
        "https://demo.awaikenthemes.com/html-preview/infine/images/testimonial-img-1.jpg",
      title: "HELIX",
      description:
        "Our students achieve outstanding results with a supportive environment and guidance from our expert mentors.",
      name: "Akash Singh",
      role: "Web Developer",
    },
    {
      image:
        "https://demo.awaikenthemes.com/html-preview/infine/images/testimonial-img-3.jpg",
      title: "ACHIEVER",
      description:
        "Great institutions produce great minds. We take pride in the success stories of our students.",
      name: "Neha Sharma",
      role: "Data Scientist",
    },
  ];

  return (
    <div className="bg-[#042a2d] bg-[url('https://demo.awaikenthemes.com/html-preview/infine/images/testimonial-bg.png')] py-10 px-5 flex flex-col w-full items-center">
      {/* Header Section */}
      <div className="max-w-4xl mb-8 text-center">
        <h2 className="text-teal-300 text-lg mb-2">// TESTIMONIAL</h2>
        <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          Real success stories from our students
        </h2>
      </div>

      {/* Swiper Section */}
      <div className="w-full max-w-5xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          speed={1500} // Increased speed for smoother transition
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center bg-opacity-60 bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                {/* Image Section */}
                <div className="w-full md:w-1/3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover rounded-t-xl md:rounded-none md:rounded-l-xl"
                  />
                </div>
                {/* Content Section */}
                <div className="p-8 w-full md:w-2/3 text-white">
                  <h1 className="text-2xl font-bold">{testimonial.title}</h1>
                  <p className="text-lg my-4">{testimonial.description}</p>
                  <div>
                    <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                    <h3 className="text-md text-teal-300">{testimonial.role}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
