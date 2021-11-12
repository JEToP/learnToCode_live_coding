import './App.css';

import Companies from './components/companies/Companies';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
