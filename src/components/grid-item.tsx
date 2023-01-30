

export const Griditem = () => {
    return (
        <div className="bg-green-400 min-w-[320px] shadow-xl sm:min-w-[340px] max-w-[400px] h-[400px] rounded-xl bg-gradient-to-r from-indigo-800 to-violet-800">
            <div className="flex flex-col m-4">
                <div className="IMG border-solid border-white border-2 h-[200px] rounded-xl">
                </div>
                <div className="pl-2">
                    <div className="TEXT text-white mt-4 font-bold">
                        <h3 className="text-lg">samuelarant.com v1</h3>
                        <p className="pt-2">
                            resources: s3, codepipeline, cloudfront, route53, ACM
                        </p>
                    </div>
                    <div className="LEARN MORE pt-4">
                        <button className="bg-orange-400 hover:bg-orange-500 pl-4 pr-4 pt-2 pb-2 rounded-xl text-sm font-bold">Learn More</button>
                    </div>
                </div>
            </div>      
        </div>   
);
}