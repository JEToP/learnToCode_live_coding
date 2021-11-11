import './App.css';

import Companies from './components/companies/Companies';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
    </>
  );
}

export default App;
