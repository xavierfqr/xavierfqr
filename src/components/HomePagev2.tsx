import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera, Sky } from '@react-three/drei';
import {LetterX, LetterA, LetterE, LetterI, LetterR, LetterV} from './Letters';
import { Physics, useBox } from '@react-three/cannon';
import styles from './HomePagev2.module.css';


function WrapLetter(props : any) {
    const { camera } = useThree();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [radius, setRadius] = React.useState(500);
    const [angle, setAngle] = React.useState(0);
    const [mass, setMass] = React.useState(0)

    const [ref, api] = useBox(() => ({ mass: mass, position: [0, 0, 0] }))



    useFrame(state => {
        camera.position.x = radius * Math.cos(angle);  
        camera.position.z = radius * Math.sin(angle);
        setAngle(angle => angle += 0.005);
        if (!isLoaded){
            setRadius((radius) => radius - (6 * radius / 100));
        }
    })

    React.useEffect(() => {
        if (radius < 5) {
            setIsLoaded(true);
            setRadius(5);
            setMass(1)
            api.mass.set(mass)
        }
    }, [radius])

    return (
        <mesh ref={ref} onClick={() => {api.mass.set(mass)}}>
            <LetterX position={[-2.5, 0, 0]}/>
            <LetterA position={[-1.5, 0, 0]}/>
            <LetterV position={[-0.5, 0, 0]}/>
            <LetterI position={[0.6, 0, 0]}/>
            <LetterE position={[1.3, 0, 0]}/>
            <LetterR position={[2.2, 0, 0]}/>
        </mesh>
    )
}

function HomePagev2({scrollDown} : any) {
    return (
        <div className={styles.container}>
            <Canvas className={styles.canvas}>
                <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}/>
                <Stars/>
                <spotLight position={[2, 2, 10]} angle={0.7}/>
                <spotLight position={[2, 2, -10]} angle={0.7}/>
                <Physics>
                    <WrapLetter/>
                </Physics>
            </Canvas>
            <div className={`${styles.scrollDown} ${styles.bounce}`} onClick={scrollDown}>
                <p>Scroll Down !</p>
                <img src="white-arrow-down.png" className={styles.image}></img>
            </div>
            
        </div>
    )
}

export default HomePagev2
