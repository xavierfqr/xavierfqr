import React from 'react';
import './App.css';
import HomeSection from './sections/HomeSection';
import ProjectsSection from './sections/ProjectsSection';
import ProfileSection from './sections/ProfileSection';

function App() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const nextSectionRef: any = React.useRef(null);
  const executeScroll = () => nextSectionRef.current.scrollIntoView();

  return (
    <div className="container" ref={containerRef}>
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
