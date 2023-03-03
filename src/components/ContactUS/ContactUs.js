import React from "react";
import PopupWithInputFields from "./PopupWithInputFields";


export default function ContactUs (){
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    return(
<>
    <hr style={{marginTop: 50, opacity: 0.5}}/>
    <div style={{height: 300, paddingTop: 20}}>
        <h1 style={{textAlign: "center", color: "white"}}>
            ПРИВЕТ. КАК МЫ МОЖЕМ ТЕБЕ ПОМОЧЬ?
        </h1>
        <h2 style={{textAlign: "center", color: "white"}}>
            СВЯЖИСЬ С НАМИ. МЫ БУДЕМ РАДЫ ВЫСЛУШАТЬ.
        </h2>
        <button onClick={()=> handleClickOpen()} style={{width: 200,
            height: 45,
            color: "white",
            backgroundColor: "black",
            borderRadius: 20,
            margin: "auto",
            position: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "block",
            }}>
            СВЯЗАТЬСЯ
        </button>
    </div>
    <PopupWithInputFields handleClose={handleClose} handleClickOpen={handleClickOpen} open={open}  />


</>

    )

}