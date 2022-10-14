import React, {useMemo, useRef} from "react";
import * as THREE from 'three'
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three"
import earth from "../Earth/earth.jpg"
import earth2 from "../Earth/earth2.jpg"
import earth3 from "../Earth/earth3.jpg"
import earth4 from "../Earth/earth4.jpg"
import earth5 from "../Earth/earth5.jpg"
import earth6 from "../Earth/earth6.jpg"
import earth7 from "../Earth/earth7.jpg"
import earth8 from "../Earth/earth8.jpg"
import earth9 from "../Earth/earth9.jpg"
import earth10 from "../Earth/earth10.jpg"
import earth11 from "../Earth/earth11.jpg"
import logo2 from "../Earth/sellwin_logo.png"
import s1 from "../Earth/s1.png"
import { useFrame } from "react-three-fiber";


import {OrbitControls, Text} from '@react-three/drei'
import SunHaloMaterial from "../Header/FakeSphere";




export function Earth (){

    const [colorMap]= useLoader(TextureLoader, [earth11])
    const [logo]= useLoader(TextureLoader, [s1])

    const COLORS: { [key: string]: THREE.Color } = {
        codGray: new THREE.Color(0x121212),
        brightTurquoise: new THREE.Color(0x39f5e6),
        wewak: new THREE.Color(0xffd8bb),
        mandy: new THREE.Color(0xe84971),
    }
    let sunHaloMaterial = new SunHaloMaterial({
        color: COLORS.mandy,
    })

    const group = useRef();

    useFrame(() => {
        group.current.rotation.y += 0.005;
    });

    return <>
        <ambientLight intensity={1}/>
        {/*<pointLight color="blue" position={[2,0,2]} intensity={1.2}/>*/}
        {/*<mesh>*/}
        {/*    <sphereGeometry args={[2.7, 32 , 32]}/>*/}
        {/*    <meshPhongMaterial*/}
        {/*        opacity={0.4}*/}
        {/*        depthWrite={ true}*/}
        {/*        transparent={true}*/}
        {/*        map={logo}*/}
        {/*        color="white"/>*/}
        {/*</mesh>*/}
    <mesh ref={group}>
            <sphereGeometry  args={[2.5, 32 , 32]} />
            <meshPhongMaterial color="red"/>
            <meshStandardMaterial map={colorMap} />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4}
            />
    </mesh>

    </>
}
export default Earth