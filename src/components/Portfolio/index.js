import React from 'react'; 
import project1 from '../../assets/img1.png';
import project2 from '../../assets/img2.jpeg';
import project3 from '../../assets/img3.png';
import project4 from '../../assets/img4.webp';
import project5 from '../../assets/img5.png';
import project6 from '../../assets/img6.jpeg';

function Portfolio () {

    return (
        <section>
            <h5>Recent Projects</h5>
            <h2> Portfolio</h2>

            <div className='contaniner portfolio_box'>
                  <article className='portfolio_object'>
                    <div className='portfolio_image'>
                        <img src={project1} alt='project-one'/>

                    </div>
                    <h3>Pollen Tracker</h3>
                    <button className='portfolio-desc'>
                        <a href='https://jessica-calderon.github.io/pollen-tracker/' className='btn' target='_self'>Live Demo</a>
                    </button>
                    </article>
                  <article className='portfolio_object'>
                    <div className='portfolio_image'>
                        <img src={project2} alt='project-two'/>

                    </div>
                    <h3>PWA Text Editor</h3>
                    <button className='portfolio-desc'>
                        <a href='https://gentle-coast-35495.herokuapp.com/' className='btn' target='_self'>Live Demo</a>
                    </button>
                </article>
                  <article className='portfolio_object'>
                    <div className='portfolio_image'>
                        <img src={project3} alt='project-three'/>

                    </div>
                    <h3> Fetch </h3>
                    <button className='portfolio-desc'>
                        <a href='https://ohfetch.herokuapp.com/' className='btn' target='_self'>Live Demo</a>
                    </button>

                    
                </article>
                  <article className='portfolio_object'>
                    <div className='portfolio_image'>
                        <img src={project4} alt='four'/>

                    </div>
                    <h3>JavaScript Quiz!</h3>
                    <button className='portfolio-desc'>
                        <a href='https://soulreaper077.github.io/quiz-js/' className='btn' target='_self'>Live Demo</a>
                    </button>
                    
                    
                </article>
                  <article className='portfolio_object'>
                    <div className='portfolio_image'>
                        <img src={project5} alt='project-five'/>

                    </div>
                    <h3>Workday Schedluler</h3>
                    <button className='portfolio-desc'>
                        <a href='https://soulreaper077.github.io/calender-js/ ' className='btn' target='_self'>Live Demo</a>
                    </button>
                    
                </article>
                <article className='portfolio_object'>
                    <div className='portfolio_image'>
                        <img src={project6} alt='project-six'/>

                    </div>
                    <h3>Encrypted Password Generator</h3>
                    <button className='portfolio-desc'>
                        <a href='https://soulreaper077.github.io/Password-generator/' className='btn' target='_self'>Live Demo</a>
                    </button>
                    
                </article>
                
            </div>
                
        </section>
    )
}
export default Portfolio; 