export default function Home() {
  return (
    <>
      <body className="index-page">
        <main className="main">
          {/* Hero Section */}
          <section id="hero" className="hero section">
            <section style={{zIndex: "1"}}>
              <section id="up"></section>
              <section id="down"></section>
              <section id="left"></section>
              <section id="right"></section>
            </section>
            <div className="container" style={{zIndex: "2"}}>
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-12 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center">
                  <h1>Creating Wealth with Excellence</h1>
                  <p>Your Partner in Asset Management and Hedge Fund Strategies.</p>
                  <div className="d-flex">
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"></a>
                  </div>
                </div>
              </div>
              <div className="scroll-down show-for-large">
                <a>SCROLL</a>
                <span></span>
              </div>
            </div>
          </section>{/* /Hero Section */}

          {/* Clients Section */}
          <section id="clients" className="clients section light-background">

            <div className="container" data-aos="fade-up">

              <div className="row gy-4">

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                </div>{/* End Client Item */}

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                </div>{/* End Client Item */}

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                </div>{/* End Client Item */}

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                </div>{/* End Client Item */}

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                </div>{/* End Client Item */}

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                </div>{/* End Client Item */}

              </div>

            </div>

          </section>{/* /Clients Section */}

          {/* About Section */}
          <section id="about" className="about section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>About Us</h2>
            </div> {/* End Section Title */}

            <div className="container">
              <div className="row gy-5">
                <div className="content col-xl-5 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
                  <h3>Excellence</h3>
                  <p>
                    At Venexus, we believe that true wealth creation is not just about making 
                    money, it’s about doing so with a commitment to excellence in every decision, every 
                    strategy, and every client relationship.
                    
                    <br /><br />Our approach to wealth management is built on a 
                    foundation of trust, expertise, and a relentless pursuit of superior performance, all while 
                    managing risk responsibly.
                  </p>
                  <a href="#" className="about-btn align-self-center align-self-xl-start"><span>About us</span> <i className="bi bi-chevron-right"></i></a>
                </div>

                <div className="col-xl-7" data-aos="fade-up" data-aos-delay="200">
                  <div className="row gy-4">

                    <div className="col-md-6 icon-box position-relative">
                      <i className="bi bi-briefcase d-flex"></i>
                      <h4><a href="" className="stretched-link">People</a></h4>
                      <p>Our people are empowered to do things
                        differently and bring fresh, innovative thinking to
                        each undertaking.</p>
                    </div>{/* Icon-Box */}

                    <div className="col-md-6 icon-box position-relative">
                      <i className="bi bi-gem"></i>
                      <h4><a href="" className="stretched-link">Strategy</a></h4>
                      <p>We use quantitative, systematic and
                        fundamental strategies, specialising
                        predominantly in long/short equity.</p>
                    </div>{/* Icon-Box */}

                    <div className="col-md-6 icon-box position-relative">
                      <i className="bi bi-easel"></i>
                      <h4><a href="" className="stretched-link">Technology</a></h4>
                      <p>We look to forge our own path rather than
                        following others. In all areas of the firm, we continuously invest in
                        technology.</p>
                    </div>{/* Icon-Box */}

                    <div className="col-md-6 icon-box position-relative">
                      <i className="bi bi-broadcast"></i>
                      <h4><a href="" className="stretched-link">Impact</a></h4>
                      <p>Corporate Social Responsibility is an essential
                        tenet of who we are. We're looking for
                        meaningful ways to support our communities
                        through partnerships, sponsorships and volunteer
                        work.</p>
                    </div>{/* Icon-Box */}

                  </div>
                </div>
              </div>
            </div>

          </section>{/* /About Section */}

          {/* Stats Section */}
          <section id="stats" className="stats section">

            <div className="container" data-aos="fade-up" data-aos-delay="100">

              <div className="row gy-4 align-items-center">

                <div className="col-lg-5">
                  <img src="assets/img/philosophy.jpg" alt="" className="img-fluid" />
                </div>

                <div className="content col-xl-7 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
                  <h3>Investment Philosophy</h3>
                  <p>
                    We believe in a strategic, disciplined approach to investing that aligns with our clients' 
                    long-term goals. Our team of experienced professionals employs a mix of global macro, 
                    long/short equity, and alternative strategies to achieve optimal risk-adjusted returns. 
                    
                    <br /><br />At the core of our strategy is a commitment to risk management and transparency. We 
                    understand the complexities of the market and offer clear, actionable insights to our 
                    investors.
                  </p>
                  <a href="#" className="stats-btn align-self-center align-self-xl-start"><span>Read More</span> <i className="bi bi-chevron-right"></i></a>
                </div>

              </div>

            </div>

          </section>{/* /Stats Section */}

          {/* Services Section */}
          <section id="services" className="services section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Strategies</h2>
              <p></p>
            </div>{/* End Section Title */}

            <div className="container">

              <div className="row gy-4">

                <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                  <div className="service-item position-relative">
                    <i className="bi bi-activity"></i>
                    <h4><a href="" className="stretched-link">Global Macro</a></h4>
                    <p>Analyzing macroeconomic trends to invest across geographies and asset classNamees, including equities, bonds, currencies, and commodities.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                  <div className="service-item position-relative">
                    <i className="bi bi-bounding-box-circles"></i>
                    <h4><a href="" className="stretched-link">Long Short Equity</a></h4>
                    <p>Identifying undervalued and overvalued securities to generate alpha from both rising and falling markets.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                  <div className="service-item position-relative">
                    <i className="bi bi-calendar4-week"></i>
                    <h4><a href="" className="stretched-link">Event Driven</a></h4>
                    <p>Capitalizing on opportunities from corporate actions and macro-events across equities, fixed income, and derivatives.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                  <div className="service-item position-relative">
                    <i className="bi bi-broadcast"></i>
                    <h4><a href="" className="stretched-link">Hedging</a></h4>
                    <p>Managing risk and protecting portfolios with tailored hedge solutions.</p>
                  </div>
                </div>{/* End Service Item */}
                <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                  <div className="service-item position-relative">
                    <i className="bi bi-activity"></i>
                    <h4><a href="" className="stretched-link">Fixed Income</a></h4>
                    <p>Exploiting market inefficiencies for consistent, low-risk gains.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                  <div className="service-item position-relative">
                    <i className="bi bi-bounding-box-circles"></i>
                    <h4><a href="" className="stretched-link">Quantitative</a></h4>
                    <p>Utilizing algorithms and machine learning to identify inefficiencies and trends in the markets for robust decision-making.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                  <div className="service-item position-relative">
                    <i className="bi bi-calendar4-week"></i>
                    <h4><a href="" className="stretched-link">Arbitrage</a></h4>
                    <p>We can help you understand and prepare your business's balance sheet, reflecting its financial health.</p>
                  </div>
                </div>{/* End Service Item */}

                <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                  <div className="service-item position-relative">
                    <i className="bi bi-broadcast"></i>
                    <h4><a href="" className="stretched-link">Fund of Funds</a></h4>
                    <p>Diversifying investments through a portfolio of top-performing funds.</p>
                  </div>
                </div>{/* End Service Item */}

              </div>

            </div>

          </section>{/* /Services Section */}

          {/* Contact Section */}
          <section id="contact" className="contact section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Contact</h2>
              <p></p>
            </div>{/* End Section Title */}

            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">

              <div className="row gy-4">

                <div className="col-lg-5">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Address</h3>
                      <p>Headquarters Space, Hi-Tech City, Hyderbad, India</p>
                    </div>
                  </div>{/* End Info Item */}

                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+91 82946 89418, +91 70793 13762</p>
                    </div>
                  </div>{/* End Info Item */}

                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>contact@venexusglobalcap.in</p>
                    </div>
                  </div>{/* End Info Item */}

                </div>

                <div className="col-lg-7">
                  <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="500">
                    <div className="row gy-4">

                      <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                      </div>

                      <div className="col-md-6 ">
                        <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                      </div>

                      <div className="col-md-12">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                      </div>

                      <div className="col-md-12">
                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                      </div>

                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>{/* End Contact Form */}
              </div>
            </div>
          </section>{/* /Contact Section */}
        </main>

        {/* Scroll Top */}
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      </body>
    </>
  );
}
