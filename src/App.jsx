import logo from './logo.svg';
import './App.css';

// Imported components
import Header from './components/header';
import MobileHeader from './components/mobileHeader';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import Hero from './components/hero';
import ProjectCard from './components/ProjectCard';
import Projects from './components/projects';


function App() {

  // const customHeaderDT = styled(Box)(({theme}) => ({
  //   [theme.breakpoints.down('sm')]: {
  //     display: 'none'
  //   },
    
  // }))

  // const customHeaderMobile = styled(Box)(({theme}) => ({
  //   // [theme.breakpoints.]
  // }))

  // May use these later ^^^^^ not sure as of yet

  return (
    <div className="App">
      {/* Header Components goes here */}
      <Header />
      <MobileHeader />
      <Hero />
      <Projects />

      {/* Add react router and switch statement */}
      {/* Footer Component goes here */}
    </div>
  );
}

export default App;
