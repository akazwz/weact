import React, {useRef} from 'react';
import fileUpload from "../api/file";
import IConButton from '@material-ui/core/IconButton';

// props: icon accept handleFileUrl
function FileUpload(props) {
    const fileRef = useRef();
    let url = '';
    const handleInputChange = () => {
        let file = fileRef.current["files"][0];
        let formData = new FormData();
        formData.append('file', file);
        fileUpload(formData).then((res) => {
            if (res.status !== 200) {
                alert('server error');
            }
            const host = res.config.url;
            url = host + res.data.url;
            props.handleFileUrl(url);
        }).catch((err) => {
            alert('err:' + err);
        });
    };
    return (
        <div>
            <input
                id="contained-button-file"
                type="file"
                hidden ref={fileRef}
                onChange={handleInputChange}
                accept={props.accept}
            />
            <label htmlFor="contained-button-file">
                <IConButton variant="contained" color="primary" component="span" size="large">
                    {props.icon}
                </IConButton>
            </label>
        </div>
    );
}

export default FileUpload;
