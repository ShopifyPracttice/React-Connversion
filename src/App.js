import './App.css';
import ArrowUp from "./images/icon/up-arrow.svg";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { useEffect } from 'react';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Services from './Pages/Services';
import IndependentQualityAssurance from './Pages/IndependentQualityAssurance';
import SitePerformanceImprovement from './Pages/SitePerformanceImprovement';
import About from './Pages/About';
function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTopBtn = document.querySelector('.scrollTopbtn');
      if (window.scrollY >= 100) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    window.addEventListener('scroll', handleScroll);

    const scrollTopBtn = document.querySelector('.scrollTopbtn');
    scrollTopBtn.addEventListener('click', scrollToTop);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollTopBtn.removeEventListener('click', scrollToTop);
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/about-us' element={<About/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/service-detail/independent-quality-assurance' element={<IndependentQualityAssurance/>}/>
         <Route path='/service-detail/site-performance-improvement' element={<SitePerformanceImprovement/>}/>
       </Routes>
       <Link id="scrollTop" class="scrollTopbtn"><img class="img-fluid lazyload" src={ArrowUp} alt=""/></Link>

       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
