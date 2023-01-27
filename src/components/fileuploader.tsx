import { ChangeEvent, useState } from 'react';
import axios from 'axios';

export const FileUpload = () => {

    const [file, setFile] = useState<File>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    const handleUploadClick = () => {
        if (!file) {
            return;
        }

        axios.put('https://2w9tkf6bjb.execute-api.us-east-1.amazonaws.com/v1/api-gateway-to-s3-1013/yesir123.jpeg', file, {
            headers: {
                'Content-Type': file.type
            }
        })
        .then((res) => console.log(res))
        .then((res) => console.log(file.type))
        .catch((error) => console.log(error));

    }


    return (
        <div>
            <button onClick={() => {
                console.log(file?.type)
            }}>Type Button</button>
            <input onChange={handleFileChange} type="file"></input>
            <button onClick={handleUploadClick} className="border-black border-2 border-solid rounded-lg p-1 mr-24">Upload</button>
        </div>
    );
};