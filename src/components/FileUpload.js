import React, {useRef} from 'react';
import fileUpload from "../api/file";

function FileUpload() {
    const fileRef = useRef();
    const handleInputChange = () => {
        let file = fileRef.current["files"][0];
        let formData = new FormData();
        formData.append('file', file);
        fileUpload(formData).then((res) => {
            if (res.status !== 200) {
                alert('server error')
            }
            const {message} = res.data;
            alert(message);
        }).catch((err) => {
            alert('err:' + err)
        });
    }
    return (
        <div>
            <input type="file" ref={fileRef} onChange={handleInputChange}/>
        </div>
    );
}

export default FileUpload;
