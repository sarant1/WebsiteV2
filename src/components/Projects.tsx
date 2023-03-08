import cruddurlogical from "../workflows/cruddurlogical.png";
import watermarklogical from "../workflows/pdfwatermarker.png";
import s3website from "../workflows/s3website.png";
import githubsvg from "../icons/github.svg";

export function Projects() {
  const projects = [
    {
      title: "Cruddur (AWS Cloud Bootcamp Project)",
      note: "in progress",
      workflow: require("../workflows/cruddurlogical.png"),
    },
    {
      title: "Serverless PDF Watermark Tool",
      note: "",
      workflow: require("../workflows/pdfwatermarker.png"),
    },
    {
      title: "Website v1",
      note: "current config is docker container on nginx on ec2!",
      workflow: require("../workflows/s3website.png"),
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
          <div className="border-black border-4 border-solid rounded-lg mb-10">
            <h3 className="text-center p-5 font-bold text-2xl">
              {project.title}
            </h3>
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
