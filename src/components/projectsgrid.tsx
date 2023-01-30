import { Griditem } from './grid-item'


export const Grid = () => {
    return (
        <div className="flex justify-center mt-10 pt-10 pb-10">
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
                <Griditem />
                <Griditem />
                <Griditem />
            </div>
        </div>
        
    );
};