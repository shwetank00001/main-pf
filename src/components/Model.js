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
                    <color attach="background" args={["purple"]} />
                    <Text fontFamily={"Roboto"} fontSize= {1} color="black">
                        React
                    </Text>
            </RenderTexture>

        </meshStandardMaterial>
    </mesh>
  )
}

export default Model