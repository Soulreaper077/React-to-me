import React from 'react';

function Nav(props) {
  const {
    aboutPage,
    setAboutPage,
    contactPage,
    setContactPage,
    portfolioPage,
    setPortfolioPage,
    resumePage,
    setResumePage
  } = props;


  return (
    <header className="flex-row px-1">
      <h2>
        <a className="name">
          Jesse Ponce 
        </a>
      </h2>
      <nav>
        <ul className="navtxt">
          <li className={`mx-2 ${ aboutPage }`}>
            <span onClick={() => {
            setAboutPage(true);
            setContactPage(false);
            setPortfolioPage(false);
            setResumePage(false);
        }}>About Me</span>
          </li>
          <li className={`mx-2 ${ contactPage}`}>
            <span onClick={() => {
            setAboutPage(false);
            setContactPage(true);
            setPortfolioPage(false);
            setResumePage(false);
        }}>Contact</span>
          </li>
          <li className={`mx-2 ${ portfolioPage }`}>
            <span onClick={() => {
            setAboutPage(false);
            setContactPage(false);
            setPortfolioPage(true);
            setResumePage(false);
        }}>Portfolio</span>
          </li>
          <li className={`mx-2 ${ resumePage }`}>
            <span onClick={() => {
            setAboutPage(false);
            setContactPage(false);
            setPortfolioPage(false);
            setResumePage(true); 
        }}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
