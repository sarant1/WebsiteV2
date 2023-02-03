

export const Griditem = ({projects}) => {

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(project => (
            <div key={project.key} className="rounded-xl bg-gradient-to-r from-indigo-800 to-violet-800 min-w-[320px] max-w-[380px] relative">
                <div className="flex flex-col m-4">
                    <div className="IMG border-solid border-white border-2 rounded-xl">
                        <img src={project.workflowLocation} alt=""/>
                    </div>
                    <div className="pl-2">
                        <div className="TEXT text-white mt-4 font-bold pb-16">
                            <h3 className="text-lg">{project.title}</h3>
                            <p className="pt-2">{project.resources}</p>
                        </div>
                    </div>
                    <div className="LEARN pt-4 absolute bottom-4 ml-2">
                        <button className="bg-orange-400 hover:bg-orange-500 pl-4 pr-4 pt-2 pb-2 rounded-xl text-sm font-bold">Learn More</button>
                    </div>
                </div>      
            </div>   
         ))}
        </div>
        
        
);
}