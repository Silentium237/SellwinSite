import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import s from "./header.module.css"
import sellwinLogo from "./sellwin_logo.png"
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Earth from "../Earth/Earth";
import Paper from '@mui/material/Paper';
import FakeSphere from "./FakeSphere";
import Lite from "./Lite";

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];




function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>

            <Box component="main" sx={{ p: 3 }} style={{background: "linear-gradient(to bottom right, blue, black)",
                width: "100%",
                paddingBottom: 155
               }}>
                <div style={{width: "100%"}}>
                     <span>
                         <img width="150px" src={sellwinLogo}/>
                    </span>
                    <span style={{ float: "right"}}>
                     {navItems.map((item) => (

                         <button className={s.headerButton} style={{ marginLeft: 10}}  key={item} sx={{ color: '#fff' }}>
                             {item}
                         </button>


                     ))}
                </span>
                </div>




                <Box style={{zIndex: 1}} sx={{ display: { xs: 'none', sm: 'block' } }}>

                </Box>
                <Toolbar />
                <h1 style={{color: "white"}}>
                    Let's build from here, together

                </h1>
                <h style={{color: "white"}}>
                    The complete developer platform to build, scale, and deliver secure software.
                </h>

                <div style={{float: "right", }}>
                    <Canvas
                        style={{
                            width: "750px",
                            height: "750px",
                            marginRight: 350,
                            marginTop: -350
                        }}
                    >

                        <Lite/>
                        {/*<FakeSphere/>*/}
                    </Canvas>
                    <Canvas
                        style={{
                            width: "600px",
                            height: "600px",
                            marginRight: 490,
                            marginTop: -600

                        }}
                    >
                        <Suspense fallback={null}>
                            <Earth/>

                        </Suspense>

                        {/*<FakeSphere/>*/}
                    </Canvas>

                </div>



            </Box>

            <div style={{width: "100%",
                height: 100,
                border: "2px solid white",
                borderRadius: "40% 40% 0 0 / 100% 100% 0 0",
                background: "white",
                marginTop: 700,
                position: "absolute"
            }}></div>

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
