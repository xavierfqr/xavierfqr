import React, { useEffect } from 'react';
import './App.css';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/ProjectsSection';
import ProfileSection from './sections/ProfileSection';

function App() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const nextSectionRef: any = React.useRef(null);
  const cursor: any = React.useRef(null);
  const executeScroll = () => nextSectionRef.current.scrollIntoView();

  const handleMouseMove = (event: MouseEvent) => {
    if (!cursor || !cursor.current) return;
    cursor.current.style.top = event.pageY - 15 + 'px';
    cursor.current.style.left = event.pageX - 15 + 'px';
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="cursor" ref={cursor}></div>
      <section>
        <HomeSection containerRef={containerRef} scrollDown={executeScroll} />
      </section>
      <section ref={nextSectionRef}>
        <ProfileSection />
      </section>
      <section>
        <ProjectsSection />
      </section>
    </div>
  );
}

export default App;
