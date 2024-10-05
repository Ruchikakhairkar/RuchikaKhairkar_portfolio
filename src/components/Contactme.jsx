import React, { useState } from "react";

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone is required";
    } else if (formData.phone.length < 10) {
      validationErrors.phone = "Phone must be at least 10 characters long";
    }

    setErrors(validationErrors);
    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitting form with data:", formData);

      fetch("http://localhost/Project/Ruchika_Khairkar/Backend/insert.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Form submission successful:", data);
          setSubmissionStatus("success");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setErrors({});
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setSubmissionStatus("error");
        });
    }
  };

  return (
    <>
      <section id="contactme">
        <div className="container mx-auto px-6 py-12 min-h-screen bg-cover bg-center">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Get In Touch</h1>
          </div>
          <div className="md:flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-4xl">
              <div className="md:flex">
                <div className="bg-gray-900 text-white p-8 md:w-1/3 m-2 rounded-2xl">
                  <h2 className="text-3xl font-semibold mt-6">Let's chat,</h2>
                  <p className="text-xl mt-4">
                    For inquiries, collaborations, or discussions, use the
                    form—I’m eager to connect!
                  </p>
                  <p className="text-xl">Let's create something together 🌟</p>
                </div>
                <div className="p-8 md:w-2/3">
                  <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="space-y-4"
                  >
                    <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
                      <div className="md:w-1/2 w-full">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="mt-1 block w-full border-b border-gray-500 p-2 cursor-pointer text-inputtext"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <p className="text-red-500">{errors.name}</p>
                        )}
                      </div>
                      <div className="md:w-1/2 w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="mt-1 block w-full border-b border-gray-500 p-2 cursor-pointer text-inputtext"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Your Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="mt-1 block w-full border-b border-gray-500 p-2 cursor-pointer text-inputtext"
                        placeholder="Phone no."
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <p className="text-red-500">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="mt-1 block w-full border-b border-gray-500 p-2 cursor-pointer text-inputtext"
                        rows="4"
                        placeholder="Write here your message..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-teal-600 cursor-pointer md:mb-3"
                      >
                        Send Message
                      </button>
                      {submissionStatus === "success" && (
                        <p className="text-green-500 text-center">
                          Form submitted successfully!
                        </p>
                      )}
                      {submissionStatus === "error" && (
                        <p className="text-red-500 text-center">
                          There was an error submitting the form.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactme;
