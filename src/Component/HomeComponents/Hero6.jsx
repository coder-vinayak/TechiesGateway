import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Data for testimonials
  const testimonials = [
    {
      name: 'Prem Kumar',
      profession: 'Youtuber',
      text: 'This SMM panel boosted our social media with thousands of real followers in days. Customizable packages and instant results made a huge difference. Highly recommend!',
      avatar: '/path_to_prem_image',
    },
    {
      name: 'John Doe',
      profession: 'Influencer',
      text: 'Excellent service and fast delivery. My engagement has skyrocketed!',
      avatar: '/path_to_john_image',
    },
  ];

  return (
    <div id='Hero6image' className="relative h-full w-full bg-gray-100 py-10 md:py-16">
      <div className='flex flex-col items-center gap-3'>
        <div className='px-6 py-3 bg-indigo-50 w-fit flex gap-2 rounded-2xl text-indigo-600 font-medium text-lg'>
          Testimonials
        </div>
      </div>

      {/* Testimonial Slider */}
      <div className="text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-2 mb-6 md:mb-8 px-4 max-w-xl mx-auto">
          Discover how our fast results and top support have elevated social media for our clients.
        </p>

        {/* Slick slider */}
        <div className="max-w-md mx-auto px-4"> {/* Centered slider */}
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4"
                />
                <h3 className="text-lg md:text-xl font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.profession}</p>
                <p className="mt-4 text-gray-700 text-sm md:text-base">{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
