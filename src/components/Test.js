import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Model from './Model'

const Test = () => {


    const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
    scroll-behavior: smooth;
    `


  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <ambientLight intensity={1} />
            <directionalLight position={[3,2,1]} />
            <Model />
        </Canvas>
    </Container>
  )
}

export default Test