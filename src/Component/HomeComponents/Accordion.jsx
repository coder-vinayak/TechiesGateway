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
    <div className='bg-[#F9F8FD] flex flex-col gap-24 w-full m-[0em] p-[0em] border-[0em] justify-center items-center'>
    <div className='flex flex-col gap-3 w-full m-[0em] p-[0em] border-[0em] justify-center items-center'>
    <div className='mt-[36px] px-6 py-3 border-0 bg-[#3D55CC1A] w-fit flex gap-[10px] rounded-[24px] text-[#3D55CC] font-[400] text-[18px] text-center leading-[21.78px]'>
      FAQ
    </div>
    <p className='text-[#000000] font-[600] text-[32px] text-center leading-[38.73px]'>
    Get the Answers You're Looking For
    </p>
    <p className='text-[#828282] font-[400] text-[18px] text-center leading-[21.78px]'>
    Quickly find clear answers to common questions about our services. Explore below to get the information you need!    </p>
    </div>
    <div className='flex'>
    <div className='flex flex-col gap-4 p-4 justify-start items-start'>
      {questions.map((item, index) => (
        index<3 &&
        <Myaccordion 
          key={item.id}
          question={item.question} 
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
      
    </div>
    <div className='flex flex-col gap-4 p-4 justify-start items-start'>
      {questions.map((item, index) => (
        index>=3 &&
        <Myaccordion 
          key={item.id}
          question={item.question} 
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
      
    </div>
    </div>
    
    </div>
    </>
  );
}

export default Accordion;
