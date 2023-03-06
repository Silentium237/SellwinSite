import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';

import sellwinLogo from "./sellwin_logo.png"
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Earth from "../Earth/Earth";

import ai from "../../ai.png";
import earthLogo from "./earthLang.png"


function DrawerAppBar(props) {
    let lang = props.lang
    let changeLanguage = props.changeLanguage
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [show, setShow] = React.useState(false)
    const [isHover, setIsHover] = React.useState(false);
    const [isHoverHome, setIsHoverHome] = React.useState(false);
    const [isHoverAbout, setIsHoverAbout] = React.useState(false);
    const [isHoverContact, setIsHoverContact] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleMouseEnter = (name) => {
        if (name === 'Home' || name === 'Главная' ) {
            setIsHoverHome(true);
        }
        if (name === 'About Us' || name === 'О нас' ) {
            setIsHoverAbout(true);
        }
        if (name === 'Contact' || name === "Контакты") {
            setIsHoverContact(true);
        }
        // setIsHover(true);
    };
    const handleMouseLeave = (name) => {
        if (name === 'Home' || name === 'Главная') {
            setIsHoverHome(false);
        }
        if (name === 'About Us' || name === 'О нас' ) {
            setIsHoverAbout(false);
        }
        if (name === 'Contact' || name === "Контакты") {
            setIsHoverContact(false);
        }
        setIsHover(false);
    };
    const handleMouseEnterHome = () => {
        setIsHoverHome(true);
    };
    const handleMouseLeaveHome = () => {
        setIsHoverHome(false);
    };
    const handleMouseEnterAbout = () => {
        setIsHover(true);
    };
    const handleMouseLeaveAbout = () => {
        setIsHover(false);
    };
    const handleMouseEnterContact = () => {
        setIsHover(true);
    };
    const handleMouseLeaveContact = () => {
        setIsHover(false);
    };


    const navItems = [
        {
            name: 'Главная',
            nameEng: 'Home',
            link: "/home",
            handleMouseEnter,
            handleMouseLeave,
            hover: isHoverHome
        },
        {
            name: 'О нас',
            nameEng: 'About Us',
            link: "/about",
            handleMouseEnter,
            handleMouseLeave,
            hover: isHoverAbout
        },
        {
            name: 'Контакты',
            nameEng: 'Contact',
            link: "/contact",
            handleMouseEnter,
            handleMouseLeave,
            hover: isHoverContact
        }
    ];



    let Width = window.innerWidth

    return (


            <Box component="main"  style={{
                background: "linear-gradient(to bottom , gray, #1f2e4b)",


            }}>
                <div style={{width: "100%"}}>
                     <span style={{padding: 10}}>
                         <img width="150px" src={sellwinLogo}/>
                    </span>
                    <img src={ai} style={{position: "absolute", zIndex: 0, left: -500, top: 500, width: Width-Width/2}}/>
                    <div style={{float: "right", display: Width > 600 ?  "flex" : "inline-grid" , fontSize: Width > 600 ?  24 : 12}}>
                        {navItems.map((item, index) => (
                            <div key={index}
                                style={{
                                    position: "relative",
                                    overflow: "hidden",
                                    display: "inline-block",
                                    color: '#fff',
                                    background: "linear-gradient(to right, royalblue, royalblue 50%, #fff 50%)",
                                    backgroundClip: "text",
                                    webkitBackgroundClip: "text",
                                    webkitTextFillColor: "transparent",
                                    backgroundSize: "200% 100%",
                                    backgroundPosition: !item.hover ? "100%" : "0 100%",
                                    transition: "background-position 275ms ease",
                                    margin: "auto",
                                    padding: Width > 600 ? 20 : 10,
                                    fontWeight: "bold"

                                }}
                                onMouseEnter={() => item.handleMouseEnter(item.name)}
                                onMouseLeave={() => item.handleMouseLeave(item.name)}
                                onClick={() => {
                                    setShow(!show)
                                }}> {lang ? item.name : item.nameEng}</div>

                        ))}

                        <div style={{  position: "relative",
                            overflow: "hidden",
                            display: "inline-block",  margin: "auto",
                            color: "white", textAlign: "center"}}>

                            <div onClick={() => changeLanguage(lang)}>
                                <img width="50" src={earthLogo}/>
                                {/*<span>*/}
                                {/*     {lang ? <>ru</> : <>en</>}*/}
                                {/*</span>*/}
                            </div>

                        </div>
                    </div>

                </div>


                <Box style={{zIndex: 1}} sx={{display: {xs: 'none', sm: 'block'}}}>

                </Box>
                <Toolbar/>
                <h1 style={{
                    fontSize: "calc( (100vw - 480px)/(1280 - 480) * (60 - 24) + 24px)", color: "white",margin: 10
                }}>
                    {lang ? <>
                        Начнем создавать будущее, вместе
                    </> : <>
                        Let's start creating the future together
                    </>}


                </h1>
                <hr/>


                {lang ? <h1 style={{color: "white",  fontSize: "calc( (100vw - 480px)/(1280 - 480) * (32 - 16) + 16px)", margin: 10}}>
                    Полный цикл создания, масштабирования и поставки защищенного программного обеспечения для заказчика.
                </h1> : <h1 style={{color: "white",  fontSize: "calc( (100vw - 480px)/(1280 - 480) * (32 - 16) + 16px)", margin: 10}}>
                    Full cycle of creation, scaling and delivery of secure software for the customer.
                </h1>}


                <hr/>


                <div style={{float: "right",}}>

                    <Canvas
                        style={{
                            width: "calc( (100vw - 480px)/(1280 - 480) * (700 - 350) + 350px)",
                            height: "calc( (100vw - 480px)/(1280 - 480) * (350 - 200) + 200px)",
                            // left: -80,
                            marginTop: "calc( (100vw - 480px)/(1280 - 480) * (100 - 50) + 50px)",
                            borderRadius: 20,
                            border: "1px solid white",
                            marginRight: 10
                        }}
                    >
                        <Suspense fallback={null}>
                            <Earth show={show}/>

                        </Suspense>

                        {/*<FakeSphere/>*/}
                    </Canvas>

                </div>


            </Box>


    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
