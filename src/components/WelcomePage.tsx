import React from 'react';
import styles from './WelcomePage.module.css';

function WelcomePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Hey there ! 👋</h1>
                <img className={styles.memoji} src="myMemoji.png"/>
            </header>
        </div>
    )
}

export default WelcomePage
