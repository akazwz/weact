import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// homepage
function HomePage() {
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                <Typography>
                    <h1>this is home page</h1>
                </Typography>
            </Container>
        </Fragment>
    );
}

export default HomePage;
