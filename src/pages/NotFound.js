import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// not found
function NotFound() {
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                    <h1>404 NOT FOUND</h1>
            </Container>
        </Fragment>
    );
}

export default NotFound;
