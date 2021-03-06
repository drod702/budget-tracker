import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';

const CustomizedSnackbar = ({ open, setOpen}) => {
    const classes = useStyles();

    const handleClose = (e, reason) => {
        if(reason === 'clickway') return;

        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin = {{ vertical: 'top', horizontal: 'right'}}
                open = { open }
                autoHideDuration = {8000}
                onClose = {handleClose}
            >
                <MuiAlert onClose ={handleClose} severity = "success" elevation = {6} variant = 'filled'>
                Transaction successfully created.
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default CustomizedSnackbar
