import React from "react";
import {Grid} from "@mui/material";
import consult from "../../consult.svg";
import operate from "../../operate.svg";
import optimize from "../../optimize.svg";
import engineer from "../../Engineer.svg";
import design from "../../design.svg";

export default function CardShow (props){
    let lang = props.lang
    const [isHover1, setIsHover1] = React.useState(false);
    const [isHover2, setIsHover2] = React.useState(false);
    const [isHover3, setIsHover3] = React.useState(false);
    const [isHover4, setIsHover4] = React.useState(false);
    const [isHover5, setIsHover5] = React.useState(false);

    const handleMouseEnter1 = () => {
        setIsHover1(true);
    };
    const handleMouseLeave1 = () => {
        setIsHover1(false);
    };
    const handleMouseEnter2 = () => {
        setIsHover2(true);
    };
    const handleMouseLeave2 = () => {
        setIsHover2(false);
    };
    const handleMouseEnter3 = () => {
        setIsHover3(true);
    };
    const handleMouseLeave3 = () => {
        setIsHover3(false);
    };
    const handleMouseEnter4 = () => {
        setIsHover4(true);
    };
    const handleMouseLeave4 = () => {
        setIsHover4(false);
    };
    const handleMouseEnter5 = () => {
        setIsHover5(true);
    };
    const handleMouseLeave5 = () => {
        setIsHover5(false);
    };

    const arrInfo = [
        {
            title: "КОНСУЛЬТАЦИЯ",
            titleEng: "CONSULT",
            img: consult,
            text: "Мы используем мощь нашего интегрированного" +
                " консалтингового таланта, а также наш опыт работы" +
                " с данными, чтобы определить, где мы можем принести" +
                " пользу и удовлетворить ваши уникальные потребности.",
            textEng: "We harness the power of our integrated consulting" +
                " talent, alongside our data expertise, to work out where" +
                " we can provide value and address your unique needs",
            hover: isHover1,
            handleMouseEnter: handleMouseEnter1,
            handleMouseLeave: handleMouseLeave1

        },
        {
            title: "ДЕЙСТВИЕ",
            titleEng: "OPERATE",
            img: operate,
            text: "Мы внедряем коммерческие" +
                " программные продукты для предоставления интегрированных" +
                " и интеллектуальных услуг нового поколения.",
            textEng: "We are implementing commercial software products" +
                " to deliver next-generation integrated and intelligent" +
                " services.",
            hover: isHover2,
            handleMouseEnter: handleMouseEnter2,
            handleMouseLeave: handleMouseLeave2
        },
        {
            title: "ОПТИМИЗАЦИЯ",
            titleEng: "OPTIMIZE",
            img: optimize,
            text: "Мы превращаем оптимизацию процессов в платформу" +
                " для инноваций за счет принятия решений на основе" +
                " данных и ориентированного на продукт подхода.",
            textEng: "We turn process optimization into platforms" +
                " for innovation through data-driven decisions," +
                " using a product-centric approach.",
            hover: isHover3,
            handleMouseEnter: handleMouseEnter3,
            handleMouseLeave: handleMouseLeave3
        },
        {
            title: "ИНЖЕНЕРИЯ",
            titleEng: "ENGINEER",
            img: engineer,
            text: "Мы осуществляем трансформацию технологий. " +
                "Вы получаете многоканальные программные платформы," +
                " разработанные с расчетом на будущее и масштабируемые.",
            textEng: "We make technology transformation happen. " +
                "You get omnichannel software platforms architected" +
                " for the future and built to scale.",
            hover: isHover4,
            handleMouseEnter: handleMouseEnter4,
            handleMouseLeave: handleMouseLeave4
        },
        {
            title: "ДИЗАЙН",
            titleEng: "DESIGN",
            img: design,
            text: "Наши талантливые дизайнеры воплотят ваши идеи в жизнь." +
                " Они знают, как очеловечить технологии и бизнес, чтобы " +
                "создать содержательный мультимодальный цифровой опыт.",
            textEng: "Our talented designers bring your ideas to life. " +
                "They know how to humanize technology and business" +
                " to create meaningful, multimodal digital experiences.",
            hover: isHover5,
            handleMouseEnter: handleMouseEnter5,
            handleMouseLeave: handleMouseLeave5
        },

    ]


    return(
        <Grid container spacing={1}>
            {arrInfo.map((item, index)=>(
            <Grid item xs={2} md={2.4}>
                    <div key={index} onMouseEnter={item.handleMouseEnter}
                         onMouseLeave={item.handleMouseLeave}  style={ {border: "1px solid grey",
                        height: 200,
                        backgroundColor: !item.hover ? "#162134" : "#2d4370",
                        color: "white",
                        textAlign: "center",
                        transition: "1s",
                        transform: item.hover ? "rotateY(180deg)" : "rotateY(360deg)" ,
                    }}>
                        {!item.hover ? <>
                            <img style={{paddingTop: "10%"}} width="100" src={item.img}/>
                            <div style={{
                                // fontWeight: "bold",
                                fontSize: "calc( (100vw - 480px)/(1280 - 480) * (18 - 14) + 14px)", }}>
                                {lang ? item.title : item.titleEng}
                            </div>
                        </>  : null}
                        {item.hover ? <div style={{transform:  "rotateY(180deg)",
                            fontSize: "calc( (100vw - 480px)/(1280 - 480) * (14 - 12) + 12px)", paddingTop: 20 }}>
                            {lang ? <div>{item.title}</div> : <div>{item.titleEng}</div>}
                            {lang ? <div>{item.text}</div> : <div>{item.textEng}</div>}
                        </div> : null}
                    </div>
            </Grid>
            ))}
        </Grid>
    )
}