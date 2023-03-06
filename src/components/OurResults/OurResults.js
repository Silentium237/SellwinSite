import React from "react";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";


export default function OurResults (props){
    let lang = props.lang

    let Width = window.innerWidth

    const arrText  = [
        {
            titleOne: "16x",
            textOne: "Greater Website Deployment Capacity for Bacardi",
            titleTwo: "20K",
            textTwo: "Unique Visitors/Hour Supported for Tele2 Netherlands",
        },
        {
            titleOne: "350M",
            textOne: "Players fo Epic Games",
            titleTwo: "400K+",
            textTwo: "Active Users / Month for Liberty Global",
        },
        {
            titleOne: "30%",
            textOne: "Increase in Online Quotes for LV= General Insurance",
            titleTwo: "75K",
            textTwo: "Bookings/Day for Vue",
        },
    ]

    return(
        <>
            <hr style={{marginBottom: 50, opacity: 0.5}}/>
            <Box sx={{ flexGrow: 1 ,
                maxWidth: 800,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                margin: "auto",
                fontFamily: "'Space Grotesk', sans-serif"}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} style={{paddingBottom: 20, marginBottom: Width > 900 ? "" : "40px"}} >
                        <div style={{textAlign: "center",
                            paddingTop: Width > 900 ? 40 : 0,
                            color: "white",
                            width: Width > 900 ? "" : "300px",
                            margin: Width > 900 ? 0 : "auto",
                            height: Width > 900 ? 300 : 100,
                            fontFamily: "'Space Grotesk', sans-serif"}}>
                            <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (24 - 16) + 16px)", paddingBottom: 10 }}>
                                OUR RESULTS
                            </div>
                            <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (14 - 14) + 14px)", }}>
                                Деятельности компании, бизнес-мониторинг – каждая
                                из этих задач важна для современной компании и для
                                выполнения каждой из них мы  предлагаем, только
                                лучшие инновационные и специализированные решения.
                            </div>

                        </div>
                    </Grid>
                    {Width > 900 ?  <hr/>: null}


                    {arrText.map((item, index) => (
                        <>
                            <Grid key={index} item xs={12} md={2}   >
                                <div style={Width > 900 ? {display: "inline-block", margin: "auto"} : {textAlign: "center", width: 300, margin: "auto"}}>
                                    <div  style={{textAlign: "center",color: "white", height: Width > 900 ? 150 : 100, fontFamily: "'Space Grotesk', sans-serif"}}>
                                        <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (24 - 16) + 16px)", paddingBottom: 10 }}>
                                            {item.titleOne}
                                        </div>
                                        <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (14 - 14) + 14px)", }}>
                                            {item.textOne}
                                        </div>

                                    </div>

                                    {Width > 900 ?  <hr/>: null}
                                    <div  style={{textAlign: "center",color: "white", height: Width > 900 ? 150 : 100, fontFamily: "'Space Grotesk', sans-serif"}}>
                                        <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (24 - 16) + 16px)", paddingBottom: 10 }}>
                                            {item.titleTwo}
                                        </div>
                                        <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (14 - 14) + 14px)", }}>
                                            {item.textTwo}
                                        </div>

                                    </div>
                                </div>
                            </Grid>
                            {Width > 900 ?  <hr/>: null}
                        </>

                    ))}

                </Grid>
            </Box>

        </>
    )

}