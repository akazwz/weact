import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core";
import FileUpload from "./FileUpload";
import {useTranslation} from 'react-i18next';
import WIFIInput from "./WIFIInput";


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
        margin: '10px',
        width: '100%',
    },
}));

function QRCodeInput(props) {
    const {t} = useTranslation();
    const classes = useStyles();
    const [qrValue, setQrValue] = useState('');
    const [radioValue, setRadioValue] = useState('text');
    const handleRadioChange = (e) => {
        setRadioValue(e.target.value)
    };
    const handleTextContentChange = (e) => {
        setQrValue(e.target.value);
        props.handleQrValue(qrValue);
    };
    return (
        <div>
            <Card className={classes.radiosCard}>
                <FormControl component="fieldset" className={classes.radios}>
                    <RadioGroup
                        row aria-label="choose type"
                        name="type"
                        defaultValue="text"
                        value={radioValue}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel
                            value="text"
                            control={<Radio color="primary"/>}
                            label={t('qrcode.text.title')}
                        />
                        <FormControlLabel
                            value="wifi"
                            control={<Radio color="primary"/>}
                            label={t('qrcode.wifi.title')}
                        />
                        <FormControlLabel
                            value="file"
                            control={<Radio color="primary"/>}
                            label={t('qrcode.file')}
                        />
                        <FormControlLabel
                            value="pic"
                            control={<Radio color="primary"/>}
                            label={t('qrcode.pic')}
                        />
                    </RadioGroup>
                </FormControl>
            </Card>
            <Divider/>
            <Card className={classes.inputCard}>
                <FormControl className={classes.input}>
                    {radioValue === 'text' ? (<TextField
                        id="qr-value"
                        label={t('qrcode.text.content')}
                        variant="outlined"
                        value={qrValue}
                        fullWidth
                        multiline
                        size="medium"
                        onChange={handleTextContentChange}
                    />) : null}
                    {radioValue === 'wifi' ? (<WIFIInput handleWIFIQrValue={props.handleQrValue}/>) : null}
                    {radioValue === 'file' ? (<FileUpload handleFileQrValue={props.handleQrValue}/>) : null}
                    {radioValue === 'pic' ? (<h1>pic</h1>) : null}
                </FormControl>
            </Card>
        </div>
    );
}

export default QRCodeInput;
