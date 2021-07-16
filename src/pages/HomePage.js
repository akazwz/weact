import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

// homepage
function HomePage() {
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                    <h1>this is home page</h1>
            </Container>
        </Fragment>
    );
}

export default HomePage;
