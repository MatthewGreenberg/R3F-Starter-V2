import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Scene() {
    return (
        <Canvas
            style={{
                background:
                    'linear-gradient(90deg, rgba(249,249,249,1) 0%, rgba(238,174,202,1) 53%, rgba(148,187,233,1) 100%)',
            }}
            dpr={[1, 2]}
        >
            <Suspense fallback={<h1>loading...</h1>}>
                <mesh>
                    <OrbitControls />
                    <boxBufferGeometry />
                    <meshBasicMaterial color={new THREE.Color('deeppink')} />
                </mesh>
            </Suspense>
        </Canvas>
    )
}

export default Scene
