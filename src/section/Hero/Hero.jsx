import React, { useState } from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubDarkIcon from '../../assets/github-dark.svg'
import githubLightIcon from '../../assets/github-light.svg'
import linkedinDarkIcon from '../../assets/linkedin-dark.svg'
import linkedinLightIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import '../../App.css'
// import styles fro'./HeroStyles.module.css'


function Hero() {

  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme==='light'?sun:moon;
  const githubIcon = theme==='light'?githubLightIcon:githubDarkIcon;
  const linkedinIcon = theme==='light'?linkedinLightIcon:linkedinDarkIcon;
 
 
    
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img src={heroImg} alt="Image" className={styles.heroImage} />
            <img src={themeIcon} alt="Theme Icon" className={styles.colormode} onClick={toggleTheme}/>
        </div>
        <div className={styles.heroInfo}>
            <h1>
                Sanjay Pandian
            </h1>
            <h2>FULLSTACK DEVELOPER</h2>
            <span>
                <a href="https://github.com/sanjaypandianthecoder" target='_blank'>
                    <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://linkedin.com/in/sanjaypandianthecoder" target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </span>
            <p>With a passion for developing a Full stack application</p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero