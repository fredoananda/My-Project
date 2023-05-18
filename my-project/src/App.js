import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <body id="page-top">
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
        >
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#page-top">
              Start
            </a>

            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto my-2 my-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container px-4 px-lg-5 h-100">
            <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-8 align-self-end">
                <h1 className="text-white font-weight-bold">
                  Your Favorite Place for Frontend and Backend
                  <p>Alfredo Ananda</p>
                </h1>
                <hr className="divider" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 mb-5">
                  From front-end aesthetics to back-end functionality, our
                  full-stack web developers deliver dynamic and captivating
                  websites that leave a lasting impression
                </p>
                <a className="btn btn-primary btn-xl" href="#about">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </header>
        <section className="page-section bg-primary" id="about">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">
                  We've got what you need!
                  <p>Remote Work</p>
                </h2>
                <hr className="divider divider-light" />
                <p className="text-white-75 mb-4">
                  Elevate your online presence with our skilled full-stack web
                  developers, bringing your digital dreams to life with
                  precision and flair
                </p>
                <a className="btn btn-light btn-xl" href="#services">
                  Get Started!
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section" id="services">
          <div className="container px-4 px-lg-5">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider" />
            <div className="row gx-4 gx-lg-5">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <div className="mb-2">
                    <i className="bi-gem fs-1 text-primary"></i>
                  </div>
                  <h3 className="h4 mb-2">Full-Stack Web Development</h3>
                  <p className="text-muted mb-0">
                    End-to-end solutions for captivating and functional websites
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <div className="mb-2">
                    <i className="bi-laptop fs-1 text-primary"></i>
                  </div>
                  <h3 className="h4 mb-2">Maintenance and Support</h3>
                  <p className="text-muted mb-0">
                    Reliable assistance to keep your project running smoothly
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <div className="mb-2">
                    <i className="bi-globe fs-1 text-primary"></i>
                  </div>
                  <h3 className="h4 mb-2">Ready to Publish</h3>
                  <p className="text-muted mb-0">
                    You can use this design as is, or you can make changes!
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <div className="mb-2">
                    <i className="bi-heart fs-1 text-primary"></i>
                  </div>
                  <h3 className="h4 mb-2">Made with Love</h3>
                  <p className="text-muted mb-0">
                    Is it really open source if it's not made with love?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="portfolio">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="https://ecommerce-style-alfredo.vercel.app/"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3FMhIdD6HZyt3j8B1xzQWO%2F76b93a25a630fec9476cdb40112567e3%2FCleanShot_2022-04-13_at_17.46.00_2x.png&w=1920&q=75"
                    alt="..."
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Ecommerce
                    </div>
                    <div className="project-name">
                      Builder.io Shopify Commerce
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="https://style-pages-alfredo.vercel.app/"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F67vzHW0HqJADxLhQJfGF79%2Fda4e1d5e669d3288ec29c206e53b5844%2Fedge-functions-feature-flag-apple-store.vercel.app_.png&w=1920&q=75"
                    alt="..."
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Project Pages
                    </div>
                    <div className="project-name">
                      Project Feature Landing Page
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="https://admin-pages-alfredo.vercel.app/"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="https://assets.startbootstrap.com/img/screenshots/themes/sb-admin-2.png"
                    alt="..."
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Admin Project
                    </div>
                    <div className="project-name">Project Admin Dashboard</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="..."
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Category Trevel
                    </div>
                    <div className="project-name">Project Trevel</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="https://images.pexels.com/photos/349727/pexels-photo-349727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/349727/pexels-photo-349727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="..."
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Blog Every Day
                    </div>
                    <div className="project-name">Project Blog</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhbomax.72d4d4ad.png&w=640&q=55"
                  title="Project Name"
                >
                  <img
                    className="img-fluid"
                    src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhbomax.72d4d4ad.png&w=640&q=55"
                    alt="..."
                  />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-category text-white-50">
                      coming soon
                    </div>
                    <div className="project-name">
                      Project Streaming and Movie
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="page-section bg-dark text-white">
          <div className="container px-4 px-lg-5 text-center">
            <h2 className="mb-4">History Project</h2>
            <a
              className="btn btn-light btn-xl"
              href="https://github.com/fredoananda"
            >
              github!
            </a>
          </div>
        </section>
        <section className="page-section" id="contact">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-lg-8 col-xl-6 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider" />
                <p className="text-muted mb-5">
                  Ready to start your next project with us? Send us a messages
                  and we will get back to you as soon as possible!
                </p>
              </div>
            </div>
            <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
              <div className="col-lg-6">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      data-sb-validations="required"
                    />
                    <label for="name">Full name</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      A name is required.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      data-sb-validations="required,email"
                    />
                    <label for="email">Email address</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      data-sb-validations="required"
                    />
                    <label for="phone">Phone number</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      A phone number is required.
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      type="text"
                      placeholder="Enter your message here..."
                      data-sb-validations="required"
                    ></textarea>
                    <label for="message">Message</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      To activate this form, sign up at
                      <br />
                      <a href="mailto:fredoananda@gmail.com"></a>
                    </div>
                  </div>
                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-xl"
                      id="submitButton"
                      type="submit"
                      onclick="window.location.href = 'mailto:alamat-email-anda'"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-lg-4 text-center mb-5 mb-lg-0">
                <i className="bi-phone fs-2 mb-3 text-muted"></i>
                <a href="https://api.whatsapp.com/send?phone=6283189876675">
                  <button className="WhatsApp">
                    <p>+6283189876675</p>
                    <p>
                      "If you want to reach me quickly, you can contact me at
                      this number."
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-light py-5">
          <div className="container px-4 px-lg-5">
            <div className="small text-center text-muted">
              Copyright &copy; 2023 - Alfredo Ananda
            </div>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
      </body>
    </div>
  );
}

export default App;
