import React, { useState } from "react";
import "../assets/css/bootstrap.min.css"; 
import "../assets/css/theme.min.css"; 
import logo from '../assets/images/logogo.png'; // Import the logo

function Login() {
  const [email, setEmail] = useState("wrapcode.info@gmail.com");
  const [password, setPassword] = useState("123456");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login submitted with", { email, password, rememberMe });
  };

  return (
    <main className="auth-creative-wrapper">
      <div className="auth-creative-inner">
        <div className="creative-card-wrapper">
          <div className="card my-4 overflow-hidden" style={{ zIndex: 1 }}>
            <div className="row flex-1 g-0">
              <div className="col-lg-6 h-100 my-auto order-1 order-lg-0">
              <div className="wd-200 bg-white p-2 shadow-lg position-absolute" 
     style={{ 
       top: ' 30px',  // Move the logo upwards (adjust this value as needed)
       left: '50%',
       transform: 'translateX(-50%)',
       zIndex: 2, 
       borderRadius: '10px'  
     }}>
  <img src={logo} alt="logo" className="img-fluid" />
</div>

                <div className="creative-card-body card-body p-sm-5">
                  <h2 className="fs-20 fw-bolder mb-4">Login</h2>
                  <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
                  <p className="fs-12 fw-medium text-muted">
                    Thank you for getting back to <strong>Nelel</strong> web applications, let's access our best recommendation for you.
                  </p>
                  <form onSubmit={handleSubmit} className="w-100 mt-4 pt-2">
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email or Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          />
                          <label className="custom-control-label c-pointer" htmlFor="rememberMe">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div>
                        <a href="/auth-reset-creative" className="fs-11 text-primary">
                          Forget password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-5">
                      <button type="submit" className="btn btn-lg btn-primary w-100">
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="w-100 mt-5 text-center mx-auto">
                    <div className="mb-4 border-bottom position-relative">
                      <span className="small py-1 px-3 text-uppercase text-muted bg-white position-absolute translate-middle">
                        or
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <a
                        href="javascript:void(0);"
                        className="btn btn-light-brand flex-fill"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Login with Facebook"
                      >
                        <i className="feather-facebook"></i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-light-brand flex-fill"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Login with Twitter"
                      >
                        <i className="feather-twitter"></i>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-light-brand flex-fill"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Login with Github"
                      >
                        <i className="feather-github"></i>
                      </a>
                    </div>
                  </div>
                  <div className="mt-5 text-muted">
                    <span> Don't have an account?</span>
                    <a href="/auth-register-creative" className="fw-bold">
                      Create an Account
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 bg-primary order-0 order-lg-1">
                <div className="h-100 d-flex align-items-center justify-content-center">
                  <img src="assets/images/auth/auth-user.png" alt="auth-user" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
