import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div>
      <div className="border-b-2 border-black">
        <nav className="">
          <nav className="h-20 flex flex-row justify-between items-center md:p-6 ml-4 mr-4">
            <div className="flex flex-row items-center">
                <img className="max-w-[35px] max-h-[35px] mr-3" src={require("../icons/cloudsharkicon.png")} alt=""/>
              <Link to="">
                <h3 className="inline-block text-2xl lg:text-3xl font-bold">Samuel Arant</h3>
              </Link>
            </div>
            <div>
              <button>
                <img
                  className="h-10 md:hidden mt-1 rounded-3xl hover:bg-white p-1"
                  src={require("../icons/menubars.png")}
                  alt=""
                />
              </button>
            </div>
            <div className="hidden md:visible md:flex flex-row font-bold lg:text-xl">
              <Link to="contact" smooth={true}>
                <button className="ml-4 md:ml-8 lg:ml-20 hover-underline-animation">
                  Contact Me
                </button>
              </Link>
              <Link
                to="resume"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-70}
              >
                <button className="ml-4 md:ml-8 lg:ml-20 hover-underline-animation ">
                  Resume
                </button>
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-70}
              >
                <button className="ml-4 md:ml-8 lg:ml-20 hover-underline-animation ">
                  Projects
                </button>
              </Link>
            </div>
          </nav>
        </nav>
      </div>
    </div>
  );
};
