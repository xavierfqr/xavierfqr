import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Sky } from '@react-three/drei';
import {LetterX, LetterA, LetterE, LetterI, LetterR, LetterV} from './LetterX';
import { Physics, useBox } from '@react-three/cannon';


function WrapLetter(props : any) {
    const { camera } = useThree();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [radius, setRadius] = React.useState(500);
    const [angle, setAngle] = React.useState(0);

    const [ref, api] = useBox(() => ({ mass: 0, position: [0, 0, 0] }))



    useFrame(state => {
        camera.position.x = radius * Math.cos(angle);  
        camera.position.z = radius * Math.sin(angle);
        setAngle(angle => angle += 0.005);
        if (!isLoaded){
            setRadius((radius) => radius - (6 * radius / 100));
        }
        //camera.rotation.set(0, 0.1 * time, 0);
    })

    React.useEffect(() => {
        if (radius < 5) {
            setIsLoaded(true);
            setRadius(5);
            api.mass.set(1);
        }
    }, [radius])

    return (
        <mesh ref={ref} onClick={() => {console.log("hoiwefhj");api.mass.set(1)}}>
            <LetterX position={[-2.5, 0, 0]}/>
            <LetterA position={[-1.5, 0, 0]}/>
            <LetterV position={[-0.5, 0, 0]}/>
            <LetterI position={[0.6, 0, 0]}/>
            <LetterE position={[1.3, 0, 0]}/>
            <LetterR position={[2.2, 0, 0]}/>
        </mesh>
    )
}

function HomePage({scrollDown} : any) {

    return (
        <div style={{height: '100%', position: 'relative'}}>
            <Canvas style={{background: 'black', position:'absolute'}}>
                <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}/>
                <Stars/>
                <spotLight position={[2, 2, 10]} angle={0.7}/>
                <spotLight position={[2, 2, -10]} angle={0.7}/>
                <Physics>
                    <WrapLetter/>
                </Physics>
            </Canvas>
            <div style={{position: 'absolute', zIndex: 10, color:'white', left: 0, right: 0, bottom: 10, textAlign:'center', cursor: 'pointer'}} onClick={scrollDown}>Scroll Down !</div>
        </div>
    )
}

export default HomePage
