import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PopupWithInputFields(props){
    let handleClose = props.handleClose
    let handleClickOpen = props.handleClickOpen
    let open = props.open

    return (
        <div>
            {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
            {/*    Open form dialog*/}
            {/*</Button>*/}
            <Dialog open={open} onClose={handleClose} style={{padding:20}}>
                <DialogTitle>Presentation form</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To receive feedback, please complete these three fields and click send.
                        {/*Чтобы получить обратную связь, заполните эти три поля и нажмите «Отправить».*/}

                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="Name"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Phone"
                        type="phone"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {/*<Button onClick={handleClose}>Отправить</Button>*/}
                    <Button onClick={handleClose}>Send</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}