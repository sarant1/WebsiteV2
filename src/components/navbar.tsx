export const Navbar = () => {
    return (
        <div>
            <div className="border-2 border-b-solid border-black rounded-md">
                <nav className="">
                    <nav className="h-20 flex flex-row justify-between items-center md:p-6 ml-4 mr-4 xl:ml-32 xl:mr-32 border-solid border-2">
                        <h3 className="text-2xl lg:text-3xl font-bold">Samuel Arant</h3>
                        <div>
                            <button><img className="h-10 md:hidden mt-1 rounded-3xl hover:bg-white p-1" src={require("../icons/menubars.png")} alt=""/></button>
                        </div>
                        <div className="hidden md:visible md:flex flex-row font-bold lg:text-xl">
                            <div className="ml-4 md:ml-8 lg:ml-20 hover:underline">Contact Me</div>
                            <div className="ml-4 md:ml-8 lg:ml-20 hover:underline">Resume</div>
                            <div className="ml-4 md:ml-8 lg:ml-20 hover:underline">Projects</div>
                        </div>
                    </nav>
                </nav> 
            </div>
        </div>
    )
}