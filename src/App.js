import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact'; // form connection 
import Portfolio from './components/Portfolio'; 
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [aboutPage, setAboutPage] = useState(true);
  const [contactPage, setContactPage] = useState(false);
  const [portfolioPage, setPortfolioPage] = useState(false);
  const [resumePage, setResumePage] = useState(false); 
  
  return (
    <div>
      <Nav
      aboutPage={aboutPage}
      setAboutPage={setAboutPage}
      contactPage={contactPage}
      setContactPage={setContactPage}
      portfolioPage={portfolioPage}
      setPortfolioPage={setPortfolioPage}
      resumePage={resumePage}
      setResumePage={setResumePage}>

      </Nav>
      <main>
        {aboutPage && <About></About>}
        {contactPage && <ContactForm></ContactForm>}
        {portfolioPage && <Portfolio></Portfolio>}
        {resumePage && <Resume></Resume>}
      </main>

      <Footer></Footer>

      
    </div>
  );
}

export default App;
