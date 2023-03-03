import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class AboutUs extends Component {
    render() {
        return (
            <div style={{paddingTop: "calc( (100vw - 480px)/(1280 - 480) * (300 - 80) + 80px)", marginTop: 20, paddingLeft: 10 , paddingRight: 10 }} >
                <hr style={{opacity: 0.5, }} />
                <div style={{textAlign: "center", fontSize: 24, fontWeight: "bold", padding: 10, color: "white" , paddingTop: "calc( (100vw - 480px)/(1280 - 480) * (200 - 160) + 160px)"}}>
                    О НАС</div>
                <Carousel>
                    <div>
                        <div style={{color: "white",
                            paddingBottom: 90,
                            marginBottom: 90,
                            marginTop: 50,
                            textAlign: "start",
                            border: "1px solid white",
                            borderRadius: 20,
                            width: "100%",
                            height: 150, padding: 10 }}>
                            <p  style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}}>
                                НАСЧИТЫВАЮЩАЯ ПОРЯДКА 20 ВЫСОКОКЛАССНЫХ СПЕЦИАЛИСТОВ;
                            </p >
                            <p style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}}>
                                НАПРАВЛЕНЫХ НА ДОСТИЖЕНИЕ ОБЩЕЙ ЦЕЛИ;
                            </p>
                            <p style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}}>
                                ВОВЛЕЧЕННЫХ В БИЗНЕС ИНТЕГРИРОВАНИЕ, КАЖДОГО ПРОЕКТА
                            </p>


                        </div>
                        {/*<img src="assets/1.jpeg" />*/}
                        <p className="legend" style={{width: "auto",
                            margin: "auto",
                            alignItems: "center",
                            justifyContent: "center",
                            left: "auto",
                            position: "sticky"
                        }}
                        >ПРОФЕССИОНАЛЬНАЯ КОМАНДА</p>
                    </div>
                    <div>

                        <div style={{color: "white",
                            paddingBottom: 90,
                            marginBottom: 90,
                            marginTop: 50,
                            textAlign: "start",
                            border: "1px solid white",
                            borderRadius: 20,
                            width: "100%",
                            height: 150,
                            padding: 10 }}>
                            <p style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}}>
                                ТОЧНОЕ ПОНИМАНИЕ ПОТРЕБНОСТИ КЛИЕНТА;
                                {/*Точное понимание потребности клиента;*/}
                            </p>
                            <p style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}}>
                                МЕХАНИЗМ БЫСТРОГО АПРОБИРОВАНИЯ РЕШЕНИЙ В БИЗНЕС-ПРОЦЕССАХ;
                                {/*Механизм быстрого апробирования решений в бизнес-процессах ;*/}
                            </p>
                            <p style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}}>
                                НАЛИЧИЕ СОБСТВЕННОГО ЦЕНТРА СОПРОВОЖДЕНИЯ КЛИЕНТОВ;
                                {/*Наличие собственного центра сопровождения  клиентов;*/}
                            </p>


                        </div>
                        {/*<img src="assets/2.jpeg" />*/}
                        <p className="legend"  style={{width: "auto",
                            margin: "auto",
                            alignItems: "center",
                            justifyContent: "center",
                            left: "auto",
                            position: "sticky"}}
                        >Комплексный подход</p>
                    </div>
                    <div>
                        <div style={{color: "white",
                            paddingBottom: 90,
                            marginBottom: 90,
                            marginTop: 50,
                            textAlign: "start",
                            border: "1px solid white",
                            borderRadius: 20,
                            width: "100%",
                            height: 150, padding: 10 }}>
                            <p style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}} >
                                В НАШЕЙ ЕОМПАНИИ ДЕЙСТВУЕТ ШИБКАЯ СИСТЕМА ЛОЯЛЬНОСТИ;
                            </p>
                            <p style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}}>
                                VIP-ОБСЛУЖИВАНИЕ;
                            </p>
                            <p style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (16 - 14) + 14px)"}}>
                                МНОГОУРОВНЕВОЕ ПООЩРЕНИЕ КЛИЕНТОВ;
                            </p>


                        </div>
                        {/*<img src="assets/3.jpeg" />*/}
                        <p className="legend"  style={{width: "auto",
                            margin: "auto",
                            alignItems: "center",
                            justifyContent: "center",
                            left: "auto",
                            position: "sticky"
                        }}
                        >
                            Программа лояльности</p>
                    </div>
                </Carousel>
            </div>

        );
    }
};