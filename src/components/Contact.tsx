import axios from "axios";
import { useState } from "react";
import ContactMeDiagram from "../workflows/ContactMeDiagram.png";

export function Contact() {
  var payload = new FormData();
  const url =
    "https://97lbi46pbh.execute-api.us-east-1.amazonaws.com/dev/contact";
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    axios
      .post(url, { body: data })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(data);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newData = { ...data };
    newData[e.currentTarget.id] = e.currentTarget.value;
    setData(newData);
    console.log(data);
  };

  const handleChangeTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const newData = { ...data };
    newData[e.currentTarget.id] = e.currentTarget.value;
    setData(newData);
    console.log(data);
  };

  return (
    <div>
      <div className="m-2 flex gap-1">
        <div className="bg-zinc-900 shadow-lg rounded-lg overflow-hidden flex-1">
          <div className="py-4 px-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-100">
              Contact Me!
            </h2>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-4">
                <label className="block text-gray-100 font-bold mb-2">
                  Name
                </label>
                <input
                  onChange={handleChange}
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-100 font-bold mb-2">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-100 font-bold mb-2">
                  Message
                </label>
                <textarea
                  onChange={handleChangeTextArea}
                  className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex ">
                <button
                  className="bn632-hover bn24 m-0 text-center flex justify-center items-center"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
            <p className="text-gray-600 text-xs">
              Have any questions or just want to say hello? Fill out the form
              and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="border-solid border-4 border-zinc-900 flex-1 rounded-lg lg:inline hidden p-2 items-center">
          <div className="w-full h-full flex items-center">
            <img src={ContactMeDiagram} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
