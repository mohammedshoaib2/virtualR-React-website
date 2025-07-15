import { pricingOptions } from "../constants/index.jsx";
import { Check } from "lucide-react";
const PricingSection = () => {
  return (
    <div className=" mx-[20px] lg:mx-auto flex flex-col justify-center items-center mt-20">
      <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Pricing</h1>

      <div className="w-full flex flex-wrap mt-20 gap-10 sm:px-8  lg:px-12 lg:justify-center ">
        {pricingOptions.map((price, index) => {
          return (
            <div
              key={index}
              className=" w-full md:w-[47%] lg:w-[30%] border  border-neutral-600 p-10 rounded-2xl"
            >
              <h5 className="text-4xl mb-10">
                {price.title}{" "}
                {price.title === "Pro" && (
                  <span className="text-lg bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
                    (Most Popular)
                  </span>
                )}
              </h5>
              <h4 className="text-5xl mb-10">
                {price.price}{" "}
                <span className="text-lg font-medium text-neutral-400">
                  /Month
                </span>
              </h4>
              <ul>
                {price.features.map((feature, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-start items-center gap-3 mb-5"
                    >
                      <Check className="h-4 w-4" />
                      <li className="text-lg ">{feature}</li>
                    </div>
                  );
                })}
              </ul>

              <div className="flex justify-center items-center mt-10">
                <a
                  href="#"
                  className="border border-orange-800 hover:bg-orange-800 w-full text-center py-3 rounded-lg"
                >
                  Subscribe
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingSection;
