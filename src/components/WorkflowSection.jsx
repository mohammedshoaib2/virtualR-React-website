import codeImg from "../assets/code_new.png";
import { checklistItems } from "../constants/index.jsx";
import { CheckCircle2 } from "lucide-react";
const WorkflowSection = () => {
  return (
    <div className="mt-20  flex flex-col justify-center items-center mx-[20px] sm:mx-[80px] ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 text-center">
        Accelerate Your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          Coding flow
        </span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <div className="w-full lg:w-[45%] ">
          <img src={codeImg} alt="" />
        </div>
        <div className="w-full lg:w-[45%] flex flex-col gap-10 ">
          {checklistItems.map((item, index) => {
            return (
              <div key={index} className="flex gap-10">
                <div className="bg-neutral-900 border border-green-400 p-2 rounded-full h-fit w-fit text-green-800">
                  <CheckCircle2 />
                </div>

                <div className=" flex flex-col gap-3">
                  <h5 className="text-lg">{item.title}</h5>
                  <p className="text-neutral-700 text-md">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
