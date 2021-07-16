import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// test page
function TestPage() {
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                <Typography>
                    <h1>this is test page</h1>
                </Typography>
            </Container>
        </Fragment>
    );
}

export default TestPage;
