import React from 'react';
import styles from './ProfileSection.module.css';

function WelcomePage() {
  const downloadResume = () => {
    fetch('resume_xavier.facqueur.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume_xavier.facqueur.pdf';
        alink.click();
      });
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Hey there ! 👋</h1>
        <img alt="memoji" className={styles.memoji} src="myMemoji.png" />
      </header>
      <main className={styles.main}>
        <div className={styles.upperMain}>
          <h3 className={styles.intro}>
            Just graduated from engeneering school. I'm a full stack software engineer mainly focused on ReactJs and
            NodeJs technologies.
          </h3>
          <img className={styles.gif} alt="front-end GIF" src="front-endGIF.gif" />
        </div>
        <div className={styles.downMain}>
          <a target="_blank" rel="noreferrer" href="https://github.com/xavierfqr">
            <img color="white" width="20px" alt="github" src="github.svg"></img>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/xavier-facqueur-06413a195/?locale=en_US"
          >
            <img width="20px" alt="github" src="linkedin.svg"></img>
          </a>
          <div onClick={downloadResume} className={styles.resume}>
            Download resume <img alt="pdf" src="pdf.png"></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WelcomePage;
