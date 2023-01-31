import { Griditem } from './grid-item'


export const Grid = () =>  { 
        const projects = [      
        { key: '1', title: 'samuelarant.com v1', resources: "resources: s3, codepipeline, cloudfront, route53, ACM", workflowLocation: require('../workflows/websitev1.png')},
        { key: '2', title: 'samuelarant.com v1', resources: "resources: s3, codepipeline, cloudfront, route53, ACM", workflowLocation: require('../workflows/websitev1.png')},
        { key: '3', title: 'samuelarant.com v1', resources: "resources: s3, codepipeline, cloudfront, route53, ACM", workflowLocation: require('../workflows/websitev1.png')}
    ];
    return (
        <div className="flex justify-center mt-10 pt-10 pb-10">
            <div className="">
                <Griditem projects={projects}/>
            </div>
        </div>
        
    );
};