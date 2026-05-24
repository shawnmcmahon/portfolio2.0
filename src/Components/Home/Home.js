import city from '../../Assets/city1.webp';
import reactIcon from '../../Assets/icons/react-original-wordmark.svg';
import nextjsIcon from '../../Assets/icons/nextjs-original-wordmark.svg';
import javascriptIcon from '../../Assets/icons/javascript-plain.svg';
import typescriptIcon from '../../Assets/icons/typescript-plain.svg';
import html5Icon from '../../Assets/icons/html5-plain.svg';
import css3Icon from '../../Assets/icons/css3-plain.svg';
import cypressIcon from '../../Assets/icons/cypressio-original-wordmark.svg';
import mochaIcon from '../../Assets/icons/mocha-plain.svg';
import nodejsIcon from '../../Assets/icons/nodejs-original-wordmark.svg';
import expressIcon from '../../Assets/icons/express-original-wordmark.svg';
import awsIcon from '../../Assets/icons/aws.png';
import awsModernIcon from '../../Assets/icons/amazonwebservices-original-wordmark.svg';
import postgresIcon from '../../Assets/icons/postgresql-original-wordmark.svg';
import dotnetIcon from '../../Assets/icons/dot-net-plain-wordmark.svg';
import csharpIcon from '../../Assets/icons/csharp-original.svg';
import mssqlIcon from '../../Assets/icons/microsoftsqlserver-plain-wordmark.svg';
import '../../styles/desktop/Home.scss';
import '../../styles/desktop/App.scss';
import '../../styles/desktop/ImageOptimizer.scss';
import findStyleAndDesign from '../../findStyleAndDesign.js';
import ImageOptimizer from '../ImageOptimizer';
import ImagePreloader from '../ImagePreloader';


const Home = ({ pageMode, pageDesign }) => {

  // const openResumeTab = () => {
  //   window.open('https://drive.google.com/file/d/1VfROQKUVu3f8b2sRP3eUIkWAxM9QQEMc/view?usp=sharing','_newtab' )
  // }

  // Preload critical images
  const criticalImages = [city];

  return (
    <section className="home-container" id="home">
      <ImagePreloader images={criticalImages} />
      <div className={findStyleAndDesign(pageMode, pageDesign, "introduction-container")}>
        <section className={findStyleAndDesign(pageMode, pageDesign, "section-container")}> 
          <div className="name-container"> 
            <h1 className={findStyleAndDesign(pageMode, pageDesign, "name")}>Shawn McMahon</h1>
            <h3 className={pageMode === "Light Mode" ? " accent-text-light tagline " : "accent-text-dark tagline"}>Sofware Engineer</h3>
            <a href="/Shawn-McMahon-Software-Engineer-Resume-052026.pdf" download="Shawn-McMahon-Software-Engineer-Resume-052026.pdf"> 
              <button className={findStyleAndDesign(pageMode, pageDesign, "resume-button")}>Download Resume</button>
            </a>
          </div>
        </section>
        <section className={findStyleAndDesign(pageMode, pageDesign, "section-container-inner")} id="about"> 
          <div className="about"> 
            <h3 className="bio-intro">My name is Shawn...</h3>

            <p className={pageMode === "Light Mode" ? " accent-text-light bio-intro-second " : "accent-text-dark bio-intro-second"}>...and I am on a mission to create beautiful, engaging websites. </p>

    
            <p className="bio-text">Currently serving as a Software Engineer II at Vertafore, I specialize in building robust, scalable applications using modern technologies including React, TypeScript, and .NET Framework. My expertise spans full-stack development, with particular strengths in front-end architecture, API design, and cloud-native solutions. I thrive in collaborative environments where I can leverage my technical skills alongside my background in management and real estate to deliver exceptional user experiences and drive business value.</p>

            <p className="bio-text">Throughout my career, I've demonstrated a unique ability to bridge technical complexity with user-centric design, ensuring that every solution not only meets functional requirements but also exceeds user expectations. My experience in client-facing roles has honed my ability to translate business needs into elegant technical solutions, while my leadership background enables me to mentor junior developers and contribute to team growth.</p>
                
            <p className="bio-text bio-cta">Let's build something beautiful together. </p>
          </div> 
        </section>
        <section className={findStyleAndDesign(pageMode, pageDesign, "section-container-concave")}> 
          <p className={pageMode === "Light Mode" ? " accent-text-light bio-intro-second center-text" : "accent-text-dark bio-intro-second center-text"}> Technical Expertise</p>
          <div className="icon-container"> 
            <img src={reactIcon} className="tech-icon" alt="react logo"/>
            <img src={nextjsIcon} className="tech-icon" alt="next.js logo" />
            <img src={javascriptIcon} className="tech-icon" alt="javascript logo" />
            <img src={typescriptIcon} className="tech-icon" alt="typescript logo" />
            <img src={cypressIcon} className="tech-icon" alt="cypress logo" />
            <img src={mochaIcon} className="tech-icon" alt="mocha logo" />
            <img src={html5Icon} className="tech-icon" alt="html 5 logo" />
            <img src={css3Icon} className="tech-icon" alt="css 3 logo"/>
            <img src={nodejsIcon} className="tech-icon tech-icon-normalize" alt="node.js logo" />
            <img src={expressIcon} className="tech-icon" alt="express logo"/>
            <img src={csharpIcon} className="tech-icon" alt="c# logo" />
            <img src={dotnetIcon} className="tech-icon" alt="dotnet logo" />
            <img src={mssqlIcon} className="tech-icon" alt="mssql logo" />
            <img src={postgresIcon} className="tech-icon" alt="postgre sql logo" />
            <img src={awsModernIcon} className="tech-icon" alt="aws logo" />
            <a 
              href="https://www.credly.com/badges/256655d2-7c58-4e2f-93e5-f950ccc4b281/embedded" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-icon-link"
            >
              <img src={awsIcon} className="tech-icon" alt="aws developer associate badge" />
            </a>
          </div>
        </section>
      </div>
      <div className="image-container">
        <ImageOptimizer 
          src={city} 
          className="image" 
          alt="New York City street at sunset"
          priority={true}
        />
        <a 
          href="https://unsplash.com/photos/low-light-photography-of-vehicle-crossing-road-between-high-rise-buildings-enGr5YbjQKQ" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="credit-link"
          aria-label="View photo on Unsplash"
        >
          <span className="credit-text">Photo by Malte Schmidt on Unsplash</span>
        </a>
      </div>
    </section>
  );
}

export default Home;