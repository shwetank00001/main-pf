import React from 'react'
import { PerspectiveCamera, RenderTexture } from '@react-three/drei'

import { Text } from '@react-three/drei'


const Model = () => {
    
    // const textRef = React.useRef()
    // useFrame(state => (textRef.current.position.x = state.clock.elapsedTime))
  return (
    <mesh>
        <boxGeometry args={[1.5,1.5,1.5 ]} />
        <meshStandardMaterial >
            <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0,0,8]} />
                    <ambientLight intensity={1} />
                    <color attach="background" args={["black"]} intensity={1} />
                    <Text fontFamily={"Roboto"} fontSize= {0.5} color="red">
                        MERN
                    </Text>
                    <Text position={[-1.5, 1.5, 2]} rotation={[0, 0, 0]} fontFamily="Roboto" fontSize={0.5} color="red">
                        Front
                        </Text>

            </RenderTexture>

        </meshStandardMaterial>
    </mesh>
  )
}

export default Model