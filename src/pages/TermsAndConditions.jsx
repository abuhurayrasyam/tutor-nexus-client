import React from 'react';

const termsData = {
  title: "Terms & Conditions",
  intro:
    "Welcome to Tutor Nexus. These terms and conditions outline the rules and regulations for the use of our platform. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Tutor Nexus if you do not agree to take all of the terms and conditions stated on this page.",
  sections: [
    {
      heading: "1. Account Registration",
      content:
        "Users must register an account with accurate, current, and complete information. You are responsible for maintaining the confidentiality of your login credentials."
    },
    {
      heading: "2. Booking & Payments",
      content:
        "All bookings must be made through the platform. Users are responsible for ensuring payment details are accurate and legitimate. We are not liable for any payment-related issues."
    },
    {
      heading: "3. Code of Conduct",
      content:
        "Tutors and learners must interact respectfully. Any form of harassment, discrimination, or abuse will result in account termination."
    },
    {
      heading: "4. Content Ownership",
      content:
        "Content shared or uploaded by users remains their property. However, by uploading content, users grant Tutor Nexus a non-exclusive license to use, display, and distribute it."
    },
    {
      heading: "5. Termination",
      content:
        "We reserve the right to suspend or terminate accounts that violate these terms or harm the integrity of our platform."
    },
    {
      heading: "6. Changes to Terms",
      content:
        "We may revise these terms from time to time. Continued use of the platform constitutes acceptance of the updated terms."
    }
  ],
  contact:
    "If you have any questions about these Terms and Conditions, please contact us at support@tutor-nexus.com."
};

const TermsAndConditions = () => {
  return (
    <div className="bg-base-100 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-6">
          {termsData.title}
        </h1>

        <p className="mb-4 text-neutral">{termsData.intro}</p>

        {termsData.sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold mt-8 mb-2">{section.heading}</h2>
            <p className="mb-4 text-neutral">{section.content}</p>
          </div>
        ))}

        <p className="mt-8 text-sm text-center text-neutral">{termsData.contact}</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;