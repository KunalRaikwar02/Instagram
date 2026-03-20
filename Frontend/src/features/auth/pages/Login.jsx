import React, { useState } from "react";
import "../style/form.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(username, password);
      console.log("User logged in");
      navigate("/");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  if (loading) {
    return (
      <main className="auth-page center-loader">
        <div className="loader">Authenticating...</div>
      </main>
    );
  }

  return (
    <main className="auth-page">
      {/* 📱 Left Hero Section (Hidden on Mobile) */}
      <section className="auth-hero-section">
        <div className="hero-content">
          <img src="/path-to-your/insta-glyph.svg" alt="Insta" className="insta-logo" />
          <h1>
            See everyday moments from your <span className="gradient-text">close friends.</span>
          </h1>
          <div className="floating-icons">
            <img src="/path-to-your/main-stories.webp" alt="Stories" className="main-stories-img" />
            {/* Mocking floating icons from your image */}
            <div className="icon story-bubble">💬</div>
            <div className="icon reaction-bubbles">😮❤️👍</div>
            <div className="icon heart-icon">❤️</div>
            <img src="/path-to-your/user-avatar.webp" alt="Avatar" className="icon user-avatar" />
          </div>
        </div>
      </section>

      {/* 📝 Right Form Section */}
      <section className="auth-form-section">
        <div className="form-box">
          <div className="form-header">
            <h2>Log into Instagram</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
                placeholder="Mobile number, username or email"
              />
            </div>
            <div className="input-wrapper">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                placeholder="Password"
              />
            </div>
            <button className="primary-button" type="submit">
              Log in
            </button>
          </form>

          <div className="separator">or</div>

          <div className="secondary-actions">
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
            <a href="#" className="fb-login">
              <svg viewBox="0 0 36 36"><path fill="#fff" d="M15 10H10V15H15V26H20V15H25L26 10H20V8c0-.5.5-1 1-1h5V2h-6c-3 0-5 2-5 5v3Z"/></svg>
              Log in with Facebook
            </a>
          </div>

          <div className="form-switcher">
            <p>
              Don't have an account?{" "}
              <Link className="link" to="/register">
                Sign up
              </Link>
            </p>
          </div>
          
          <img src="/path-to-your/meta-logo.svg" alt="Meta" className="meta-logo" />
        </div>
      </section>
    </main>
  );
};

export default Login;