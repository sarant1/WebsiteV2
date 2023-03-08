export const Hero = () => {
  return (
    <div className="bg-slate-400 rounded-lg m-2">
      <div className="flex flex-row flex-wrap justify-center m-2">
        <div className="self-center">
          <img
            className="rounded-xl shadow-xl w-[380px] border-black border-solid border-2"
            src={require("../images/grandteton.JPEG")}
            alt=""
          />
        </div>

        <div className="flex-1 md:ml-2 lg:ml-4 flex flex-col flex-wrap justify-between rounded-lg min-w-[333px]">
          <div className="lg:px-8 py-4 text flex-1">
            <h1 className="text-3xl mb-2 mt-2">Hello I'm Sam,</h1>
            <p className="text-base indent-8 mb-2">
              After previously persuing a career in the medical field, I am
              switching to tech, specifically the fast growing field of cloud
              computing. My dream job would be working with in cloud, linux,
              and/or full-stack development. I have a strong understanding of
              computer science despite having a biomedical degree. I focus
              mainly on the AWS platform, but am interested in working with
              Azure and GCP as well.
            </p>
            <p className="text-base indent-8">
              I enjoy learning about serverless services like Lambda, API
              gateway, SQS, SNS, etc. Currently I utilize python and javascript
              for all my projects. I am always open to learning new things and
              my main goal is to learn and improve my skills every day. I'm
              completely self taught and I will never give up!
            </p>
          </div>
          <div className="p-4 flex flex-row h-[200px] justify-center sm:justify-start items-center">
            <div>
              <img
                className="h-[150px]"
                src={require("../icons/awsdeveloper.png")}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[150px]"
                src={require("../icons/awspractioner.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
