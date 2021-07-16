import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import QRCode from 'qrcode.react';

function QRCodesGenerator() {
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                <Typography>
                    <h1>this is qr generator</h1>
                    <QRCode value={"this is qr code"} size={175}/>
                </Typography>
            </Container>
        </Fragment>
    );
}

export default QRCodesGenerator;
