import React from "react"
import {Suspense} from "react";
import './App.css';
import DrawerAppBar from "./components/Header/Header";
// import { RenderTexture, OrbitControls, ContactShadows } from '@react-three/drei'
import { Canvas, useFrame, createPortal } from '@react-three/fiber'
import Earth from "./components/Earth/Earth";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BasicTabs from "./components/ListAbout/ListAbout";
import Footer from "./components/Footer/Footer";
import SellwinCompany from "./components/SellwinCompany/SellwinCompany";


function App() {
    const [showCard1, setShowCard1] = React.useState(true)
    const [showCard2, setShowCard2] = React.useState(true)
    const [showCard3, setShowCard3] = React.useState(true)

    const show1 = () => {
        setShowCard1(false)
    }
    const show11 = () => {
        setShowCard1(true)
    }
    const show2 = () => {
        setShowCard2(false)
    }
    const show22 = () => {
        setShowCard2(true)
    }
    const show3 = () => {
        setShowCard3(false)
    }
    const show33 = () => {
        setShowCard3(true)
    }

  return (
    <div >
    <DrawerAppBar/>

      <div style={{textAlign: "center", fontSize: 24, fontWeight: "bold", padding: 10 }}>ABOUT</div>
      <Box>
        <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div style={{position:"inherit"}}>
                        <Paper style={{padding: 5}}  elevation={3} >
                            {showCard1 ?
                                <div onMouseEnter={()=>show1()} style={{position:"inherit",
                                    backgroundImage: `url("http://sellwin-system.by/r/home01sunriseOptimized.jpg")`,
                                    width: 300, height: 400}}>
                                    <div style={{
                                        textAlign: "center",
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        paddingTop: 90}}>
                                        ПРОФЕССИОНАЛЬНАЯ КОМАНДА
                                    </div>
                                </div> :
                                    <div onMouseLeave={()=>show11()}  style={{position:"inherit",
                                        width: 300, height: 400}}>
                                        <div  style={{
                                            textAlign: "center",
                                            fontSize: 14,
                                            fontWeight: "bold",
                                            paddingTop: 90}}>
                                            Более 20 высококлассных специалистов, вовлеченных
                                            в бизнес интегрирование каждого проекта и направленных
                                            на достижение общей цели
                                        </div>
                                    </div>
                            }

                        </Paper>
                    </div>
            <div style={{position:"inherit"}}>
                <Paper style={{padding: 5}}  elevation={3} >
                    {showCard2 ?
                        <div onMouseEnter={()=>show2()}
                             style={{position:"inherit",
                                 backgroundImage: `url("http://sellwin-system.by/r/home02financialOptimized.jpg")`,
                                 width: 300,
                                 height: 400}}>
                            <div style={{textAlign: "center", fontSize: 14, fontWeight: "bold",paddingTop: 90}}>
                                КОМПЛЕКСНЫЙ ПОДХОД
                            </div>
                        </div> :
                        <div onMouseLeave={()=>show22()}
                             style={{position:"inherit",
                            width: 300,
                            height: 400}}>
                            <div style={{
                                fontSize: 14,
                                fontWeight: "bold",
                                paddingTop: 90}}>
                               <ul>
                                   <li>
                                       Точное понимание потребности клиента
                                   </li>
                                   <li>
                                        Механизм быстрого апробирования решений в бизнес-процессах своих клиентов с последующей доработкой
                                   </li>
                                   <li>
                                        Наличие собственного центра сопровождения программно-аппаратных комплексов своих клиентов
                                   </li>

                               </ul>
                            </div>
                        </div>
                    }



                </Paper>
            </div>
            <div style={{position:"inherit"}}>
                <Paper style={{padding: 5}}  elevation={3} >
                    {showCard3 ? <div onMouseEnter={()=>show3()} style={{position:"inherit",
                        backgroundImage: `url("http://sellwin-system.by/r/home03cardleyOptimized.jpg")`,
                        width: 300,
                        height: 400}}>
                        <div style={{textAlign: "center",
                            fontSize: 14,
                            fontWeight: "bold",
                            paddingTop: 90}}>
                            ПРОГРАММА ЛОЯЛЬНОСТИ
                        </div>
                    </div> : <div style={{position:"inherit",
                        width: 300,
                        height: 400}}>
                        <div onMouseLeave={()=>show33()} style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            paddingTop: 90}}>
                            <ul>
                                <li>
                                    В нашей компании действует гибкая система лояльности для наших постоянных клиентов
                                </li>
                                <li>
                                    VIP обслуживание
                                </li>
                                <li>
                                    Многоуровневое поощрение клиентов
                                </li>

                            </ul>
                        </div>
                    </div>}

                </Paper>
            </div>
        </div>
      </Box>
        <div style={{textAlign: "center", fontSize: 24, fontWeight: "bold", padding: 10 , paddingTop: 15}}>DELIVERY TEAMS</div>
        <hr/>
        <div style={{display: "flex", justifyContent: "space-around", height: 150}}>
            <img src="https://softgreat.com/wp-content/uploads/2018/07/android-line-1.png"/>
            <img src="https://softgreat.com/wp-content/uploads/2018/07/php-line-1.jpg"/>
            <img src="https://softgreat.com/wp-content/uploads/2018/07/ios-line-1.png"/>
            <img src="https://softgreat.com/wp-content/uploads/2018/07/python-line-320x202.png"/>
            <img src="https://softgreat.com/wp-content/uploads/2018/07/react-line-1.png"/>
            <img src="https://softgreat.com/wp-content/uploads/2018/07/ai-line-1.png"/>
        </div>


        <hr/>

        <div style={{textAlign: "center", fontSize: 24, fontWeight: "bold", padding: 10 }}>About</div>
        <BasicTabs/>
        <SellwinCompany/>
        <div style={{paddingTop: 100}}>
            <Footer/>
        </div>

    </div>
  );
}

export default App;
