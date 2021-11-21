import React from 'react'
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                <img id={styles.stars} src="landing-page/stars.png"/>
                <img id={styles.moon} src="landing-page/moon.png"/>
                <img id={styles.backWind} src="landing-page/back-wind.png"/>
                <img id={styles.mountain} src="landing-page/mountain.png"/>
                <img id={styles.frontWind} src="landing-page/front-wind.png"/>
                <img id={styles.front} src="landing-page/front.png"/>
                <img id={styles.frontParticles} src="landing-page/front-particle.png"/>
            </section>
        </div>
    )
}

export default HomePage
