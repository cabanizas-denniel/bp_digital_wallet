import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-root">
      <div className="login-blobs">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <span className="blob blob-4" />
        <span className="blob blob-5" />
      </div>

      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              placeholder="Email/Number"
              className="input"
            />
          </div>

          <div className="field">
            <input
              type="password"
              placeholder="Password"
              className="input"
            />
          </div>

          <div className="login-meta">
            <button type="button" className="link-button">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="primary-button">
            LOGIN
          </button>
        </form>

        <div className="divider-row">
          <span className="divider-line" />
          <span className="divider-text">or continue with</span>
          <span className="divider-line" />
        </div>

        <div className="social-row">
          <button type="button" className="social-button google">
            <span className="social-circle">G</span>
          </button>
          <button type="button" className="social-button facebook">
            <span className="social-circle">f</span>
          </button>
        </div>

        <p className="signup-text">
          Don&apos;t have an account?{" "}
          <button type="button" className="link-button underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;