/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/letterA.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.A.geometry} material={materials['0057D0']} position={[0, 0, -6]} />
    </group>
  )
}

useGLTF.preload('/letterA.gltf')
