import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function  AboutUs (props) {

    let lang = props.lang

        const arrAboutInfo = [
            {
            title: "ПРОФЕССИОНАЛЬНАЯ КОМАНДА",
            titleEng: "PROFESSIONAL TEAM",
            line: [
                "Насчитывающая порядка 20 высококлассных специалистов;",
                "Направленных на достижение общей цели;",
                "Вовлеченных в бизнес интегрирование, каждого проекта"
            ],
            lineEng: [
                "Numbering about 20 highly qualified specialists;",
                "Aimed at achieving a common goal;",
                "Participation in business integration, each project"
            ],

            },
            {
            title: "КОМПЛЕКСНЫЙ ПОДХОД",
            titleEng: "A COMPLEX APPROACH",
            line: [
                "Точное понимание потребности клиента;",
                "Механизм быстрого апробирования решений в бизнес-процессах;",
                "Наличие собственного центра сопровождения клиентов;"
            ],
            lineEng: [
                "Accurate understanding of customer needs;",
                "Mechanism for express testing of solutions in business processes;",
                "Own customer support center"
            ],

            },
            {
            title: "ПРОГРАММА ЛОЯЛЬНОСТИ",
            titleEng: "LOYALTY PROGRAM",
            line: [
                "В нашей компании действует гибкая система лояльности;",
                "VIP-обслуживание;",
                "Многоуровневое поощрение клиентов;"
            ],
            lineEng: [
                    "Our company has a flexible loyalty system;",
                    "VIP service;",
                    "Multi-level customer promotion;"
                ],
            },
        ]


        return (
            <div style={{paddingTop: "calc( (100vw - 480px)/(1280 - 480) * (300 - 80) + 80px)",
                marginTop: 20,
                paddingLeft: 10,
                paddingRight: 10 }} >
                <hr style={{opacity: 0.5}} />
                <div style={{textAlign: "center",
                    fontSize: "calc( (100vw - 480px)/(1280 - 480) * (24 - 16) + 16px)",
                    // fontWeight: "bold",
                    padding: 10,
                    color: "white" ,
                    paddingTop: "calc( (100vw - 480px)/(1280 - 480) * (200 - 160) + 160px)"}}>
                    {lang ? <> О НАС</>: <> ABOUT US</>}


                </div>
                <Carousel>

                    {arrAboutInfo.map((item , index)=> (
                    <div>
                            <>
                                <div key={index} style={{color: "white",
                                    paddingBottom: 90,
                                    marginBottom: 90,
                                    marginTop: 50,
                                    textAlign: "start",
                                    border: "1px solid white",
                                    borderRadius: 20,
                                    width: "100%",
                                    height: 150, padding: 10 }}>

                                    {lang ? item.line.map((line, inx)=>(
                                        <p  style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}} key={inx}>
                                            {line}
                                        </p >
                                    )): null}
                                    {!lang ? item.lineEng.map((line, inx)=>(
                                        <p  style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}} key={inx}>
                                            {line}
                                        </p >
                                    )): null}

                                </div>

                                {lang ?   <p className="legend" style={{width: "auto",
                                    margin: "auto",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    left: "auto",
                                    position: "sticky"
                                }}
                                >{item.title}</p> :

                                    <p className="legend" style={{width: "auto",
                                        margin: "auto",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        left: "auto",
                                        position: "sticky"
                                    }}
                                    >{item.titleEng}</p>

                                }

                            </>
                    </div>
                    ))}

                </Carousel>
            </div>

        );

};