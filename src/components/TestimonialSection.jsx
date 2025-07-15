import { testimonials } from "../constants/index.jsx";

const TestimonialSection = () => {
  return (
    <div className="flex  items-center flex-col mt-10 lg:mt-20 mx-[20px] lg:mx-auto border-b border-neutral-800">
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-20">
        What people are saying
      </h2>

      <div className="flex flex-wrap mb-20">
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="px-6 py-6 border border-neutral-900 rounded mx-1 md:mx-4 lg:mx-4 my-2 ">
                <p className="text-md text-neutral-500">{testimonial.text}</p>
                <div className="flex gap-4 mt-5">
                  <img
                    className="h-12 w-12 border border-neutral-400 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />
                  <div>
                    <p className="text-md font-light text-neutral-400">
                      {testimonial.user}
                    </p>
                    <p className="text-md font-light italic text-neutral-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
