import React, { useState } from 'react';
import { questions } from './Faq'; // Import your questions array from Faq.js
import Myaccordion from './Myaccordion';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#F9F8FD] flex flex-col gap-12 md:gap-24 w-full justify-center items-center px-4 py-8">
        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <div className="mt-9 px-6 py-3 bg-[#3D55CC1A] w-fit flex gap-2 rounded-3xl text-[#3D55CC] font-medium text-lg leading-tight">
            FAQ
          </div>
          <p className="text-[#000000] font-semibold text-xl md:text-2xl lg:text-3xl leading-tight">
            Get the Answers You're Looking For
          </p>
          <p className="text-[#828282] font-normal text-sm md:text-lg leading-snug">
            Quickly find clear answers to common questions about our services. Explore below to get the information you need!
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-screen-lg justify-center items-start">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {questions.slice(0, 3).map((item, index) => (
              <Myaccordion 
                key={item.id}
                question={item.question} 
                answer={item.answer}
                isActive={activeIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {questions.slice(3).map((item, index) => (
              <Myaccordion 
                key={item.id}
                question={item.question} 
                answer={item.answer}
                isActive={activeIndex === index + 3}
                onClick={() => toggleAccordion(index + 3)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
