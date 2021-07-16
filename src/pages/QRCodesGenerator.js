import React, {Fragment} from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

function QRCodesGenerator() {
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                <Typography>
                    <h1>this is qr generator</h1>
                </Typography>
            </Container>
        </Fragment>
    );
}

export default QRCodesGenerator;
