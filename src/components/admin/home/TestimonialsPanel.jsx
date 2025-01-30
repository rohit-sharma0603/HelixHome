import React, { useState } from "react";

const TestimonialsPanel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({ name: "", profession: "", details: "", image: null });
  const [editingIndex, setEditingIndex] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Handle Input Change
  const handleInputChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewTestimonial({ ...newTestimonial, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Add or Edit Testimonial
  const handleSaveTestimonial = () => {
    if (editingIndex !== null) {
      let updatedTestimonials = [...testimonials];
      updatedTestimonials[editingIndex] = newTestimonial;
      setTestimonials(updatedTestimonials);
    } else {
      setTestimonials([...testimonials, newTestimonial]);
    }
    setNewTestimonial({ name: "", profession: "", details: "", image: null });
    setPreviewImage(null);
    setEditingIndex(null);
  };

  // Edit Testimonial
  const handleEditTestimonial = (index) => {
    setNewTestimonial(testimonials[index]);
    setPreviewImage(testimonials[index].image ? URL.createObjectURL(testimonials[index].image) : null);
    setEditingIndex(index);
  };

  // Delete Testimonial
  const handleDeleteTestimonial = (index) => {
    const filteredTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(filteredTestimonials);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Testimonials</h1>

      {/* Form to Add/Edit Testimonial */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{editingIndex !== null ? "Edit" : "Add"} Testimonial</h2>
        <div className="mb-4">
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={newTestimonial.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Profession</label>
          <input
            type="text"
            name="profession"
            value={newTestimonial.profession}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3"
            placeholder="Enter profession"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Short Details</label>
          <textarea
            name="details"
            value={newTestimonial.details}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3"
            placeholder="Enter short details"
            rows="3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Upload Image</label>
          <input type="file" onChange={handleImageUpload} className="mt-1 block w-full border border-gray-300 p-2 rounded-md" />
          {previewImage && <img src={previewImage} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-md" />}
        </div>
        <div className="flex space-x-4">
          <button onClick={handleSaveTestimonial} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
            {editingIndex !== null ? "Update" : "Add"} Testimonial
          </button>
          {editingIndex !== null && (
            <button onClick={() => setEditingIndex(null)} className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600">
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Display Testimonials */}
      {testimonials.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Testimonials List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                {testimonial.image && (
                  <img src={URL.createObjectURL(testimonial.image)} alt={testimonial.name} className="w-24 h-24 object-cover rounded-full mb-4" />
                )}
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.profession}</p>
                <p className="text-sm text-gray-500 mt-2">{testimonial.details}</p>
                <div className="mt-4 flex space-x-3">
                  <button onClick={() => handleEditTestimonial(index)} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteTestimonial(index)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPanel;
