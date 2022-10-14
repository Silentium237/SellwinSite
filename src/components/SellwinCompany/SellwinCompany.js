import React from "react";
import Paper from "@mui/material/Paper";
import kosmo from "./kosmo.png"
import oilMotor from "./oilMotor.png"
import SellwinGroup from "./SellwinGroup.png"
import sellwinPro from "./sellwinPro.png"

export default function SellwinCompany  ()  {
    return (
        <div style={{display: "flex", justifyContent: "space-around", paddingTop: 40}}>

            <Paper style={{padding: 5}}  elevation={3} >
                <span style={{width: 500, padding: 20}}>
                    <img src={kosmo}
                         style={{
                             width: 300,
                             height: 100}}/>
                </span>
            </Paper>

            <Paper style={{padding: 5}}  elevation={3} >
                <span style={{width: 500, padding: 20}}>
                  <img src={oilMotor}
                       style={{
                           width: 300,
                           height: 100}}/>
                </span>
            </Paper>

            <Paper style={{padding: 5}}  elevation={3} >
                <span style={{width: 500, padding: 20}}>
                  <img src={SellwinGroup}
                       style={{
                           width: 300,
                           height: 100}}/>
                </span>
            </Paper>

            <Paper style={{padding: 5}}  elevation={3} >
                <span style={{width: 500, padding: 20}}>
                  <img src={sellwinPro}
                       style={{
                           width: 300,
                           height: 100}}/>
                </span>
            </Paper>
        </div>
    )
}