import React from "react"
import {Suspense} from "react";
// import './App.css';
import DrawerAppBar from "./components/Header/Header";
// import { RenderTexture, OrbitControls, ContactShadows } from '@react-three/drei'
// import { Canvas, useFrame, createPortal } from '@react-three/fiber'
// import Earth from "./components/Earth/Earth";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import BasicTabs from "./components/ListAbout/ListAbout";
import Footer from "./components/Footer/Footer";
import SellwinCompany from "./components/SellwinCompany/SellwinCompany";
// import comandos from "./comandos.jpg"
// import complecs from "./complecs.jpg"
// import complecs2 from "./complecs2.jpg"
// import loyalty from "./loyalty.jpg"
// import logo from './logo.svg'
// import logo2 from './icons8-angularjs.svg'
// import logo3 from './icons8-vue-js.svg'
// import logo4 from './icons8-android.svg'
// import logo5 from './icons8-php.svg'
// import logo6 from './icons8-python.svg'
// import logo7 from './icons8-ос-mac.svg'
// import logo8 from './icons8-node-js.svg'
// import Slider from "./components/Slider/Slider";
// import data from "./components/Slider/data"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import engineer from "./Engineer.svg"
import consult from "./consult.svg"
import design from "./design.svg"
import operate from "./operate.svg"
import optimize from "./optimize.svg"
import StyleSlider from "./components/Slider/styles.css"

import s from './App.css'
import DemoCarousel from "./components/AboutAs/AboutUs";
import {Grid} from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ourWork from './OurWork1.png'
import ourWork2 from './OurWork1_1.png'
import ourWork3 from './OurWork1_2.png'
import ContactUs from "./components/ContactUS/ContactUs";
import OurResults from "./components/OurResults/OurResults";
import CardShow from "./components/CardShow/CardShow";
import CardShowMobile from "./components/CardShowMobile/CardShowMobile";
import AboutUs from "./components/AboutAs/AboutUs";
import OurProject from "./components/OurProject/OurProject";



function App() {


    const [lang, setLang] = React.useState(true)


    const changeLanguage = (item) => {
        setLang(!item)
    }








    let Width = window.innerWidth

  return (
    <div style={{background: '#1f2e4b',fontFamily: "'Space Grotesk', sans-serif"}} >


    <DrawerAppBar lang={lang} changeLanguage={changeLanguage} />


            <AboutUs lang={lang}   />

        {Width > 1024 ?   <CardShow lang={lang}/> :    <CardShowMobile lang={lang}/>}


        <ContactUs lang={lang}/>
        <OurResults lang={lang}/>
        <OurProject lang={lang}/>


        <hr style={{marginTop: 20, opacity: 0.5}}/>

        <div style={{textAlign: "center", fontSize: 24, fontWeight: "bold", padding: 10 , paddingTop: 15, color: "white"}}>DELIVERY TEAMS</div>

        <SellwinCompany/>


        <div style={{paddingTop: 50}}>
            <Footer/>
        </div>

    </div>
  );
}

export default App;
