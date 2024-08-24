import './App.css';
import ArrowUp from "./images/icon/up-arrow.svg";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Services from './Pages/Services';
import IndependentQualityAssurance from './Pages/IndependentQualityAssurance';
import SitePerformanceImprovement from './Pages/SitePerformanceImprovement';
import About from './Pages/About';
import Reporting from './Pages/Reporting';
import CurrentSituationAnalysis from './Pages/CurrentSituationAnalysis';
import EnvironmentalSustanabilityPledge from './Pages/EnvironmentalSustainabilityPledge';
import SocialImpactPledge from './Pages/SocialImpactPledge';
import Training from './Pages/Training';
import Resources from './Pages/Resources';
import PressRelease from './Pages/PressReleases';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TechElecutive from './Pages/TechElecutive';
import NewLaptop from './Pages/NewLaptop';
import SearchDetails from './Pages/SearchDetails';
import ModalComponent from './components/Modal';
import Register from './Pages/Register';
function App() {
  const [displayForm, setDisplayForm] = useState(false);
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
         <Route path='/' element={<HomePage setDisplayForm={setDisplayForm}/>}/>
         <Route path='/about-us' element={<About/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/resources' element={<Resources/>}/>
         <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
         {/* <Route path='/modal' element={<ModalComponent/>}/> */}
         <Route path='/career/tech-support-executive' element={<TechElecutive/>}/>
         <Route path='/resource/client-success-stories' element={<NewLaptop/>}/>
         <Route path='/press-releases' element={<PressRelease/>}/>
         <Route path='/search-details' element={<SearchDetails/>}/>
         <Route path='/social-impact-pledge' element={<SocialImpactPledge/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/service-detail/training' element={<Training/>}/>
         <Route path='/environmental-sustainability-pledge' element={<EnvironmentalSustanabilityPledge/>}/>
         <Route path='/service-detail/reporting' element={<Reporting/>}/>
         <Route path='/service-detail/current-situation-analysis' element={<CurrentSituationAnalysis setDisplayForm={setDisplayForm}/>}/>
         <Route path='/service-detail/independent-quality-assurance' element={<IndependentQualityAssurance/>}/>
         <Route path='/service-detail/site-performance-improvement' element={<SitePerformanceImprovement/>}/>
       </Routes>
       <Link id="scrollTop" class="scrollTopbtn"><img class="img-fluid lazyload" src={ArrowUp} alt=""/></Link>
        <ModalComponent displayForm={displayForm} setDisplayForm={setDisplayForm}/>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
