

export const Resume = () => {
    return (
        <div className="bg-slate-600">
            <div className="xl:ml-52 xl:mr-52">
                <div className="flex flex-wrap justify-center items-center pt-20 pb-20">
                    <img className="w-[320px]" src={require('../icons/cv.png')} alt=""/>
                    <div className="ml-4 md:ml-12 2xl:ml-24">
                        <h1 className="text-5xl font-bold w-[320px] 2xl:w-[500px] mb-8 mt-8">Download or view my Resume from s3 !</h1>
                        <div className="flex justify-between">
                            <button className="bn632-hover bn24 m-0">Download</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );

}