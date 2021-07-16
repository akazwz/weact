import React, {Fragment, useState, useEffect} from 'react';
import QRCode from 'qrcode.react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {},
    cardContent: {
        textAlign: 'center'
    },
    qrcode: {
    }
}))

function QRCodesGenerator() {
    const classes = useStyles();
    const [qrValue, setQrValue] = useState('');
    const [content, setContent] = useState('');
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    useEffect(function () {
        setQrValue(content)
    }, [content])
    return (
        <Fragment>
            <Container maxWidth={"sm"}>
                <CssBaseline/>
                <Card>
                    <CardContent className={classes.cardContent}>
                        <QRCode
                            className={classes.qrcode}
                            value={qrValue}
                            size={150}
                        />
                    </CardContent>
                </Card>
                <Tabs>
                    <Tab />
                </Tabs>
                <TextField
                    id="content"
                    label="Content"
                    variant="outlined"
                    value={content}
                    onChange={handleContentChange}
                />
            </Container>
        </Fragment>
    );
}

export default QRCodesGenerator;
