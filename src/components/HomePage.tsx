import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import {LetterX, LetterA, LetterE, LetterI, LetterR, LetterV} from './LetterX';
import { useBox } from '@react-three/cannon';


function Box() {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" color={'hotpink'}/>
        </mesh>
    )
}

function WrapLetter(props : any) {
    const { camera } = useThree();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [radius, setRadius] = React.useState(500);
    const [angle, setAngle] = React.useState(0);



    useFrame(state => {

        if (isLoaded){
            console.log(isLoaded)
            camera.position.x = radius * Math.cos( angle );  
            camera.position.z = radius * Math.sin( angle );
            setAngle(angle => angle += 0.005);
        }
        else {
            camera.position.x = radius * Math.cos( angle );  
            camera.position.z = radius * Math.sin( angle );
            console.log(radius)
            setRadius((radius) => radius - (6 * radius / 100));
            setAngle(angle => angle += 0.005);
        }
        //camera.rotation.set(0, 0.1 * time, 0);
    })

    React.useEffect(() => {
        if (radius < 5) {
            setIsLoaded(true);
            setRadius(5);
        }
    }, [radius])

    return (
        <mesh>
            <LetterX position={[-2.5, 0, 0]}/>
            <LetterA position={[-1.5, 0, 0]}/>
            <LetterV position={[-0.5, 0, 0]}/>
            <LetterI position={[0.6, 0, 0]}/>
            <LetterE position={[1.3, 0, 0]}/>
            <LetterR position={[2.2, 0, 0]}/>
        </mesh>
    )
}

function HomePage() {
    return (
        <Canvas style={{background: 'black'}}>
            <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}/>
            <Stars/>
            <spotLight position={[2, 2, 10]} angle={0.7}/>
            <spotLight position={[2, 2, -10]} angle={0.7}/>
            <WrapLetter/>
        </Canvas>
    )
}

export default HomePage