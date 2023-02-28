export const Hero = () => {
  return (
    <div className="bg-slate-400 m-2 rounded-lg">
      <div className="flex flex-row justify-between">
        <img
          className="h-[300px] rounded-xl shadow-xl ml-4"
          src={require("../images/grandteton.JPEG")}
          alt=""
        />
        <div className="bg-slate-600 ml-5">
          <h1 className="">Hi, I am Sam,</h1>
          <p className="">
            After previously persuing a career in the medical field, I am
            switching to tech, specifically the fast growing field of cloud
            computing. I have a strong background in computer science despite
            missing a CS degree. Currently, I focus mainly on the AWS platform
            but open to learning any platform.
          </p>
        </div>

        <div className="pt-4 pb-4">
          <div className="w-[15vw]">
            <img
              className="hidden 2xl:block min-w-[150px] p-2"
              src={require("../icons/awsdeveloper.png")}
              alt=""
            />
          </div>

          <div className="w-[15vw]">
            <img
              className="hidden 2xl:block min-w-[150px] p-2"
              src={require("../icons/awspractioner.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="2xl:hidden flex pb-8 pt-8 flex-row justify-evenly">
        <img
          className="w-[17vw] min-w-[150px]"
          src={require("../icons/awspractioner.png")}
          alt=""
        />
        <img
          className="w-[17vw] min-w-[150px]"
          src={require("../icons/awsdeveloper.png")}
          alt=""
        />
      </div>
    </div>
  );
};
