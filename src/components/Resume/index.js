import React from 'react'; 
import resumeImage from '../../assets/resume.png';

function Resume () {


    return (
        <section>
            <div className="profile">
                <a href="https://docs.google.com/document/d/15tR32m33ki_yoN43Xc4Szrl3trkiChwsSrHEQ8Ksvvc/edit?usp=sharing" download="https://docs.google.com/document/d/15tR32m33ki_yoN43Xc4Szrl3trkiChwsSrHEQ8Ksvvc/edit?usp=sharing">
                    <button className="btn">Get Resume</button>
                </a>
                <p>
                    <ul>
                        <ol>
                            Front-End
                            Javascript,
                            HTML,
                            CSS,
                            React
                        </ol>
                    </ul>
                </p>
            </div>

        </section>
    )
}
export default Resume; 