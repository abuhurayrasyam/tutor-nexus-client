import React from 'react';
import { FaUserPlus, FaChalkboardTeacher, FaBookOpen, FaStar } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserPlus className="text-5xl text-[#D4C9BE] mx-auto mb-4" />,
    title: "Register & Explore",
    description:
      "Sign up using email or Google and start exploring tutors by category, language, and expertise.",
  },
  {
    icon: <FaChalkboardTeacher className="text-5xl text-[#D4C9BE] mx-auto mb-4" />,
    title: "Find & Connect with Tutors",
    description:
      "Browse tutor profiles, filter by language, price, or rating. Click to view details and book sessions.",
  },
  {
    icon: <FaBookOpen className="text-5xl text-[#D4C9BE] mx-auto mb-4" />,
    title: "Add & Manage Tutorials",
    description:
      "Tutors can post tutorials including their subject, language, price, and description — all editable anytime.",
  },
  {
    icon: <FaStar className="text-5xl text-[#D4C9BE] mx-auto mb-4" />,
    title: "Book & Review",
    description:
      "Book your chosen tutor, attend the session, and leave a review to help others find the right tutor too.",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="text-center px-4">
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-[#B6B09F]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;