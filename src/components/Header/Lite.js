import React from "react";
import * as THREE from 'three'


import SunHaloMaterial from "../Header/FakeSphere";




export function Lite (){


    const COLORS: { [key: string]: THREE.Color } = {
        codGray: new THREE.Color(0x121212),
        brightTurquoise: new THREE.Color(0x39f5e6),
        wewak: new THREE.Color(0xffd8bb),
        mandy: new THREE.Color(0xe84971),
        white: new THREE.Color(0xffffff),
    }
    let sunHaloMaterial = new SunHaloMaterial({
        color: COLORS.white,
    })

    return <>
        <ambientLight intensity={1}/>

        <mesh material={sunHaloMaterial} position={[-0.6, -0.6, -0.001]}>
            <ringBufferGeometry attach="geometry" args={[1, 3.3, 36]} />
        </mesh>


    </>
}
export default Lite