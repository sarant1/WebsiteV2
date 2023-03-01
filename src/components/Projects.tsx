import cruddurlogical from "../workflows/cruddurlogical.png";
import watermarklogical from "../workflows/pdfwatermarker.png";
import s3website from "../workflows/s3website.png";

export function Projects() {
  return (
    <div className="p-2">
      <div>
        <h1 className="text-4xl font-bold p-10 text-center">
          Projects/Hands On
        </h1>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div className="border-black border-4 border-solid rounded-lg mb-10">
          <h3 className="text-center p-5 font-bold text-2xl">
            Cruddur (AWS Cloud Bootcamp Project)
          </h3>
          <h5 className="text-center text-gray-500  ">in progress...</h5>
          <div className="flex justify-center">
            <img src={cruddurlogical} alt="" className="w-full" />
          </div>
        </div>

        <div className="border-black border-4 border-solid rounded-lg mb-10">
          <h3 className="text-center p-5 font-bold text-2xl">
            Serverless PDF Watermark Tool
          </h3>
          <div className="flex justify-center">
            <img src={watermarklogical} alt="" className="w-full" />
          </div>
        </div>

        <div className="border-black border-4 border-solid rounded-lg mb-10">
          <h3 className="text-center p-5 font-bold text-2xl">S3 Website v1 </h3>
          <div className="flex justify-center">
            <img src={s3website} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

// src={require('../icons/cv.png')} alt=""
