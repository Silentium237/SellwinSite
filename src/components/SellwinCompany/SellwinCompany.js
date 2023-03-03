import React from "react";
import Paper from "@mui/material/Paper";
import kosmo from "./kosmo.png"
import oilMotor from "./oilMotor.png"
import SellwinGroup from "./SellwinGroup.png"
import sellwinPro from "./sellwinPro.png"

export default function SellwinCompany  ()  {
    let Width =window.innerWidth
    return (
        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", }}>


                <span style={{ padding: 20}}>
                    <img src={kosmo}
                         style={{
                             width: "100%",
                             }}/>
                </span>



                <span style={{ padding: 20}}>
                  <img src={oilMotor}
                       style={{
                           width: "100%",
                          }}/>
                </span>



                <span style={{ padding: 20}}>
                  <img src={SellwinGroup}
                       style={{
                           width: "100%",
                          }}/>
                </span>



                <span style={{ padding: 20}}>
                  <img src={sellwinPro}
                       style={{
                           width: "100%",
                           }}/>
                </span>

        </div>
    )
}