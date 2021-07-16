import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {useTranslation} from 'react-i18next';

// test page
function TestPage() {
    const {t} = useTranslation();
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                    <h1>{t('test.title')}</h1>
            </Container>
        </Fragment>
    );
}

export default TestPage;
