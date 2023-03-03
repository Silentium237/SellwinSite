import React from "react";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";


export default function OurResults (){


    let Width = window.innerWidth
    return(
        <>
            <hr style={{marginBottom: 50, opacity: 0.5}}/>
            <Box sx={{ flexGrow: 1 ,
                maxWidth: 800,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                margin: "auto",
                fontFamily: "Andale Mono, monospace"}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}  >
                        <div style={{textAlign: "center",
                            color: "white",
                            margin: Width > 900 ? 0 : 10,
                            height: Width > 900 ? 300 : 200,
                            fontFamily: "Andale Mono, monospace"}}>
                            <h1>
                                OUR RESULTS
                            </h1>
                            деятельности компании, бизнес-мониторинг – каждая
                            из этих задач важна для современной компании и для
                            выполнения каждой из них мы  предлагаем, только
                            лучшие инновационные и специализированные решения.
                        </div>
                    </Grid>
                    {Width > 900 ?  <hr/>: null}
                    <Grid item xs={12} md={2}   >
                        <div style={Width > 900 ? {display: "inline-block", margin: "auto"} : {textAlign: "center"}}>
                            <div  style={{textAlign: "center",color: "white", height: Width > 900 ? 150 : 100, fontFamily: "Andale Mono, monospace"}}>
                                <h1>
                                    16x
                                </h1>
                                Greater Website Deployment Capacity for Bacardi
                            </div>

                            {Width > 900 ?  <hr/>: null}
                            <div  style={{textAlign: "center",color: "white", height: Width > 900 ? 150 : 100, fontFamily: "Andale Mono, monospace"}}>
                                <h1>
                                    20K
                                </h1>
                                Unique Visitors/Hour Supported for
                                Tele2 Netherlands
                            </div>

                        </div>

                    </Grid>

                    {Width > 900 ?  <hr/>: null}

                    <Grid item xs={12} md={2}  style={{}}>
                        <div style={Width > 900 ?{display: "inline-block"}: {}}>
                            <div style={{textAlign: "center",color: "white", height: Width > 900 ? 150 : 100}}>
                                <h1>
                                    350M
                                </h1>
                                Players fo Epic Games
                            </div>
                            <div>
                                {Width > 900 ?  <hr/>: null}
                            </div>

                            <div style={{textAlign: "center",color: "white", height: Width > 900 ? 150 : 100}}>
                                <h1>
                                    400K+
                                </h1>
                                Active Users / Month for Liberty Global
                            </div>

                        </div>

                    </Grid>
                    {Width > 900 ?  <hr/>: null}
                    <Grid item xs={12} md={2} >
                        <div style={Width > 900 ?{display: "inline-block"}: {}}>
                            <div style={{textAlign: "center",color: "white", height: Width > 900 ? 150 : 100, fontFamily: "Andale Mono, monospace"}}>
                                <h1>
                                    30%
                                </h1>
                                Increase in
                                Online Quotes for
                                LV= General Insurance
                            </div>
                            {Width > 900 ?  <hr/>: null}

                            <div style={{textAlign: "center",color: "white", height: Width > 900 ? 150 : 100}}>
                                <h1>
                                    75K
                                </h1>
                                Bookings/Day for
                                Vue
                            </div>

                        </div>

                    </Grid>
                </Grid>
            </Box>

        </>
    )

}