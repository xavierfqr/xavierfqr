/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/letterR.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.R.geometry} material={materials['0057D0']} position={[3, 0, -3.03]} />
    </group>
  )
}

useGLTF.preload('/letterR.gltf')
