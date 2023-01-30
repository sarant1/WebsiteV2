import { Griditem } from './grid-item'
import { useState } from 'react'

export const Grid = () => {
    const [projects, addProject] = useState([
        { title: 'samuelarant.com v1', resources: "resources: s3, codepipeline, cloudfront, route53, ACM" },
        { title: 'samuelarant.com v1', resources: "resources: s3, codepipeline, cloudfront, route53, ACM" },
        { title: 'samuelarant.com v1', resources: "resources: s3, codepipeline, cloudfront, route53, ACM" }
    ])
    return (
        <div className="flex justify-center mt-10 pt-10 pb-10">
            <div className="">
                <Griditem projects={projects}/>
            </div>
        </div>
        
    );
};