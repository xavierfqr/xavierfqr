import React from 'react';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  const nextSectionRef: any = React.useRef(null);
  const executeScroll = () => nextSectionRef.current.scrollIntoView();
  return (
    <div className='container'>
      <section>
        <HomePage scrollDown={executeScroll}/>
      </section>
      <section ref={nextSectionRef}>
        <div>lqiefjioqej</div>
      </section>
    </div>
  );
}

export default App;
