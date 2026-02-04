import { useState } from 'react';

function ContactHero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form is valid, submit the data
    console.log('Form submitted:', formData);

    // Here you would typically send the data to your backend
    alert('Form submitted successfully!');

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      company: '',
      service: ''
    });
    setErrors({});
  };

  return (
    <section className="py-12 lg:py-24 relative overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-full max-h-116 md:max-h-128"
        src="images/contact-waves-bg-lime-half.png"
        alt=""
      />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-sm mb-6">
              Contact us
            </h1>
            <p className="text-lg text-gray-700 mb-16">
              We are here to help you make a first move to greener choice.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    className={`w-full px-4 py-3 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full ${
                      errors.fullName ? 'ring-2 ring-red-500' : ''
                    }`}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1 pl-4">{errors.fullName}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`w-full px-4 py-3 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full ${
                      errors.email ? 'ring-2 ring-red-500' : ''
                    }`}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 pl-4">{errors.email}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="company">
                    <span>Company</span>{' '}
                    <span className="text-gray-700">(optional)</span>
                  </label>
                  <input
                    className="w-full px-4 py-3 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-8">
                  <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="service">
                    Service
                  </label>
                  <div className="relative w-full bg-white rounded-full">
                    <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.3999 8.2L9.9999 11.8L13.5999 8.2"
                          stroke="#646A69"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <select
                      className={`w-full px-4 py-3 text-gray-600 border rounded-full appearance-none cursor-pointer outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 bg-transparent relative ${
                        errors.service ? 'ring-2 ring-red-500' : ''
                      }`}
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select service</option>
                      <option value="partner">Partner with us</option>
                      <option value="next-event">Our next event</option>
                    </select>
                  </div>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1 pl-4">{errors.service}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex w-full py-3 px-5 items-center justify-center font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                >
                  <span className="mr-2">Submit</span>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25 10H15.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 4.75L15.75 10L10.5 15.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;