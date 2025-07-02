import React, { useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useDocumentTitle("Tutor Nexus | Contact Us");

  return (
    <div className="bg-base-100 min-h-screen py-12 px-4 md:px-16 lg:px-24">
      <div className="w-11/12 mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-neutral mb-10">
          Have questions or need assistance? We’re here to help you learn better!
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-accent rounded-xl p-6 shadow-md hover:shadow-xl border-l-4 border-primary transition-all">
            <FaPhoneAlt className="text-primary text-3xl mb-3 mx-auto" />
            <h3 className="text-lg text-primary font-semibold mb-1">Phone</h3>
            <p className="text-primary">+880 1500-000000</p>
          </div>

          <div className="bg-accent rounded-xl p-6 shadow-md hover:shadow-xl border-l-4 border-primary transition-all">
            <FaEnvelope className="text-primary text-3xl mb-3 mx-auto" />
            <h3 className="text-lg text-primary font-semibold mb-1">Email</h3>
            <p className="text-primary break-all">support@tutor-nexus.com</p>
          </div>

          <div className="bg-accent rounded-xl p-6 shadow-md hover:shadow-xl border-l-4 border-primary transition-all">
            <FaMapMarkerAlt className="text-primary text-3xl mb-3 mx-auto" />
            <h3 className="text-lg text-primary font-semibold mb-1">Address</h3>
            <p className="text-primary">Tutor Nexus HQ, Tangail-1980, Bangladesh</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-2">Need support?</h2>
          <p className="text-neutral mb-4">Our support team is here to assist you with any questions about tutors, sessions, or payments.</p>
          <a href="mailto:support@tutornexus.com">
            <button className="btn bg-primary text-accent hover:bg-secondary hover:text-neutral shadow-md px-6 py-2 rounded-md">
              Email Us Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;