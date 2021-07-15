import React, {Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import LanguageSetting from '../components/LanguageSetting';
import DarkModeSetting from '../components/DarkModeSetting';

// setting page
function SettingPage() {
    return (
        <Fragment>
            <CssBaseline/>
            <Container maxWidth="sm">
                <LanguageSetting/>

                <DarkModeSetting/>
            </Container>
        </Fragment>
    );
}

export default SettingPage
