
import React from 'react';
import '../style/header.css';
import { Link } from 'react-router-dom';

const HeaderHome = () => {
  return (
    <>
      <div className='videoAn'>
        <video
          aria-labelledby="transcript-5306451725778944"
          muted
          playsInline
          className="video-hero-animation__video"
          src="https://kstatic.googleusercontent.com/files/5a8b6be5b0cc7db5f81176189c3be5f719f13139229206c0f446e2f38a2cb6370d39473f7fcc62d617cdd5a94a0973325427fcfadf65bd110a905d9d67dab872"
          preload="true"
          autoPlay
        >
        </video>
      </div>
      <div className="headerGreeting">
        <p className="welcomeP">Discover a world of technology at our online shop. </p>
        <span><p className="parag">Find the latest phones, laptops, and electronic devices to elevate your digital experience. Shop now and unlock the future of innovation!</p></span>
        <Link to='/products' className='headBtn' > Shop Now </Link>
      </div>
    </>
  )
}
export default HeaderHome;