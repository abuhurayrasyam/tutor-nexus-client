import React from 'react';
import { FaCheckCircle, FaClock, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaCheckCircle className="text-primary w-10 h-10 mb-4 mx-auto" />,
    title: 'Verified Tutors Only',
    description: 'Every tutor is vetted to ensure quality and authenticity.'
  },
  {
    icon: <FaClock className="text-primary w-10 h-10 mb-4 mx-auto" />,
    title: 'Flexible Scheduling',
    description: 'Book sessions at times that work for your lifestyle.'
  },
  {
    icon: <FaShieldAlt className="text-primary w-10 h-10 mb-4 mx-auto" />,
    title: 'Secure & Private',
    description: 'Protected by Firebase Auth and token-based access control.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-base-100 py-10">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Thousands Choose Tutor Nexus</h2>
        <p className="text-lg text-[#B6B09F] mb-12 max-w-2xl mx-auto">
          Discover why learners and tutors alike love using Tutor Nexus for a smarter, safer, and more flexible learning experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-accent rounded-2xl p-6 shadow-xl hover:shadow-xl transition duration-300"
            >
              {feature.icon}
              <h3 className="text-xl text-primary font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[#B6B09F]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;