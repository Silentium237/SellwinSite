import * as THREE from 'three'
import { ShaderMaterial } from "three"

export default class SunHaloMaterial extends ShaderMaterial {
    constructor(options: { color: THREE.Color }) {
        super({
            vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
            fragmentShader: `
        uniform vec3 color;

        varying vec2 vUv;

        void main() {
          float d = 0.0;
          d = length( abs(vUv)-.5 );
          gl_FragColor = vec4(color, smoothstep(0.1,.5,d)* smoothstep(.5,.3,d))*0.75;
        }
      `,
            transparent: true,
        })
        this.uniforms = {
            color: { value: options.color },
        }
    }
}
