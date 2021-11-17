import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import WelcomePage from './components/WelcomePage';

function App() {
  const nextSectionRef: any = React.useRef(null);
  const executeScroll = () => nextSectionRef.current.scrollIntoView();
  return (
    <div className='container'>
      <section>
        <HomePage scrollDown={executeScroll}/>
      </section>
      <section ref={nextSectionRef}>
        <WelcomePage/>
      </section>
    </div>
  );
}

export default App;
