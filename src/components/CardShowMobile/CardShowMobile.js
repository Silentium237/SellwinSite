import React from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import consult from "../../consult.svg";
import operate from "../../operate.svg";
import optimize from "../../optimize.svg";
import engineer from "../../Engineer.svg";
import design from "../../design.svg";




export default function CardShowMobile(){
    const [openConsult, setOpenConsult] = React.useState(false);
    const [openOperate, setOpenOperate] = React.useState(false);
    const [openOptimize, setOpenOptimize] = React.useState(false);
    const [openEngineer, setOpenEngineer] = React.useState(false);
    const [openDesign, setOpenDesign] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClickConsult = () => {
        setOpenConsult(!openConsult);
    };
    const handleClickOperate = () => {
        setOpenOperate(!openOperate);
    };
    const handleClickOptimize = () => {
        setOpenOptimize(!openOptimize);
    };
    const handleClickEngineer = () => {
        setOpenEngineer(!openEngineer);
    };
    const handleClickDesign = () => {
        setOpenDesign(!openDesign);
    };

    let Width = window.innerWidth

    const arrCard = [
        {

            handleClick: handleClickConsult,
            open: openConsult,
            img: consult,
            primaryText: "CONSULT",
            mainText: "Оптимизация текущх бизнес-процессов внутри деятельности компании, бизнес-мониторинг. Только лучшие инновационные и специализированные решения."
        },
        {
            handleClick: handleClickOperate,
            open: openOperate,
            img: operate,
            primaryText: "OPERATE",
            mainText: "Оптимизация текущх бизнес-процессов внутри деятельности компании, бизнес-мониторинг. Только лучшие инновационные и специализированные решения."
        },
        {
            handleClick: handleClickOptimize,
            open: openOptimize,
            img: optimize,
            primaryText: "OPTIMIZE",
            mainText: "Оптимизация текущх бизнес-процессов внутри деятельности компании, бизнес-мониторинг. Только лучшие инновационные и специализированные решения."
        },
        {
            handleClick: handleClickEngineer,
            open: openEngineer,
            img: engineer,
            primaryText: "ENGINEER",
            mainText: "Оптимизация текущх бизнес-процессов внутри деятельности компании, бизнес-мониторинг. Только лучшие инновационные и специализированные решения."
        },
        {
            handleClick: handleClickDesign,
            open: openDesign,
            img: design,
            primaryText: "DESIGN",
            mainText: "Оптимизация текущх бизнес-процессов внутри деятельности компании, бизнес-мониторинг. Только лучшие инновационные и специализированные решения."
        },

    ]

    return (
        <List
            sx={{ width: '95%',  bgcolor: '#162134', margin: "auto" }}
            component="nav"
            aria-labelledby="nested-list-subheader"

        >

            {arrCard.map((item , index) => (
                <>
                    <ListItemButton key={index}  onClick={item.handleClick}>
                        <ListItemIcon>
                            <img style={{paddingTop: "10%"}} width="50" src={item.img}/>
                        </ListItemIcon>
                        <ListItemText primary={item.primaryText} secondary= { Width > 600 && Width < 768 ? <div style={{color: "white"}}>
                                {item.mainText}

                        </div> : null }  />

                        { Width > 600 && Width < 768  ? null : <>
                            {!item.open ? <ExpandLess style={{color: "white"}} /> : <ExpandMore style={{color: "white"}} />}
                        </>}

                    </ListItemButton>

                    { Width > 600 && Width < 768  ? null :  <Collapse in={item.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>

                                <ListItemText primary={item.mainText} />
                            </ListItemButton>
                        </List>
                    </Collapse>}
                </>

            ))}


            {/*<ListItemButton onClick={handleClickConsult}>*/}
            {/*    <ListItemIcon>*/}
            {/*        <img style={{paddingTop: "10%"}} width="50" src={consult}/>*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText primary="CONSULT"  secondary= { Width > 600 && Width < 768 ? <div style={{color: "white"}}>"Оптимизация текущх бизнес-процессов внутри*/}
            {/*        деятельности компании, бизнес-мониторинг. Только*/}
            {/*        лучшие инновационные и специализированные решения."</div> : null }  />*/}

            {/*    { Width > 600 && Width < 768  ? null : <>*/}
            {/*        {!openConsult ? <ExpandLess style={{color: "white"}} /> : <ExpandMore style={{color: "white"}} />}*/}
            {/*    </>}*/}

            {/*</ListItemButton>*/}

            {/*{ Width > 600 && Width < 768  ? null :  <Collapse in={openConsult} timeout="auto" unmountOnExit>*/}
            {/*    <List component="div" disablePadding>*/}
            {/*        <ListItemButton sx={{ pl: 4 }}>*/}

            {/*            <ListItemText primary="Оптимизация текущх бизнес-процессов внутри*/}
            {/*            деятельности компании, бизнес-мониторинг. Только*/}
            {/*            лучшие инновационные и специализированные решения." />*/}
            {/*        </ListItemButton>*/}
            {/*    </List>*/}
            {/*</Collapse>}*/}



            {/*<ListItemButton onClick={handleClickOperate}>*/}
            {/*    <ListItemIcon>*/}
            {/*        <img style={{paddingTop: "10%"}} width="50" src={operate}/>*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText primary="OPERATE"/>*/}
            {/*    {!openOperate ? <ExpandLess /> : <ExpandMore />}*/}
            {/*</ListItemButton>*/}
            {/*<Collapse in={openOperate} timeout="auto" unmountOnExit>*/}
            {/*    <List component="div" disablePadding>*/}
            {/*        <ListItemButton sx={{ pl: 4 }}>*/}

            {/*            <ListItemText primary="Оптимизация текущх бизнес-процессов внутри*/}
            {/*            деятельности компании, бизнес-мониторинг. Только*/}
            {/*            лучшие инновационные и специализированные решения." />*/}
            {/*        </ListItemButton>*/}
            {/*    </List>*/}
            {/*</Collapse>*/}

            {/*<ListItemButton onClick={handleClickOptimize}>*/}
            {/*    <ListItemIcon>*/}
            {/*        <img  style={{paddingTop: "10%"}} width="50" src={optimize}/>*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText primary="OPTIMIZE" />*/}
            {/*    {!openOptimize ? <ExpandLess /> : <ExpandMore />}*/}
            {/*</ListItemButton>*/}
            {/*<Collapse in={openOptimize} timeout="auto" unmountOnExit>*/}
            {/*    <List component="div" disablePadding>*/}
            {/*        <ListItemButton sx={{ pl: 4 }}>*/}
            {/*            <ListItemText primary="Оптимизация текущх бизнес-процессов внутри*/}
            {/*            деятельности компании, бизнес-мониторинг. Только*/}
            {/*            лучшие инновационные и специализированные решения." />*/}
            {/*        </ListItemButton>*/}
            {/*    </List>*/}
            {/*</Collapse>*/}


            {/*<ListItemButton onClick={handleClickEngineer}>*/}
            {/*    <ListItemIcon>*/}
            {/*        <img style={{paddingTop: "10%"}} width="50" src={engineer}/>*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText style={{fontWeight: "bold"}} primary="ENGINEER" />*/}
            {/*    {!openEngineer ? <ExpandLess /> : <ExpandMore />}*/}
            {/*</ListItemButton>*/}
            {/*<Collapse in={openEngineer} timeout="auto" unmountOnExit>*/}
            {/*    <List component="div" disablePadding>*/}
            {/*        <ListItemButton sx={{ pl: 4 }}>*/}

            {/*            <ListItemText primary="Оптимизация текущх бизнес-процессов внутри*/}
            {/*            деятельности компании, бизнес-мониторинг. Только*/}
            {/*            лучшие инновационные и специализированные решения." />*/}
            {/*        </ListItemButton>*/}
            {/*    </List>*/}
            {/*</Collapse>*/}






        </List>
    );
}
