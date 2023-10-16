import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>My name is <span>Smith</span> <br />Web developer</span>
            <p className='introPara'>I am a skilled web developer with experience in creating visually appealing and user friendly websites.</p>
            <Link><button className='btn'> <img src={btnImg} alt='' /> Hire me.</button></Link>
        </div>
        <img src={bg} alt='' className='bg' />
    </section>
    )
}

export default Intro;