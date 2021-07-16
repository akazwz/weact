import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {useTranslation} from 'react-i18next';

// homepage
function HomePage() {
    const {t} = useTranslation();
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                    <h1>{t('home.title')}</h1>
            </Container>
        </Fragment>
    );
}

export default HomePage;
