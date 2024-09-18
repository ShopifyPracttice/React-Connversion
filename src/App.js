import './App.css';
import ArrowUp from "./images/icon/up-arrow.svg";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
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
import ContactUs from './Pages/ContactUs';
import Career from './Pages/Careers';
import CostManagementServices from './Pages/CostManagementServices';
import ResourceBlogPage from './Pages/ResourceBlog';
import SubscribeForm from './components/SubscribeForm';

import ComplianceRiskDueDiligence from './Pages/ComplianceRiskDueDiligence';
import EsgConsultant from './Pages/esgConsultant';
import Error from './Pages/Error';
import ThankYou from './Pages/ThankYou';
import Guide from './Pages/Guide';
import DEIPledge from './Pages/DEIPdedge';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
}
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  // const location = useLocation();
  
  // useEffect(() => {
  //   // Scroll to top whenever the route changes
  //   window.scrollTo(0, 0);
  // }, [location]);
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
      <ScrollToTop />
       <Header/>
       <Routes>
         <Route path='/' element={<HomePage setDisplayForm={setDisplayForm} setIsOpen={setIsOpen}/>}/>
         <Route path='/about-us' element={<About setDisplayForm={setDisplayForm} setIsOpen={setIsOpen}/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/resources' element={<Resources setIsOpen={setIsOpen}/>}/>
         <Route path='/contact-us' element={<ContactUs/>}/>
         <Route path='/careers' element={<Career/>}/>
         <Route path='/resource/blogs' element={<ResourceBlogPage/>}/>
         <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
         <Route path='/esg-consultant' element={<EsgConsultant/>}/>
         <Route path='/job-application-submit' element={<ThankYou/>}/>
         {/* <Route path='/modal' element={<ModalComponent/>}/> */}
         <Route path='/career/tech-support-executive' element={<TechElecutive/>}/>
         <Route path='/resource/client-success-stories' element={<NewLaptop/>}/>
         <Route path='/press-releases' element={<PressRelease setIsOpen={setIsOpen}/>}/>
         <Route path='/search-details' element={<SearchDetails/>}/>
         <Route path='/social-impact-pledge' element={<SocialImpactPledge/>}/>
         <Route path='/guide' element={<Guide/>}/>
         <Route path='/diversity-equity-and-inclusion-pledge' element={<DEIPledge/>}/>
         <Route path='/resources/cost-management-services' element={<CostManagementServices/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/service-detail/training' element={<Training setDisplayForm={setDisplayForm}/>}/>
         <Route path='/environmental-sustainability-pledge' element={<EnvironmentalSustanabilityPledge/>}/>
         <Route path='/service-detail/reporting' element={<Reporting setDisplayForm={setDisplayForm}/>}/>
         <Route path='/service-detail/current-situation-analysis' element={<CurrentSituationAnalysis setDisplayForm={setDisplayForm}/>}/>
         <Route path='/service-detail/independent-quality-assurance' element={<IndependentQualityAssurance setDisplayForm={setDisplayForm}/>}/>
         <Route path='/service-detail/site-performance-improvement' element={<SitePerformanceImprovement />}/>
         <Route path='/service-detail/compliance-risk-due-diligence' element={<ComplianceRiskDueDiligence setDisplayForm={setDisplayForm}/>}/>
         <Route path='/error' element={<Error/>}/>
         <Route path='*' element={<Navigate to='/error' />} />
       </Routes>
       <Link id="scrollTop" class="scrollTopbtn"><img class="img-fluid lazyload" src={ArrowUp} alt=""/></Link>
        <ModalComponent displayForm={displayForm} setDisplayForm={setDisplayForm}/>
        <SubscribeForm isOpen={isOpen} setIsOpen={setIsOpen}/>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
