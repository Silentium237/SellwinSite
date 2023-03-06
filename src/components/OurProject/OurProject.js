import React from "react";

import beautyHouse from "./beautyhouse.png"
import b2b from "./b2b.png"
import db from "./db.png"

export default function OurProject(props){
    let lang = props.lang
    const [project, setProject] = React.useState(false);

    const handleSetProject = () => {
        setProject(!project);
    };

    const arrayProject = [
        {
            name: "BeautyHouse.by",
            link: "https://beautyhouse.by/",
            img: beautyHouse,
            text: "Сайт созданный для Вашей красоты"
        },
        {
            name: "b2b.sellwin.by",
            link: "https://b2b.sellwin.by/",
            img: b2b,
            text: "Создадим уют в Вашем доме"
        },
        {
            name: "DB introduction",
            link: "",
            img: db,
            text: "Настроим Ваши связи"
        },
        ]

    return(
        <>
            <hr style={{ marginTop: 20, opacity: 0.5}}/>

            <div style={{textAlign: "center",
                fontSize: 24,
                fontWeight: "bold",
                padding: 10 ,
                paddingTop: 20,
                color: "white"}}
                 onClick={()=> handleSetProject()}>
                <button style={{width: 200,
                    height: 45,
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: 20,
                    margin: "auto",
                    position: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "block",}} > {lang ? <>НАШИ ПРОЕКТЫ</>: <>OUR PROJECTS</>}  {project ? <span style={{width: 10}}>&#8595;</span> : <span>&#8593;</span> }	 </button></div>

            {project ?
                <div style={{alignItems: "center", display: "grid", justifyContent: "center", margin: "auto", fontFamily: "Andale Mono, monospace"}}>

                    {arrayProject.map((item, index) => (
                        <div key={index} style={{position: "relative", background: "linear-gradient(to left, transparent, #162134) ", marginBottom: 20}}>
                            <img src={item.img} style={{opacity: 0.3,
                                margin: "auto",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "calc( (100vw - 480px)/(1280 - 480) * (700 - 370) + 370px)"
                            }} />
                            <h style={{position: "absolute", top:"calc( (100vw - 480px)/(1280 - 480) * (150 - 50) + 50px)" ,
                                left: "calc( (100vw - 480px)/(1280 - 480) * (230 - 70) + 70px)",
                                color: "white",}}>
                                {item.link.length ?    <a href={item.link} target="_blank" style={{color: "white"}}>
                                    <p style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (30 - 20) + 20px)",
                                        alignItems: "center",
                                        textAlign: "center"}}>{item.name}</p>
                                </a> :    <a  style={{color: "white"}}>
                                    <p style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (30 - 20) + 20px)",
                                        alignItems: "center",
                                        textAlign: "center"}}>{item.name}</p>
                                </a>}

                                <p style={{fontSize: 24 ,
                                    width: 250,
                                    alignItems: "center",
                                    textAlign: "center" }}>
                                    {item.text}
                                </p>

                            </h>
                        </div>
                    ))}


                </div>

                : null}

        </>
    )
}