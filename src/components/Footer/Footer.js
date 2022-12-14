import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});


export default function Footer() {
    return (
        <div style={{background: "black", width: "100%", height: 300}}>
            <div style={{display: "flex",justifyContent: "space-around", width: "60%", margin: "auto", paddingTop: 50, }}>
            <span style={{color: "white" , width: "80%"}}>
            <div>
               SELLWIN SYSTEM
            </div>
            молодая, динамично развивающаяся и финансово независимая IТ-компания,
                часть международного холдинга  Sellwin Group,  резидент Парка  Высоких Технологий,
                специализирующаяся на разработке программного обеспечения для дистрибьюции, розничной
                торговли и производства, насчитывающая порядка 20 высококвалифицированных специалистов,
                которые детально погружены в бизнес клиентов.
            </span>
                <span style={{color: "white", width: "30%"}}>
                    <div>
                        PHONE
                    </div>

            +375 (17) 269 33 33
            +375 (29) 397 57 37
            E-MAIL:
            info@sellwin-system.by
            </span>
                <span style={{color: "white", width: "30%"}}>
                    <div>
                        DIRECTION
                    </div>

            Беларусь, г. Минск, пер. С.Ковалевской, 60, офис 820

            INSTAGRAM
            </span>
            </div>
        </div>
        // <ThemeProvider theme={theme}>
        //     <AppBar style={{height: 60, opacity: "0.5", position: "fixed" }} position="fixed" color="neutral" sx={{ top: 'auto', bottom: 0 }}>
        //         <Toolbar>
        //             <Box sx={{ flexGrow: 1 }} />
        //             © 2022 Sellwin System
        //         </Toolbar>
        //     </AppBar>
        // </ThemeProvider>
    );
}