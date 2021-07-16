import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// test page
function TestPage() {
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                    <h1>this is test page</h1>
            </Container>
        </Fragment>
    );
}

export default TestPage;
