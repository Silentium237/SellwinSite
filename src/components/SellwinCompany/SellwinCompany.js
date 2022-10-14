import React from "react";
import Paper from "@mui/material/Paper";

export default function SellwinCompany  ()  {
    return (
        <div style={{display: "flex", justifyContent: "space-around", paddingTop: 40}}>

            <Paper style={{padding: 5}}  elevation={3} >
                <span style={{width: 500, padding: 20}}>
                    <img src="http://sellwin-system.by/upload/iblock/f98/f9821004d1c1617cbeb85983ca15163d.png"
                         style={{
                             width: 300,
                             height: 100}}/>
                </span>
            </Paper>

            <Paper style={{padding: 5}}  elevation={3} >
                <span style={{width: 500, padding: 20}}>
                  <img src="http://sellwin-system.by/upload/iblock/bfb/bfb2a131e3c65a66938a8c6acfbbbe24.png"
                       style={{
                           width: 300,
                           height: 100}}/>
                </span>
            </Paper>

            <Paper style={{padding: 5}}  elevation={3} >
                <span style={{width: 500, padding: 20}}>
                  <img src="http://sellwin-system.by/upload/iblock/2b2/2b2f8dae2f0ee20b245f0283e7c18684.png"
                       style={{
                           width: 300,
                           height: 100}}/>
                </span>
            </Paper>

            <Paper style={{padding: 5}}  elevation={3} >
                <span style={{width: 500, padding: 20}}>
                  <img src="http://sellwin-system.by/upload/iblock/0cb/0cb66cf8046769c549b6dc6994c1418c.png"
                       style={{
                           width: 300,
                           height: 100}}/>
                </span>
            </Paper>
        </div>
    )
}