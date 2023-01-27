import './App.css';

// Imported components
import Header from './components/header';
import MobileHeader from './components/mobileHeader';
import Hero from './components/hero';
import Projects from './components/projects';
import Footer from './components/Footer';
import About from './components/About';


function App() {

  return (
    <div className="App">
      {/* Header Components goes here */}
      <Header />
      <MobileHeader />
      <Hero />
      <About />
      <Projects />

      {/* Add react router and switch statement */}
      {/* Footer Component goes here */}
      <Footer />
    </div>
  );
}

export default App;
