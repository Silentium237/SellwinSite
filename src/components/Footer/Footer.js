import * as React from 'react';
import Box from '@mui/material/Box';
import {Grid} from "@mui/material";




export default function Footer() {

    return (

        <Box sx={{ flexGrow: 1 , width: "100%", justifyContent: "center", alignItems: "center", display: "flex", margin: "auto", backgroundColor: "black"}}>
            <Grid container spacing={3} style={{padding: 10, justifyContent: "center", alignItems: "center", display: "flex"}}>

                <Grid item xs={12} md={3} style={{marginRight: 50}} >
                    <div style={{ color: "white"}}>
                        PHONE
                    </div>
                    <div style={{ color: "white"}}>
                        +375 (17) 269 33 33
                    </div>

                    <div style={{ color: "white"}}>
                        +375 (29) 397 57 37
                    </div>

                </Grid>
                <Grid item xs={12} md={3} style={{marginRight: 50}} >
                    <div style={{ color: "white"}}>
                        DIRECTION
                    </div>
                    <div style={{ color: "white"}}>
                        Беларусь, г. Минск, пер. С.Ковалевской, 60, офис 820
                    </div>
                </Grid>
                <Grid item xs={12} md={2} style={{marginRight: 50}} >
                    <div style={{ color: "white"}}>
                        E-MAIL:
                    </div>
                    <div style={{ color: "white"}}>
                        info@sellwin-system.by
                    </div>
                </Grid>
            </Grid>
        </Box>
    )}


