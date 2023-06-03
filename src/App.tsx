import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Routes as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Results from './pages/results';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Footer from './components/footer';
import FirstImage from './pages/services/FirstImage';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
})

function App() {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/results' element={<Results />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
