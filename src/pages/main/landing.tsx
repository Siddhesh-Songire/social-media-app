export const Landing = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
          <h1 className="display-3 text-center text-md-start">
        Welcome to <span className="text-primary">Landkit</span>. <br />
        Develop anything.
      </h1>
      <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8">
              Build a beautiful, modern website with flexible Bootstrap components built from scratch.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <div className="text-center text-md-start">
              <a href="overview.html" className="btn btn-primary shadow lift me-1">
                View all pages <i className="fe fe-arrow-right d-none d-md-inline ms-3"></i>
              </a>
              <a href="docs/index.html" className="btn btn-primary-soft lift">
                Documentation
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
