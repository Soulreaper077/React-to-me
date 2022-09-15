import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpeg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hello, My name is Jesus Ponce, and I am a Full-Stack Web Developer! I am currently 20 years old and on the journey to pursue my dream of working in technology. From the fast paced envirnment, to the evergrowing industry, Web Development had always been a passion of mine and I am greatful to be able to do it today!
        </p>
      </div>
    </section>
  );
}

export default About;
