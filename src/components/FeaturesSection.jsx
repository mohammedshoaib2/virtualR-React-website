import { features } from "../constants/index.jsx";
const FeaturesSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-5 sm:mx-20  mt-20 lg:mx-auto border-b border-neutral-900  ">
      <div className="flex justify-center items-center flex-col text-center">
        <span className="trigger-animate-move-up text-orange-500 bg-neutral-900 rounded-full uppercase px-2 py-1 font-medium text-sm">
          features
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl mt-10 lg:mt-20">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            your code
          </span>
        </h1>
      </div>
      <div className="mt-10 lg:mt-20 flex flex-wrap ">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="animate-move-up w-full sm:w-1/2 lg:w-1/3 "
            >
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;
{
  /* <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */
}
