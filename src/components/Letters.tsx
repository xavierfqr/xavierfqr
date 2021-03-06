/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LetterX({ ...props }) {
  const group : any = useRef()
  const { nodes, materials } : any = useGLTF('/letterX.gltf');

  useFrame(state => {
    const time = state.clock.getElapsedTime();
    group.current.rotation.z = Math.cos(time * 4 / 4) / 8;
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.X.geometry} material={materials['0057D0']} position={[0, 0, 0]} material-color={'darkblue'} />
    </group>
  )
}

export function LetterA({ ...props }) {
  const group = useRef()
  const { nodes, materials } : any = useGLTF('/letterA.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.A.geometry} material={materials['0057D0']} position={[0, 0, 0]} />
    </group>
  )
}

export function LetterV({ ...props }) {
  const group = useRef()
  const { nodes, materials } : any = useGLTF('/letterV.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.V.geometry} material={materials['0057D0']} position={[0, 0, 0]} />
    </group>
  )
}
export function LetterI({ ...props }) {
  const group = useRef()
  const { nodes, materials } : any = useGLTF('/letterI.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.I.geometry} material={materials['0057D0']} position={[0, 0, 0]} />
    </group>
  )
}

export function LetterE({ ...props }) {
  const group = useRef()
  const { nodes, materials } : any = useGLTF('/letterE.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.E.geometry} material={materials['0057D0']} position={[0, 0, 0]} />
    </group>
  )
}

export function LetterR({ ...props }) {
  const group = useRef()
  const { nodes, materials } : any = useGLTF('/letterR.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.R.geometry} material={materials['0057D0']} position={[0, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/letterX.gltf')
useGLTF.preload('/letterA.gltf')
useGLTF.preload('/letterV.gltf')
useGLTF.preload('/letterI.gltf')
useGLTF.preload('/letterE.gltf')
useGLTF.preload('/letterR.gltf')
