import React from 'react';
import { useNavigate } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';

const LanguageCard = ({ language }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/student/find-tutors?language=${language.title}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer bg-secondary shadow-md border border-primary rounded-lg p-4 flex items-center justify-between hover:bg-[#F1EFEC]">
      <div className="flex items-center gap-3">
        <img src={language.logo} alt={language.title} className="w-10 h-10" />
        <h3 className="font-semibold text-primary">{language.title} Tutors</h3>
      </div>
      <FaArrowRight className="text-[#030303]" />
    </div>
  );
};

export default LanguageCard;
