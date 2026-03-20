import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import "../style/form.scss";

const Register = () => {
  const { handleRegister, loading } = useAuth();
  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await handleRegister(username, email, password)
      navigate("/")
    } catch (err) {
      console.error("Registration failed", err);
    }
  }
  
  if(loading) {
    return (
      <main className="auth-page center-loader">
        <div className="loader">Creating account...</div>
      </main>
    );
  }

  return (
    <main className="auth-page">
      {/* 📱 Left Hero Section (Same as Login) */}
      <section className="auth-hero-section">
        <div className="hero-content">
          <img src="/path-to-your/insta-glyph.svg" alt="Insta" className="insta-logo" />
          <h1>
            See everyday moments from your <span className="gradient-text">close friends.</span>
          </h1>
          <div className="floating-icons">
            <img src="/path-to-your/main-stories.webp" alt="Stories" className="main-stories-img" />
            <div className="icon story-bubble">💬</div>
            <div className="icon reaction-bubbles">😮❤️👍</div>
            <div className="icon heart-icon">❤️</div>
            <img src="/path-to-your/user-avatar.webp" alt="Avatar" className="icon user-avatar" />
          </div>
        </div>
      </section>

      {/* 📝 Right Form Section (Register Form) */}
      <section className="auth-form-section">
        <div className="form-box">
          <div className="form-header">
            <h2>Sign up for Instagram</h2>
            <p style={{textAlign: 'left', color: '#8e8e8e', fontSize: '0.9rem', marginTop: '0.5rem'}}>Sign up to see photos and videos from your friends.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                onChange={(e)=>{setEmail(e.target.value)}}
                type="email" 
                required
                placeholder="Mobile number or Email" />
            </div>
            <div className="input-wrapper">
              <input
                onChange={(e)=>{setUsername(e.target.value)}}
                type="text" 
                required
                placeholder="Username" />
            </div>
            <div className="input-wrapper">
              <input
                onChange={(e)=>{setPassword(e.target.value)}}
                type="password" 
                required
                placeholder="Password" />
            </div>
            <button className="primary-button" type="submit">
              Sign up
            </button>
          </form>

          <div className="form-switcher">
            <p>
              Already have an account?{" "}
              <Link className='link' to="/login">
                Log in
              </Link>
            </p>
          </div>
          
          <img src="/path-to-your/meta-logo.svg" alt="Meta" className="meta-logo" />
        </div>
      </section>
    </main>
  );
}

export default Register;