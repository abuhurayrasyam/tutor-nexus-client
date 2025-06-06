import React from 'react';
import LanguageCard from './LanguageCard';

const languages = [
  { title: 'Arabic', logo: 'https://cdn-icons-png.freepik.com/256/13980/13980429.png?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid' },
  { title: 'English', logo: 'https://cdn-icons-png.freepik.com/256/12360/12360604.png?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid' },
  { title: 'Spanish', logo: 'https://cdn-icons-png.freepik.com/256/16022/16022729.png?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid' },
  { title: 'French', logo: 'https://cdn-icons-png.freepik.com/256/3909/3909323.png?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid' },
  { title: 'Portuguese', logo: 'https://cdn-icons-png.freepik.com/256/8362/8362818.png?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid' },
  { title: 'Chinese', logo: 'https://cdn-icons-png.freepik.com/256/10576/10576583.png?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid' },
  { title: 'Japanese', logo: 'https://cdn-icons-png.freepik.com/256/13980/13980688.png?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid' },
  { title: 'Korean', logo: 'https://cdn-icons-png.freepik.com/256/5111/5111586.png?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid' },
  { title: 'Bengali', logo: 'https://cdn-icons-png.freepik.com/256/13980/13980173.png?uid=R83316384&ga=GA1.1.130173900.1746345150&semt=ais_hybrid' },
];

const LanguageCategorySection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-11/12 mx-auto my-10">
      {languages.map((language, index) => (
        <LanguageCard key={index} language={language} />
      ))}
    </div>
  );
};

export default LanguageCategorySection;
