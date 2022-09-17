import React from 'react'; 
import resumeImage from '../../assets/resume.png';

function Resume () {


    return (
        
        <section className="my-5">
    <h1 id="about">Skills And Technologies</h1>

  
    <div className='contaniner portfolio_box'>
    <article className='portfolio_object'>
    <h2> Front End </h2>
    <ul>
        <li> - Javascript</li>
        <li> - React</li>
        <li> - HTML</li>
        <li> - CSS</li>
    </ul>
    <h2> Back End </h2>
    <ul>
        <li> - Node</li>
        <li> - Express</li>
        <li> - MongoDB</li>
        <li> - MySQL</li>
    </ul>
    <h2> Developer Tools </h2>
    <ul>
        <li> - Jest</li>
        <li> - npm</li>
        <li> - Git</li>
        <li> - WebPack</li>
    </ul>

  </article>
  </div>
  </section>
    )
}
export default Resume; 