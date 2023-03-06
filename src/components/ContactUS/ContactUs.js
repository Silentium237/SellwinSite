import React from "react";
import PopupWithInputFields from "./PopupWithInputFields";


export default function ContactUs (props){
    let lang = props.lang
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
    <div style={{height: 220, paddingTop: 20}}>
        <div style={{textAlign: "center",
            color: "white",
            fontSize: "calc( (100vw - 480px)/(1280 - 480) * (24 - 16) + 16px)",}} >
            {lang ? <>ПРИВЕТ. ЕСТЬ ВОПРОСЫ?</> : <>HELLO. HAVE QUESTIONS?</>}

        </div>
        <div style={{textAlign: "center",
            paddingTop: 20,
            paddingBottom: 40,
            color: "white",
            fontSize: "calc( (100vw - 480px)/(1280 - 480) * (20 - 14) + 14px)",}}>
            {lang ? <>СВЯЖИСЬ С НАМИ. МЫ БУДЕМ РАДЫ ОТВЕТИТЬ.</> : <>CONNECT WITH US. WE WILL BE HAPPY TO ANSWER.</>}

        </div>
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
            {lang ? <>СВЯЗАТЬСЯ</> : <>CONTACT US</>}

        </button>
    </div>
    <PopupWithInputFields handleClose={handleClose} handleClickOpen={handleClickOpen} open={open}  />


</>

    )

}