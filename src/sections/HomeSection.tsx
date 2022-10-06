import React from 'react';
import styles from './HomeSection.module.css';

interface Props {
  containerRef: React.RefObject<HTMLElement>;
  scrollDown: any;
}

function HomePage({ containerRef, scrollDown }: Props) {
  const starsRef = React.useRef<HTMLImageElement>(null);
  const moonRef = React.useRef<HTMLImageElement>(null);
  const frontWindRef = React.useRef<HTMLImageElement>(null);
  const frontRef = React.useRef<HTMLImageElement>(null);
  const frontParticlesRef = React.useRef<HTMLImageElement>(null);
  const exploreRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    containerRef.current?.addEventListener('scroll', () => {
      const scrollValue = containerRef.current?.scrollTop;
      starsRef.current!.style.left = scrollValue! * 0.2 + 'px';
      moonRef.current!.style.top = scrollValue! * 0.6 + 'px';
      frontWindRef.current!.style.left = scrollValue! * 0.05 + '%';
      frontRef.current!.style.bottom = -100 + scrollValue! * 0.17 + 'px';
      frontParticlesRef.current!.style.right = scrollValue! * 0.2 + 'px';
    });
    exploreRef.current?.addEventListener('click', () => {
      scrollDown();
    });
  }, [containerRef, scrollDown]);

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img alt="stars" ref={starsRef} id={styles.stars} src="landing-page/stars.png" />
        <img alt="moon" ref={moonRef} id={styles.moon} src="landing-page/moon.png" />
        <img alt="back-wind" id={styles.backWind} src="landing-page/back-wind.png" />
        <img alt="moutain" id={styles.mountain} src="landing-page/mountain.png" />
        <img alt="front-wind" ref={frontWindRef} id={styles.frontWind} src="landing-page/front-wind.png" />
        <img alt="front" ref={frontRef} id={styles.front} src="landing-page/front.png" />
        <img alt="particles" ref={frontParticlesRef} id={styles.frontParticles} src="landing-page/front-particle.png" />
        <div ref={exploreRef} id={styles.explore}>
          Welcome !
        </div>
      </section>
    </div>
  );
}

export default HomePage;
