export function Contact() {
  return (
    <div>
      <body className="m-2 flex gap-1">
        <div className="bg-zinc-900 shadow-lg rounded-lg overflow-hidden flex-1">
          <div className="py-4 px-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-100">
              Contact Me!
            </h2>
            <form className="mb-4">
              <div className="mb-4">
                <label className="block text-gray-100 font-bold mb-2">
                  Name
                </label>
                <input
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
        <div className="bg-zinc-900 flex-1 rounded-lg lg:inline hidden">
          Hello
        </div>
      </body>
    </div>
  );
}
