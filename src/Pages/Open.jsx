import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/open.css'

function Open() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Home');
  };
   
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <main className="landing-wrapper">
      <header className="landing-header">
        <h1 className="logo">MindWell</h1>
        <nav className="nav-links" aria-label="Main Navigation">
          <a href="#">About</a>
          <a href="#">How it works</a>
          <a href="#">Features</a>
          <a href="#">Blog</a>
        </nav>
        <div className="auth-buttons">
          <button onClick={handleLogin} className="signup" aria-label="Sign Up">Sign Up</button>
          <button onClick={handleLogin} className="login" aria-label="Log In">Log In</button>
        </div>
      </header>

      <section className="main-section">
        <div className="text-content">
          <h2>Boost Your Mental Wellness Journey</h2>
          <p>Take control of your thoughts and emotions. Unlock peace, balance, and purpose with MindWell.</p>
          <button onClick={handleClick} className="get-started" aria-label="Get Started">Get Started ➡️</button>
        </div>

        <div className="image-content">
          <img
            className="rocket-img"
            src="src/assets/IMG_20250726_190449.jpg"
            alt="Person launching on a rocket symbolizing mental wellness"
          />
        </div>
      </section>
    </main>
  );
}

export default Open;
