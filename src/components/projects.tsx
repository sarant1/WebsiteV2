import { Grid } from './projectsgrid';


export const Projects = () => {
    return (
        <div className="bg-slate-400 mt-10 ">
            <div className="md:ml-32 md:mr-32 2xl:ml-52 2xl:mr-52 bg-white pb-10">
                <h1 className="flex justify-center text-center text-5xl font-bold pt-10">Projects & Hands On</h1>
                <div>
                    <Grid />
                </div>
            </div>
        </div>
    );
};