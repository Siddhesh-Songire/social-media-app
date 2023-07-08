import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="container landing-page">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 mb-4">
              Welcome to Your Social Media Platform
            </h1>
            <p className="lead mb-4">
              Connect with friends, share your moments, and engage with a
              vibrant community.
            </p>
            <Link to="/login" className="btn btn-primary btn-lg me-3">
              Create Account
            </Link>
            <a href="#" className="btn btn-outline-primary btn-lg">
              Learn More
            </a>
          </div>
          <div className="col-lg-6">
            <img
              src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png"
              className="img-fluid"
              alt="Bootstrap Themes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
