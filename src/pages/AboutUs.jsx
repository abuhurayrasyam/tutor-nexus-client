import React, { useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Link } from 'react-router';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useDocumentTitle("Tutor Nexus | About Us");

  return (
    <div className="bg-base-100 min-h-screen py-10 px-4 md:px-16 lg:px-24">
      <div className="w-11/12 mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-center">
          About Tutor Nexus
        </h1>
        <p className="text-lg text-neutral mb-10 text-center">
          Tutor Nexus is a dedicated platform that bridges the gap between language learners and experienced online tutors — fast, personalized, and secure.
        </p>

        <div className="bg-secondary p-6 md:p-10 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-primary mb-3">🎯 Our Mission</h2>
          <p className="text-gray-700 text-base">
            To make language learning accessible and effective by connecting students with skilled tutors worldwide. Our goal is to provide <strong>real-time, interactive, and customized</strong> learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border-l-4 border-primary">
            <h3 className="text-xl font-semibold mb-2 text-primary">🔍 Find a Tutor</h3>
            <p className="text-gray-600">
              Search for expert tutors based on language, rating, or price. Filter easily to match your needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border-l-4 border-primary">
            <h3 className="text-xl font-semibold mb-2 text-primary">📅 Book a Session</h3>
            <p className="text-gray-600">
              Choose your preferred time and confirm your session instantly. Learn when it’s convenient for you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border-l-4 border-primary">
            <h3 className="text-xl font-semibold mb-2 text-primary">📈 Learn & Improve</h3>
            <p className="text-gray-600">
              Join live sessions, track progress, and receive personalized feedback to help you grow quickly.
            </p>
          </div>
        </div>

        <div className="bg-secondary p-6 md:p-10 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">🌟 Why Choose Tutor Nexus?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Global Tutor Network</strong> – Access experienced tutors from different countries and backgrounds.</li>
            <li><strong>Flexible & Affordable</strong> – Learn on your own schedule and budget.</li>
            <li><strong>Secure & Trusted</strong> – Verified tutors and protected payments for peace of mind.</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-2">Ready to start your learning journey?</h3>
          <p className="text-neutral mb-4">Join Tutor Nexus now and book your first language session!</p>
          <Link to="/student/find-tutors" className="btn bg-primary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-md shadow">
            Find a Tutor
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;