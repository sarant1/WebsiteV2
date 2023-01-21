import axios from 'axios';
import { useState, ChangeEvent } from 'react'




export const FileUpload = () => {
    
    const [selectedFile, setSelectedFile] = useState<File>();

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleSubmission = () => {
        if (!selectedFile) {
            return;
        }
        axios.put('https://po6fd8myk1.execute-api.us-east-1.amazonaws.com/v1/fromapigateway-1228', selectedFile, {
            headers: {
                'Content-type': 'application/json',
                'accept': 'image/jpeg'
            }
        })
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error))
        
        console.log(selectedFile);
    };


    return (
        <div>
            <input onChange={changeHandler} type="file"/>
            <button onClick={handleSubmission} className="border-solid border-2 border-orange-400 rounded-lg p-1">Upload</button>
        </div>
    );
};