import './App.css';

import Companies from './components/companies/Companies';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Skill from './components/skill/Skill';
import Work from './components/work/Work';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Skill />
      <Work />
    </>
  );
}

export default App;
