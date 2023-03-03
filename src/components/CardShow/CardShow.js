import React from "react";
import {Grid} from "@mui/material";
import consult from "../../consult.svg";
import operate from "../../operate.svg";
import optimize from "../../optimize.svg";
import engineer from "../../Engineer.svg";
import design from "../../design.svg";

export default function CardShow (props){
    let handleMouseEnter1=props.handleMouseEnter1
    let handleMouseLeave1=props.handleMouseLeave1
    let handleMouseEnter2=props.handleMouseEnter2
    let handleMouseLeave2=props.handleMouseLeave2
    let isHover1=props.isHover1
    let isHover2=props.isHover2

    return(
        <Grid container spacing={1}>
            <Grid item xs={2} md={2.4}>
                <div style={{border: "1px solid grey", height: 200, backgroundColor: "#162134", color: "white", textAlign: "center"}}>
                    <img style={{paddingTop: "10%"}} width="100" src={consult}/>
                    <div style={{fontWeight: "bold", fontSize: 24, }}>
                        CONSULT
                    </div>
                </div>
            </Grid>
            <Grid item xs={2} md={2.4}>
                <div style={{border: "1px solid grey", height: 200, backgroundColor: "#162134", color: "white", textAlign: "center"}} >
                    <img style={{paddingTop: "10%"}} width="100" src={operate}/>
                    <div style={{fontWeight: "bold", fontSize: 24, }}>
                        OPERATE
                    </div>
                </div>
            </Grid>
            <Grid item xs={2} md={2.4}>
                <div style={{border: "1px solid grey", height: 200, backgroundColor: "#162134", color: "white", textAlign: "center"}}>
                    <img  style={{paddingTop: "10%"}} width="100" src={optimize}/>
                    <div style={{fontWeight: "bold", fontSize: 24, }}>
                        OPTIMIZE
                    </div>
                </div>
            </Grid>
            <Grid item xs={2} md={2.4}>
                <div onMouseEnter={handleMouseEnter1}
                     onMouseLeave={handleMouseLeave1}  style={ {border: "1px solid grey",
                    height: 200,
                    backgroundColor: !isHover1 ? "#162134" : "#2d4370",
                    color: "white",
                    textAlign: "center",
                    transition: "1s",
                    transform: isHover1 ? "rotateY(180deg)" : "rotateY(360deg)" ,
                }}>
                    {!isHover1 ? <>
                        <img style={{paddingTop: "10%"}} width="100" src={engineer}/>
                        <div style={{fontWeight: "bold", fontSize: 24, }}>
                            ENGINEER
                        </div>
                    </>  : null}
                    {isHover1 ? <div style={{transform:  "rotateY(180deg)"}}><h3>Управление</h3>
                        Управление текущими бизнес-процессами внутри
                        деятельности компании, бизнес-мониторинг. Только
                        лучшие инновационные и специализированные решения.
                    </div> : null}
                </div>


            </Grid>
            <Grid item xs={2} md={2.4}>
                <div onMouseEnter={handleMouseEnter2}
                     onMouseLeave={handleMouseLeave2}  style={ {border: "1px solid grey",
                    height: 200,
                    backgroundColor: !isHover2 ? "#162134" : "#2d4370",
                    color: "white",
                    textAlign: "center",
                    transition: "1s",
                    transform: isHover2 ? "rotateY(180deg)" : "rotateY(360deg)" ,
                }}>
                    {!isHover2 ? <>
                        <img style={{paddingTop: "10%"}} width="100" src={design}/>
                        <div style={{fontWeight: "bold", fontSize: 24, }}>
                            DESIGN
                        </div>
                    </>  : null}
                    {isHover2 ? <div style={{transform:  "rotateY(180deg)"}}><h3>Дизайн</h3>
                        Опытная команда дизайнеров создаст для Вас привлекательный макет проекта,
                        который будет учитывать все Ваши пожелания и будет соответствовать всем современным тенденциям.
                    </div> : null}
                </div>


            </Grid>

        </Grid>
    )
}