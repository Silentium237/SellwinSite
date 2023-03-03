import React, {useMemo, useRef} from "react";
import * as THREE from 'three'
import {useLoader} from "@react-three/fiber";
import {TextureLoader, DataArrayTexture} from "three"
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
import earth12 from "../Earth/121.jpg"
import reactImg from "../Earth/react.jpg"
import vueImg from "../Earth/vue.webp"
import angularImg from "../Earth/angular.png"
import earth13 from "../Earth/123.jpg"
import logo2 from "../Earth/sellwin_logo.png"
import s1 from "../Earth/s1.png"
import { useFrame } from "react-three-fiber";


import {OrbitControls, Tetrahedron, Text} from '@react-three/drei'
import SunHaloMaterial from "../Header/FakeSphere";




export function Earth (props){
    let show = props.show
    const [colorMap]= useLoader(TextureLoader, [earth13])
    const [reactImg1]= useLoader(TextureLoader, [reactImg])
    const [vueImg1]= useLoader(TextureLoader, [vueImg])
    const [angularImg1]= useLoader(TextureLoader, [angularImg])

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
    const group1 = useRef();
    const group2 = useRef();
    const group3 = useRef();
    const group4 = useRef();

    // useFrame(() => {
    //     console.log(group.current)
    //     if (group.current.rotation.y < 0.65){
    //         group.current.rotation.y += 0.005;
    //     }
    //     if (group.current.rotation.x < 0.45){
    //         group.current.rotation.x += 0.005;
    //     }
    //     // group.current.rotation.y = 11;
    //     // group.current.rotation.z += 0.02;
    //     // group.current.position.z += 0.02;
    //     if (group.current.scale.z < 1.9){
    //         group.current.scale.z += 0.005;
    //         group.current.scale.x += 0.005;
    //         group.current.scale.y += 0.005;
    //     }
    //     // group.current.scale.z += 0.02;
    // });

    useFrame(() => {
        // console.log(group.current)
        // if (group.current.rotation.y < 0.2){
        //     group.current.rotation.y += 0.015;
        // }
        if (show){
            if (group.current.rotation.x < 1.54){
                group.current.rotation.x += 0.015;
            }

            // group.current.rotation.y = 11;
            // group.current.rotation.z += 0.02;
            // group.current.position.z += 0.02;
            if (group.current.scale.z < 4.5){
                group.current.scale.z += 0.015;
                group.current.scale.x += 0.015;
                group.current.scale.y += 0.015;
            }
        }
        if (show){

                group4.current.rotation.y += 0.015;
            }
            if (show){

                group1.current.rotation.y += 0.015;
            }
            if (show){

                group2.current.rotation.y += 0.015;
                // group2.current.scale.z += 0.015;
                // group2.current.scale.x += 0.015;
                // group2.current.scale.y += 0.015;
            }
            if (show){

                group3.current.rotation.y += 0.015;
                // group3.current.scale.z += 0.015;
                // group3.current.scale.x += 0.015;
                // group3.current.scale.y += 0.015;
            }
            // if (show){
            //     if (group1.current.scale.z < 2.5){
            //         group1.current.scale.z += 0.015;
            //         group1.current.scale.x += 0.015;
            //         group1.current.scale.y += 0.015;
            //         group2.current.scale.z += 0.015;
            //         group2.current.scale.x += 0.015;
            //         group2.current.scale.y += 0.015;
            //         group3.current.scale.z += 0.015;
            //         group3.current.scale.x += 0.015;
            //         group3.current.scale.y += 0.015;
            //         group4.current.scale.z += 0.015;
            //         group4.current.scale.x += 0.015;
            //         group4.current.scale.y += 0.015;
            //     }
            //
            // }



        // group.current.scale.z += 0.02;
    });


    // const width = 512;
    // const height = 512;
    // const depth = 100;
    //
    // const size = width * height;
    // const data = new Uint8Array( 4 * size * depth );
    //
    // for ( let i = 0; i < depth; i ++ ) {
    //
    //     const color = new THREE.Color( Math.random(), Math.random(), Math.random() );
    //     const r = Math.floor( color.r * 255 );
    //     const g = Math.floor( color.g * 255 );
    //     const b = Math.floor( color.b * 255 );
    //
    //     for ( let j = 0; j < size; j ++ ) {
    //
    //         const stride = ( i * size + j ) * 4;
    //
    //         data[ stride ] = r;
    //         data[ stride + 1 ] = g;
    //         data[ stride + 2 ] = b;
    //         data[ stride + 3 ] = 255;
    //
    //     }
    // }
    //
    // const texture = new THREE.DataArrayTexture( data, width, height, depth );
    // texture.needsUpdate = true;

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
            {/*<sphereGeometry  args={[2.5, 32 , 32]} /> */}
        <boxGeometry  args={[3.3,3.3,3.3]} position={[7,0,2]} />
            <meshPhongMaterial color="red"/>
            <meshStandardMaterial map={colorMap} />
            <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4}

            />
    </mesh>
        {/*<mesh ref={group}>*/}
        {/*    /!*<sphereGeometry  args={[2.5, 32 , 32]} /> *!/*/}
        {/*    <boxGeometry  args={[5, 5,5]} />*/}
        {/*    <meshPhongMaterial color="red"/>*/}
        {/*    <meshStandardMaterial map={colorMap} />*/}
        {/*    <OrbitControls*/}
        {/*        enableZoom={true}*/}
        {/*        enablePan={false}*/}
        {/*        enableRotate={true}*/}
        {/*        zoomSpeed={0.6}*/}
        {/*        panSpeed={0.5}*/}
        {/*        rotateSpeed={0.4}*/}

        {/*    />*/}
        {/*</mesh>*/}
        <mesh ref={group1} position={[0, 0, 0.2]} >
            {/*<sphereGeometry  args={[2.5, 32 , 32]} /> */}
            <boxGeometry  args={[0.02,0.1,0.1]} />
            <meshStandardMaterial  color="red" />
            <meshStandardMaterial map={reactImg1} />
            <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4}
            />
        </mesh>
        <mesh ref={group2} position={[0, 0, 0.8]}>
            {/*<sphereGeometry  args={[2.5, 32 , 32]} /> */}
            <boxGeometry  args={[0.02,0.1,0.1]} />
            <meshStandardMaterial  color="blue" />
            <meshStandardMaterial map={vueImg1} />
            <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4}
            />
        </mesh>
        <mesh ref={group3} position={[0, 0, 0.4]} >
            {/*<sphereGeometry  args={[2.5, 32 , 32]} /> */}
            <boxGeometry  args={[0.02,0.1,0.1]} />
            <meshStandardMaterial  color="yellow" />
            <meshStandardMaterial map={angularImg1} />
            <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4}
            />
        </mesh>
        <mesh ref={group4} position={[0, 0, 0.6]}>
            {/*<sphereGeometry  args={[2.5, 32 , 32]} /> */}
            <boxGeometry  args={[0.02,0.1,0.1]} />
            <meshStandardMaterial  color="black" />
            <OrbitControls
                enableZoom={true}
                enablePan={false}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4}
            />
        </mesh>




        {/*<pointLight color="red" position={[1,0,1]} intensity={1.2}/>*/}
        {/*<Tetrahedron args={2}  castShadow receiveShadow>*/}
        {/*    /!* TODO Write texture creation function that's specific to D4 *!/*/}
        {/*    <meshPhongMaterial attachArray="material" color="grey" />*/}
        {/*    <meshPhongMaterial attachArray="material" color="white" />*/}
        {/*    <meshPhongMaterial attachArray="material" color="brown" />*/}
        {/*    <meshPhongMaterial attachArray="material" color="black" />*/}
        {/*</Tetrahedron>*/}
      {/*  <mesh  >*/}

      {/*      <icosahedronGeometry/>*/}

      {/*      /!*    <meshStandardMaterial attachArray="material" map={colorMap1} />*!/*/}
      {/*      /!*    <meshStandardMaterial attachArray="material"  map={colorMap2} />*!/*/}
      {/*/!*    {sides.map((item, i) => (*!/*/}
      {/*/!*  <meshStandardMaterial attachArray="material"  map={item} key={i}  />*!/*/}
      {/*/!*))}*!/*/}
      {/*      /!*    <meshStandardMaterial attachArray="material" map={colorMap3} />*!/*/}
      {/*          <meshStandardMaterial attachArray="material" color={texture}  />*/}
      {/*      /!*</dodecahedronGeometry>*!/*/}
      {/*      /!*<meshPhongMaterial />*!/*/}
      {/*      /!*<meshBasicMaterial color={{ color: 0xffff00 }}  />*!/*/}
      {/*      /!*<meshPhongMaterial attachArray="material" color="grey" />*!/*/}
      {/*      /!*<meshPhongMaterial attachArray="material" color="white" />*!/*/}
      {/*      /!*<meshPhongMaterial attachArray="material" color="brown" />*!/*/}
      {/*      /!*<meshPhongMaterial attachArray="material" color="black" />*!/*/}

      {/*      <OrbitControls*/}
      {/*          enableZoom={true}*/}
      {/*          enablePan={false}*/}
      {/*          enableRotate={true}*/}
      {/*          zoomSpeed={0.6}*/}
      {/*          panSpeed={0.5}*/}
      {/*          rotateSpeed={0.4}*/}

      {/*      />*/}
      {/*  </mesh>*/}



    </>
}
export default Earth