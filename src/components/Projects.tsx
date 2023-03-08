import githubsvg from "../icons/github.svg";

export function Projects() {
  const projects = [
    {
      key: 1,
      title: "Cruddur (AWS Cloud Bootcamp Project)",
      note: "in progress...",
      workflow: require("../workflows/cruddurlogical.png"),
      github: "https://github.com/sarant1/aws-bootcamp-cruddur-2023",
    },
    {
      key: 2,
      title: "Serverless PDF Watermark Tool",
      note: "",
      workflow: require("../workflows/pdfwatermarker.png"),
      github: "https://github.com/sarant1/pdfconverter",
    },
    {
      key: 3,
      title: "Website v1",
      note: "current config is docker container running nginx on ec2!",
      workflow: require("../workflows/s3website.png"),
      github: "https://github.com/sarant1/samuelarant.com",
    },
  ];
  return (
    <div className="p-2">
      <div>
        <h1 className="text-4xl font-bold p-10 text-center">
          Projects/Hands On
        </h1>
      </div>
      <div className="flex justify-center flex-col items-center">
        {projects.map((project) => (
          <div
            key={project.key}
            className="border-black border-4 border-solid rounded-lg mb-5"
          >
            <div className="flex flex-row justify-center flex-wrap">
              <h2 className="p-5 font-bold text-2xl text-center">
                {project.title}
              </h2>
              <button className="hidden lg:block">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="hover:bg-gray-400 p-2 rounded-3xl duration-500 m-4"
                    src={githubsvg}
                    alt=""
                  ></img>
                </a>
              </button>
            </div>

            <h5 className="text-center text-gray-500  ">{project.note}</h5>
            <div className="flex justify-center">
              <img src={project.workflow} alt="" className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// src={require('../icons/cv.png')} alt=""
