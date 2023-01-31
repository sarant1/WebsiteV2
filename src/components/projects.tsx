import { Grid } from './projectsgrid';


export const Projects = () => {
    return (
        <div className="pt-10 bg-slate-300">
            <div className="ml-4 mr-4 2xl:ml-52 2xl:mr-52 pb-10">
                <h1 className="flex justify-center text-center text-5xl font-bold pt-10">Projects & Hands On</h1>
                <div>
                    <Grid />
                </div>
            </div>
        </div>
    );
};