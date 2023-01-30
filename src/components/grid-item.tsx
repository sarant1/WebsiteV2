

export const Griditem = ({projects}) => {

    return (
        <div className="grid grid-cols-[repeat(3,minmax(320px,400px))] gap-4">
            {projects.map(project => (
            <div className="rounded-xl bg-gradient-to-r from-indigo-800 to-violet-800">
                <div className="flex flex-col m-4">
                    <div className="IMG border-solid border-white border-2 h-[200px] rounded-xl mt-4">
                    </div>
                    <div className="pl-2">
                        <div className="TEXT text-white mt-4 font-bold">
                            <h3 className="text-lg">{project.title}</h3>
                            <p className="pt-2">{project.resources}</p>
                        </div>
                        <div className="LEARN pt-4">
                            <button className="bg-orange-400 hover:bg-orange-500 pl-4 pr-4 pt-2 pb-2 rounded-xl text-sm font-bold">Learn More</button>
                        </div>
                    </div>
                </div>      
            </div>   
         ))}
        </div>
        
        
);
}