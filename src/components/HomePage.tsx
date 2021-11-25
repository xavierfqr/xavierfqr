import React from 'react'
import styles from "./HomePage.module.css";

interface Props {
    containerRef: React.RefObject<HTMLElement>
}

function HomePage({containerRef} : Props) {

    const starsRef = React.useRef<HTMLImageElement>(null);
    const moonRef = React.useRef<HTMLImageElement>(null);
    const frontWindRef = React.useRef<HTMLImageElement>(null);
    const frontRef = React.useRef<HTMLImageElement>(null);
    const frontParticlesRef = React.useRef<HTMLImageElement>(null)


    React.useEffect(() => {
        containerRef.current?.addEventListener('scroll', () => {

            const scrollValue = containerRef.current?.scrollTop;
            starsRef.current!.style.left = scrollValue! * 0.2 + 'px';
            moonRef.current!.style.top = scrollValue! * 0.6 + 'px';
            frontWindRef.current!.style.left = scrollValue! * 0.05 + '%';
            frontRef.current!.style.bottom = -100 + scrollValue! * 0.17 + 'px';
            frontParticlesRef.current!.style.right = scrollValue! * 0.2 + 'px';
        })
    }, [])

    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <img ref={starsRef} id={styles.stars} src="landing-page/stars.png"/>
                <img ref={moonRef} id={styles.moon} src="landing-page/moon.png"/>
                <img id={styles.backWind} src="landing-page/back-wind.png"/>
                <img id={styles.mountain} src="landing-page/mountain.png"/>
                <img ref={frontWindRef} id={styles.frontWind} src="landing-page/front-wind.png"/>
                <img ref={frontRef} id={styles.front} src="landing-page/front.png"/>
                <img ref={frontParticlesRef} id={styles.frontParticles} src="landing-page/front-particle.png"/>
            </section>
        </div>
    )
}

export default HomePage
