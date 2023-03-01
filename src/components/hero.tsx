export const Hero = () => {
  return (
    <div className="bg-slate-400 rounded-lg m-2">
      <div className="flex flex-row p-4 flex-wrap justify-center">
        <div className="self-center">
          <img
            className="rounded-xl shadow-xl w-[380px] border-black border-solid border-2"
            src={require("../images/grandteton.JPEG")}
            alt=""
          />
        </div>

        <div className="flex-1 ml-4 flex flex-col flex-wrap justify-between rounded-lg min-w-[333px]">
          <div className="p-8 mb-4 text flex-1">
            <h1 className="text-3xl mb-4">Hello I'm Sam,</h1>
            <p className="text-xl">
              After previously persuing a career in the medical field, I am
              switching to tech, specifically the fast growing field of cloud
              computing. I have a strong background in computer science despite
              missing a CS degree. Currently, I focus mainly on the AWS platform
              but open to learning any platform.
            </p>
          </div>
          <div className="pt-4 pb-4 2xl:flex flex-row justify-start h-[200px] hidden">
            <div className="">
              <img
                className="hidden 2xl:block min-w-[150px] h-full"
                src={require("../icons/awsdeveloper.png")}
                alt=""
              />
            </div>

            <div className="">
              <img
                className="hidden 2xl:block min-w-[150px] h-full"
                src={require("../icons/awspractioner.png")}
                alt=""
              />
            </div>
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
