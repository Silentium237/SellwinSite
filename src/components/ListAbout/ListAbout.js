import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import {Paper} from "@mui/material";
import Grid from '@mui/material/Grid';
import s from "./listAbout.module.css"
import img1 from "./1.png"
import img2 from "./2.png"
import img3 from "./3.png"
import img4 from "./4.png"
import img5 from "./5.png"
import img6 from "./6.png"
import {useCallback, useLayoutEffect, useRef, useState , useEffect} from "react";







function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const [scroll , setScroll] = React.useState(0)

    window.onscroll = (ev => setScroll(ev.path[1].scrollY))
    console.log(scroll)

    return (

        <Box sx={{ width: '70%', margin: "auto" }}>
            <Paper style={{background: "black", width: "100%", height: "auto", borderRadius: 15}} elevation={3}>
                <Grid container rowSpacing={1} style={{paddingTop: 10}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={1}>
                        <div style={{borderLeft: "2px solid white", height: 200, marginLeft: 20, opacity: 0.5, marginTop:60 }}></div>
                        <div style={{color: "white", marginLeft: 13}}>
                           	&#10149;
                        </div>
                        <div style={{borderLeft: "2px solid white", height: 250, marginLeft: 20, opacity: 0.5,  }}></div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={s.text} style={{ paddingTop: 20, }}>SELLWIN SYSTEM ПРЕДОСТАВЛЯЕТ</div>
                    </Grid>
                    <Grid  item xs={9}>
                        <div className={s.div} style={scroll > 500 && scroll < 1900 ? {paddingTop: 80}: {display: "none"}}  >
                            <img className={s.divImg} style={{marginRight: 50}} width="900px" src={img1}/>
                        </div>
                    </Grid>



                    <Grid item xs={1}>
                        <div style={{borderLeft: "2px solid white", height: 150, marginLeft: 20, opacity: 0.5, marginTop:60 }}></div>
                        <div style={{color: "white", marginLeft: 13}}>
                            &#10149;
                        </div>
                        <div style={{borderLeft: "2px solid white", height: 200, marginLeft: 20, opacity: 0.5,  }}></div>

                    </Grid>
                    <Grid item xs={2}>
                        <div className={s.text}>СТРАТЕГИЧЕСКОЕ ПЛАНИРОВАНИЕ</div>
                    </Grid>
                    <Grid  item xs={9}>
                        <div style={scroll > 1000 && scroll < 2300 ? {paddingTop: 80, }: {display: "none"}}  >
                            <img className={s.divImg} style={{marginRight: 50}} width="900px" src={img2}/>
                        </div>
                    </Grid>


                    <Grid item xs={1}>
                        <div style={{borderLeft: "2px solid white", height: 150, marginLeft: 20, opacity: 0.5, marginTop:60 }}></div>
                        <div style={{color: "white", marginLeft: 13}}>
                            &#10149;
                        </div>
                        <div style={{borderLeft: "2px solid white", height: 200, marginLeft: 20, opacity: 0.5,  }}></div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={s.text} >ОСНОВНЫЕ ЗАДАЧИ</div>
                    </Grid>
                    <Grid  item xs={9}>
                        <div  style={scroll > 1400 && scroll < 2700 ? {paddingTop: 80, }: {display: "none"}}  >
                            <img  className={s.divImg} style={{marginRight: 50}} width="900px" src={img3}/>
                        </div>
                    </Grid>


                    <Grid item xs={1}>
                        <div style={{borderLeft: "2px solid white", height: 150, marginLeft: 20, opacity: 0.5, marginTop:60 }}></div>
                        <div style={{color: "white", marginLeft: 13}}>
                            &#10149;
                        </div>
                        <div style={{borderLeft: "2px solid white", height: 200, marginLeft: 20, opacity: 0.5,  }}></div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={s.text} >ОСНОВНЫЕ ПРЕИМУЩЕСТВА</div>
                    </Grid>
                    <Grid  item xs={9}>
                        <div style={scroll > 1600 && scroll < 3300 ? {paddingTop: 80, }: {display: "none"}}  >
                            <img className={s.divImg} style={{marginRight: 50}} width="900px" src={img4}/>
                        </div>
                    </Grid>


                    <Grid item xs={1}>
                        <div style={{borderLeft: "2px solid white", height: 150, marginLeft: 20, opacity: 0.5, marginTop:60 }}></div>
                        <div style={{color: "white", marginLeft: 13}}>
                            &#10149;
                        </div>
                        <div style={{borderLeft: "2px solid white", height: 200, marginLeft: 20, opacity: 0.5,  }}></div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={s.text} >ПОЧЕМУ ВЫ ВЫБИРАЕТЕ НАС</div>
                    </Grid>
                    <Grid  item xs={9}>
                        <div style={scroll > 1800 && scroll < 4000 ? {paddingTop: 80, }: {display: "none"}}  >
                            <img className={s.divImg} style={{marginRight: 50}} width="900px" src={img5}/>
                        </div>
                    </Grid>

                    <Grid item xs={1}>
                        <div style={{borderLeft: "2px solid white", height: 150, marginLeft: 20, opacity: 0.5, marginTop:60 }}></div>
                        <div style={{color: "white", marginLeft: 13}}>
                            &#10149;
                        </div>
                        <div style={{borderLeft: "2px solid white", height: 280, marginLeft: 20, opacity: 0.5,  }}></div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={s.text} >ЭТАПЫ РАЗРАБОТКИ ПО</div>
                    </Grid>
                    <Grid  item xs={9} >
                        <div style={scroll > 2600 && scroll < 4000 ? {paddingTop: 80, }: {display: "none"}}  >
                            <img className={s.divImg} style={{marginRight: 50}} width="900px" src={img6}/>
                        </div>
                    </Grid>


                </Grid>
            </Paper>
        </Box>
    );
}
