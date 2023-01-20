export const Navbar = () => {
    return (
        <div>
            <nav className="bg-blue-500">
                <nav className="h-16 flex flex-row justify-between items-center md:p-6 mr-5 ml-5 xl:ml-32 xl:mr-32">
                    <h3 className="text-2xl lg:text-3xl font-bold">Samuel Arant</h3>
                    <div>
                        <button><img className="h-10 md:hidden mt-1 hover:bg-white p-1" src={require("../icons/menubars.png")} alt=""/></button>
                    </div>
                    <div className="hidden md:visible md:flex flex-row font-bold lg:text-xl">
                        <div className="ml-4 md:ml-8 lg:ml-20 hover:underline">Contact Me</div>
                        <div className="ml-4 md:ml-8 lg:ml-20 hover:underline">Resume</div>
                        <div className="ml-4 md:ml-8 lg:ml-20 hover:underline">Projects</div>
                    </div>
                </nav>
            </nav> 
        </div>
    )
}