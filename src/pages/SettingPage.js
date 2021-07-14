import React, {Fragment} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import LanguageSetting from "../components/LanguageSetting";
import DarkModeSetting from "../components/DarkModeSetting";

function SettingPage() {
    return (
        <Fragment>
            <CssBaseline/>
            <Container maxWidth="sm">
                <LanguageSetting/>
                <Divider/>
                <DarkModeSetting/>
            </Container>
        </Fragment>
    )
}

export default SettingPage
