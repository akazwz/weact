import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles} from '@material-ui/core/styles';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles(() => ({
    input: {
        width: '80%',
        margin: '10px',
    },
    password: {
        marginTop: '10px',
    },
}))

function WIFIInput() {
    const classes = useStyles();
    const [network, setNetwork] = useState({
        ssid: '',
        encryptionMode: 'WPA',
        password: '',
    });
    const handleSSIDChange = (e) => {
        setNetwork({
            ...network,
            ssid: e.target.value,
        });
    };
    const handlePasswordChange = (e) => {
        setNetwork({
            ...network,
            password: e.target.value,
        });
    };
    const handleEncryptionChange = (e) => {
        setNetwork({
            ...network,
            encryptionMode: e.target.value,
        });
        if (e.target.value === 'nopass') {
            setNetwork({
                ...network,
                encryptionMode: e.target.value,
                password: '',
            })
        }
    };
    return (
        <div>
            <FormControl className={classes.input}>
                <TextField
                    id="ssid"
                    label="NetworkName"
                    variant="outlined"
                    value={network.ssid}
                    onChange={handleSSIDChange}
                />
                {network.encryptionMode !== 'nopass' ? (<TextField
                    className={classes.password}
                    id="password"
                    label="Password"
                    variant="outlined"
                    value={network.password}
                    onChange={handlePasswordChange}
                />) : null}
            </FormControl>
            <FormControl>
                {"Encryption"}
                <RadioGroup
                    row aria-label="choose encryption type"
                    name="encryption"
                    defaultValue=""
                    value={network.encryptionMode}
                    onChange={handleEncryptionChange}
                >
                    <FormControlLabel
                        value="nopass"
                        control={<Radio color="primary"/>}
                        label="None"/>
                    <FormControlLabel
                        value="WPA"
                        control={<Radio color="primary"/>}
                        label="WPA/WPA2"/>
                    <FormControlLabel
                        value="WEP"
                        control={<Radio color="primary"/>}
                        label="WEP"/>
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default WIFIInput;
