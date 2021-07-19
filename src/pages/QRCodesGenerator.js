import React, {Fragment, useState} from 'react';
import QRCode from 'qrcode.react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/core';
import QRCodeInput from '../components/QRCodeInput';

const useStyles = makeStyles(() => ({
    card: {},
    cardContent: {
        textAlign: 'center',
    },
    qrcode: {},
    radiosCard: {},
    radios: {
        width: '100%',
        alignItems: 'center',
    },
    inputCard: {
        textAlign: 'center',
    },
    input: {
        marginTop: '10px',
        marginBottom: '10px',
        width: '100%',
    },
}));

function QRCodesGenerator() {
    const classes = useStyles();
    const [qrValue, setQrValue] = useState('');
    const handleQrValue = (content) => {
        setQrValue(content)
    }
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
                            renderAs="svg"
                        />
                    </CardContent>
                </Card>
                <Divider/>
                <QRCodeInput handleQrValue={handleQrValue}/>
            </Container>
        </Fragment>
    );
}

export default QRCodesGenerator;
