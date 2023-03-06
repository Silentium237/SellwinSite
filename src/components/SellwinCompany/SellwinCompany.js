import React from "react";
import Paper from "@mui/material/Paper";
import kosmo from "./kosmo.png"
import oilMotor from "./oilMotor.png"
import sellwinGroup from "./SellwinGroup.png"
import sellwinPro from "./sellwinPro.png"

export default function SellwinCompany  (props)  {
    let lang = props.lang
    let Width =window.innerWidth

     const arrImg = [
         {
             img: kosmo
         },
         {
             img: oilMotor
         },
         {
             img: sellwinGroup
         },
         {
             img: sellwinPro
         },
     ]
    return (
        <>
            <hr style={{marginTop: 20, opacity: 0.5}}/>

            <div style={{textAlign: "center",
                fontSize: "calc( (100vw - 480px)/(1280 - 480) * (24 - 16) + 16px)",
                // fontWeight: "bold",
                padding: 10 ,
                paddingTop: 15,
                color: "white"
            }}>
                {lang ? <>НАШИ ПАРТНЕРЫ</> : <>OUR PARTNERS</>}</div>

            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", }}>

                {arrImg.map((item, index)=>(
                    <span key={index} style={{ padding: 20}}>
                    <img src={item.img}
                         style={{
                             width: "100%",
                         }}/>
                </span>
                ))}

            </div>
        </>

    )
}