import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// not found
function NotFound() {
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                <Typography>
                    <h1>404 NOT FOUND</h1>
                </Typography>
            </Container>
        </Fragment>
    );
}

export default NotFound