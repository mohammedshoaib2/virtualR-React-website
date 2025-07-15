import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex justify-center mx-6 items-center flex-col">
      <h1 className="text-3xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-linear-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
          {" "}
          for <br /> developers
        </span>
      </h1>

      <p className="max-w-4xl text-center mt-10 text-neutral-500">
        Empower your craetivity and bring your VR app ideas to life with our
        initiative development tools.Get started today and turn your imagination
        into impressive reality
      </p>

      <div className="flex-col-reverse sm:flex-row flex justify-center items-center mt-10 gap-4">
        <a
          className="px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md"
          href="#"
        >
          Start for free
        </a>
        <a className="px-4 py-3  rounded-md border " href="#">
          Documentation
        </a>
      </div>

      <div className=" max-w-[80%] flex w-full  mt-10 gap-10 justify-center items-center">
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-full lg:w-1/2 bg-gradient-to-r from-orange-500 to-orange-900 mx-2 my-4  p-[.5px]"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          className="rounded-lg w-1/2 hidden lg:block bg-gradient-to-r  from-orange-500 to-orange-900 mx-2 my-4 p-[.5px]"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
