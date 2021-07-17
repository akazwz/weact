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

function QRCodeInput(props) {
    const classes = useStyles();
    const [content, setContent] = useState('');
    const [radioValue, setRadioValue] = useState('text');
    const handleTextContentChange = (e) => {
        setContent(e.target.value);
        props.handleQrValue(e.target.value)
    };
    const handleRadioChange = (e) => {
        setRadioValue(e.target.value)
    }

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
                            label="Text"
                        />
                        <FormControlLabel
                            value="wifi"
                            control={<Radio color="primary"/>}
                            label="WIFI"
                        />
                        <FormControlLabel
                            value="file"
                            control={<Radio color="primary"/>}
                            label="FILE"
                        />
                        <FormControlLabel
                            value="pic"
                            control={<Radio color="primary"/>}
                            label="PIC"
                        />
                    </RadioGroup>
                </FormControl>
            </Card>
            <Divider/>
            <Card className={classes.inputCard}>
                <FormControl className={classes.input}>
                    {radioValue === 'text' ? (<TextField
                        hidden={true}
                        id="content"
                        label="Content"
                        variant="outlined"
                        value={content}
                        fullWidth
                        multiline
                        size="medium"
                        onChange={handleTextContentChange}
                    />) : null}
                    {radioValue === 'wifi' ? (<h1>wifi</h1>) : null}
                    {radioValue === 'file' ? (<FileUpload/>) : null}
                    {radioValue === 'pic' ? (<h1>pic</h1>) : null}
                </FormControl>
            </Card>
        </div>
    );
}

export default QRCodeInput;
