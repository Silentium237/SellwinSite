import React from "react";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import consult from "../../consult.svg";
import operate from "../../operate.svg";
import optimize from "../../optimize.svg";
import engineer from "../../Engineer.svg";
import design from "../../design.svg";




export default function CardShowMobile(props){
    let lang = props.lang
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
            primaryText: "КОНСУЛЬТАЦИЯ",
            primaryTextEng: "CONSULT",
            mainText: "Мы используем мощь нашего интегрированного" +
                " консалтингового таланта, а также наш опыт работы" +
                " с данными, чтобы определить, где мы можем принести" +
                " пользу и удовлетворить ваши уникальные потребности.",
            mainTextEng: "We harness the power of our integrated consulting" +
                " talent, alongside our data expertise, to work out where" +
                " we can provide value and address your unique needs",
        },
        {
            handleClick: handleClickOperate,
            open: openOperate,
            img: operate,
            primaryText: "ДЕЙСТВИЕ",
            primaryTextEng: "OPERATE",
            mainText: "Мы внедряем коммерческие" +
                " программные продукты для предоставления интегрированных" +
                " и интеллектуальных услуг нового поколения.",
            mainTextEng: "We are implementing commercial software products" +
                " to deliver next-generation integrated and intelligent" +
                " services.",
        },
        {
            handleClick: handleClickOptimize,
            open: openOptimize,
            img: optimize,
            primaryText: "ОПТИМИЗАЦИЯ",
            primaryTextEng: "OPTIMIZE",
            mainText: "Мы превращаем оптимизацию процессов в платформу" +
                " для инноваций за счет принятия решений на основе" +
                " данных и ориентированного на продукт подхода.",
            mainTextEng: "We turn process optimization into platforms" +
                " for innovation through data-driven decisions," +
                " using a product-centric approach.",
        },
        {
            handleClick: handleClickEngineer,
            open: openEngineer,
            img: engineer,
            primaryText: "ИНЖЕНЕРИЯ",
            primaryTextEng: "ENGINEER",
            mainText: "Мы осуществляем трансформацию технологий. " +
                "Вы получаете многоканальные программные платформы," +
                " разработанные с расчетом на будущее и масштабируемые.",
            mainTextEng: "We make technology transformation happen. " +
                "You get omnichannel software platforms architected" +
                " for the future and built to scale."
        },
        {
            handleClick: handleClickDesign,
            open: openDesign,
            img: design,
            primaryText: "ДИЗАЙН",
            primaryTextEng: "DESIGN",
            mainText: "Наши талантливые дизайнеры воплотят ваши идеи в жизнь." +
                " Они знают, как очеловечить технологии и бизнес, чтобы " +
                "создать содержательный мультимодальный цифровой опыт.",
            mainTextEng: "Our talented designers bring your ideas to life. " +
                "They know how to humanize technology and business" +
                " to create meaningful, multimodal digital experiences.",
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
                        <ListItemText
                            primary={lang ? <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (18 - 14) + 14px)" }} >{item.primaryText}</div> :
                            <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (18 - 14) + 14px)" }}>{item.primaryTextEng}</div>}
                                      secondary= { Width > 600 && Width < 768 ? <div style={{color: "white"}}>
                                {lang ? <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 12) + 12px)" }}>{item.mainText}</div>  :
                                    <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 12) + 12px)" }}>{ item.mainTextEng}</div>}
                        </div> : null }  />

                        { Width > 600 && Width < 768  ? null : <>
                            {!item.open ? <ExpandLess style={{color: "white"}} /> : <ExpandMore style={{color: "white"}} />}
                        </>}

                    </ListItemButton>

                    { Width > 600 && Width < 768  ? null :  <Collapse in={item.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary={lang ? <div style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)" }}>{item.mainText}</div>  :
                                    <div  style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)" }} >{item.mainTextEng}</div>} />
                            </ListItemButton>
                        </List>
                    </Collapse>}
                </>
            ))}
        </List>
    );
}
