export const Hero = () => {
    return (
        <div className="lg:pt-16 lg:pb-16 flex justify-center flex-row flex-wrap pt-4 pb-4 bg-green-600">
            <img className="w-[280px] rounded-lg shadow-xl" src={require('../images/grandteton.JPEG')} alt="" />
            <div className="w-[280px] ml-4 md:ml-8 lg:ml-16 lg:text-xl">
                <h1 className="mt-4 mb-4 lg:mb-8 lg:mt-4">Hi, I am Sam,</h1>
                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aspernatur, minima pariatur dolores quas 
                    eos quisquam consequatur unde officia accusamus! Tempora nobis 
                    atque cum quas temporibus ea ipsa deserunt mollitia maxime.</p>
            </div>
        </div>
    );
};