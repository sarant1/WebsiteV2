
export const Grid = () => {
    return (
        <div className="flex justify-center mt-10 pt-10 pb-10">
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
                <div className="bg-green-400 min-w-[320px] shadow-xl sm:min-w-[340px] max-w-[400px] h-[400px] rounded-xl bg-gradient-to-r from-violet-800 to-indigo-800">Project 1</div>
                <div className="bg-green-400 min-w-[320px] shadow-xl sm:min-w-[340px] max-w-[400px] h-[400px] rounded-xl bg-gradient-to-r from-violet-800 to-indigo-800">Project 2</div>
                <div className="bg-green-400 min-w-[320px] shadow-xl sm:min-w-[340px] max-w-[400px] h-[400px] rounded-xl bg-gradient-to-r from-violet-800 to-indigo-800">Project 3</div>
            </div>
        </div>
        
    );
};