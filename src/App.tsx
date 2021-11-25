import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import WelcomePage from './components/WelcomePage';

function App() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const nextSectionRef: any = React.useRef(null);
  const executeScroll = () => nextSectionRef.current.scrollIntoView();

  return (
    <div className='container' ref={containerRef}>
      <section>
        <HomePage containerRef={containerRef}/>
      </section>
      <section ref={nextSectionRef}>
        <WelcomePage/>
      </section>
    </div>
  );
}

export default App;
