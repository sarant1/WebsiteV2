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

        axios.post('https://httpbin.org/post', {
            body: file,
            headers: {
                'content-type': file.type,
                'content-length': `${file.size}`,
            },
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }


    return (
        <div>
            <input onChange={handleFileChange} type="file"></input>
            <button onClick={handleUploadClick} className="border-black border-2 border-solid rounded-lg p-1">Upload</button>
        </div>
    );
};