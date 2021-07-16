import React, {Fragment, useState, useEffect} from 'react';
import QRCode from 'qrcode.react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


function QRCodesGenerator() {
    const [content, setContent] = useState();
    const [qrValue, setQrValue] = useState();
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    useEffect(function () {
        setQrValue(content)
    }, [content])
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                <Typography>
                    <h1>this is qr generator</h1>
                    <QRCode value={qrValue} size={175}/>
                    <TextField
                        id="content"
                        label="Outlined"
                        variant="outlined"
                        value={content}
                        onChange={handleContentChange}
                    />
                </Typography>
            </Container>
        </Fragment>
    );
}

export default QRCodesGenerator;
