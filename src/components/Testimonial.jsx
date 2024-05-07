import React from "react";
import { testimonials } from "../constant";

function Testimonial() {
  return (
    <div className="mt-10 tracking-wide">
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20">
        What People are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-md p-6 text-md border border-neutral-800 font-thin rounded-md">
              <p>{testimonial.text}</p>
              <div className="flex items-start mt-8">
                <img
                  src={testimonial.image}
                  className="w-12 h-12 rounded-full border border-neutral-300 mr-6"
                  alt={testimonial.user}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
