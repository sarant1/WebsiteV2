export const Footer = () => {
  return (
    <div className="h-40">
      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex justify-center items-center">
          <button>
            <a
              href="https://www.linkedin.com/in/samuel-arant-1999sl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:bg-gray-200 p-1 rounded-3xl duration-500 m-4"
                src={require("../icons/linkedin30.png")}
                alt=""
              />
            </a>
          </button>
          <button>
            <a
              href="https://github.com/sarant1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="hover:bg-gray-200 p-1 rounded-3xl duration-500 m-4"
                src={require("../icons/github30.png")}
                alt=""
              />
            </a>
          </button>
        </div>
        <div className="">Copyright@2023 HandCrafted by the Best</div>
      </div>
    </div>
  );
};
