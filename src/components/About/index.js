import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpeg';
function About() {
  return (

    <section className="my-5">
    <h1 id="about">Who Am I?</h1>

  
    <div className='contaniner portfolio_box'>
    <article className='portfolio_object'>
      <div className='portfolio_image'>
          <img src={coverImage} alt='about me'/>
      </div>
      </article>
    <article className='portfolio_object'>
    <p id="aboutp">
          Hello, My name is Jesus Ponce, and I am a Full-Stack Web Developer! I am currently 20 years old and on the journey to pursue my dream of working in technology. From the fast paced envirnment, to the evergrowing industry, Web Development had always been a passion of mine and I am greatful to be able to do it today!
        </p>
  </article>
  </div>
  </section>
  );
}

export default About;
