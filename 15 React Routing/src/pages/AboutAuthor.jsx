import React from 'react'
import AboutNavbar from '../component/AboutNavbar';
import Profil from '../img/profil.jpg';

function AboutAuthor() {
  return (
    <div className='bg'>
        <AboutNavbar/>
        <div className='content-about'>
            <img src={Profil} alt="Profil"/>
            <br/>
            <div className='author-bio'>
            Author is a person who love travelling but always rarely go out, yet he loves 
            travel so much. Cat is his most loved pet and never get bored get scratch from it.
            Working out is one of his hobby yet he never come to gym :V.
            </div>
             
        </div>
    </div>

  )
}

export default AboutAuthor;