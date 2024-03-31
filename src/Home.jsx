import React, { useEffect } from 'react'

function Home () {

    useEffect(() => {
            $(".header-carousel").owlCarousel({
                animateOut: 'slideOutDown',
                items: 1,
                autoplay: true,
                smartSpeed: 1000,
                dots: false,
                loop: true,
                nav : true,
                navText : [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
            });
    }, []);  
  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <div className="header-carousel owl-carousel">
                <div className="header-carousel-item">
                    <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
                    <div className="carousel-caption">
                        <div className="carousel-caption-content p-3">
                            <h5 className="text-white text-uppercase fw-bold mb-4" style= {{ letterSpacing: '3px' }}>Physiotherapy Center</h5>
                            <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                        </div>
                    </div>
                </div>
                <div className="header-carousel-item">
                    <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
                    <div className="carousel-caption">
                        <div className="carousel-caption-content p-3">
                            <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: '3px' }}>Physiotherapy Center</h5>
                            <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                            <p className="mb-5 fs-5 animated slideInDown">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            </p>
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="sub-style">
                        <h4 className="sub-title px-3 mb-0">What We Do</h4>
                    </div>
                    <h1 className="display-3 mb-4">Our Service Given Physio Therapy By Expert.</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded">
                           <div className="service-img rounded-top">
                                <img src="img/service-1.jpg" className="img-fluid rounded-top w-100" alt="" />
                           </div>
                            <div className="service-content rounded-bottom bg-light p-4">
                                <div className="service-content-inner">
                                    <h5 className="mb-4">Message Therapy</h5>
                                    <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item rounded">
                           <div className="service-img rounded-top">
                                <img src="img/service-2.jpg" className="img-fluid rounded-top w-100" alt="" />
                           </div>
                            <div className="service-content rounded-bottom bg-light p-4">
                                <div className="service-content-inner">
                                    <h5 className="mb-4">Physiotherapy</h5>
                                    <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item rounded">
                           <div className="service-img rounded-top">
                                <img src="img/service-3.jpg" className="img-fluid rounded-top w-100" alt="" />
                           </div>
                            <div className="service-content rounded-bottom bg-light p-4">
                                <div className="service-content-inner">
                                    <h5 className="mb-4">Heat & Cold Therapy</h5>
                                    <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item rounded">
                           <div className="service-img rounded-top">
                                <img src="img/service-4.jpg" className="img-fluid rounded-top w-100" alt="" />
                           </div>
                            <div className="service-content rounded-bottom bg-light p-4">
                                <div className="service-content-inner">
                                    <h5 className="mb-4">Chiropatic Therapy</h5>
                                    <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded">
                           <div className="service-img rounded-top">
                                <img src="img/service-5.jpg" className="img-fluid rounded-top w-100" alt="" />
                           </div>
                            <div className="service-content rounded-bottom bg-light p-4">
                                <div className="service-content-inner">
                                    <h5 className="mb-4">Work Injuries</h5>
                                    <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item rounded">
                           <div className="service-img rounded-top">
                                <img src="img/service-6.jpg" className="img-fluid rounded-top w-100" alt="" />
                           </div>
                            <div className="service-content rounded-bottom bg-light p-4">
                                <div className="service-content-inner">
                                    <h5 className="mb-4">Spot Injuries</h5>
                                    <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item rounded">
                           <div className="service-img rounded-top">
                                <img src="img/service-7.jpg" className="img-fluid rounded-top w-100" alt="" />
                           </div>
                            <div className="service-content rounded-bottom bg-light p-4">
                                <div className="service-content-inner">
                                    <h5 className="mb-4">Regular Therapy</h5>
                                    <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item rounded">
                           <div className="service-img rounded-top">
                                <img src="img/service-8.jpg" className="img-fluid rounded-top w-100" alt="" />
                           </div>
                            <div className="service-content rounded-bottom bg-light p-4">
                                <div className="service-content-inner">
                                    <h5 className="mb-4">Back Pain</h5>
                                    <p className="mb-4">Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus, dolor qui ullam</p>
                                    <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-2">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                        <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Services More</a>
                    </div>
                </div>
            </div>
      </div>
      <div className="container-fluid about bg-light py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="about-img pb-5 ps-5">
                            <img src="img/about-1.jpg" className="img-fluid rounded w-100" style={{objectFit: 'cover' }} alt="Image" />
                            <div className="about-img-inner">
                                <img src="img/about-2.jpg" className="img-fluid rounded-circle w-100 h-100" alt="Image" />
                            </div>
                            <div className="about-experience">15 years experience</div>
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
                        <div className="section-title text-start mb-5">
                            <h4 className="sub-title pe-3 mb-0">About Us</h4>
                            <h1 className="display-3 mb-4">We are Ready to Help Improve Your Treatment.</h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                            <div className="mb-4">
                                <p className="text-secondary"><i className="fa fa-check text-primary me-2"></i> Refresing to get such a personal touch.</p>
                                <p className="text-secondary"><i className="fa fa-check text-primary me-2"></i> Duis aute irure dolor in reprehenderit in voluptate.</p>
                                <p className="text-secondary"><i className="fa fa-check text-primary me-2"></i> Velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <a href="#" className="btn btn-primary rounded-pill text-white py-3 px-5">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div className="container-fluid appointment py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2">
                        <div className="section-title text-start">
                            <h4 className="sub-title pe-3 mb-0">Solutions To Your Pain</h4>
                            <h1 className="display-4 mb-4">Best Quality Services With Minimal Pain Rate</h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="d-flex flex-column h-100">
                                        <div className="mb-4">
                                            <h5 className="mb-3"><i className="fa fa-check text-primary me-2"></i> Body Relaxation</h5>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deserunt qui cupiditate veritatis enim ducimus.</p>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="mb-3"><i className="fa fa-check text-primary me-2"></i> Body Relaxation</h5>
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deserunt qui cupiditate veritatis enim ducimus.</p>
                                        </div>
                                        <div className="text-start mb-4">
                                            <a href="#" className="btn btn-primary rounded-pill text-white py-3 px-5">More Details</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="video h-100">
                                        <img src="img/video-img.jpg" className="img-fluid rounded w-100 h-100" style= {{ objectFit: "cover" }} alt="" />
                                        <button type="button" className="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                        <div className="appointment-form rounded p-5">
                            <p className="fs-4 text-uppercase text-primary">Get In Touch</p>
                            <h1 className="display-5 mb-4">Get Appointment</h1>
                            <form>
                                <div className="row gy-3 gx-4">
                                    <div className="col-xl-6">
                                        <input type="text" className="form-control py-3 border-primary bg-transparent text-white" placeholder="First Name" />
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="email" className="form-control py-3 border-primary bg-transparent text-white" placeholder="Email" />
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="phone" className="form-control py-3 border-primary bg-transparent" placeholder="Phone" />
                                    </div>
                                    <div className="col-xl-6">
                                        <select className="form-select py-3 border-primary bg-transparent" aria-label="Default select example">
                                            <option>Your Gender</option>
                                            <option value="1">Male</option>
                                            <option value="2">FeMale</option>
                                            <option value="3">Others</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="date" className="form-control py-3 border-primary bg-transparent" />
                                    </div>
                                    <div className="col-xl-6">
                                        <select className="form-select py-3 border-primary bg-transparent" aria-label="Default select example">
                                            <option>Department</option>
                                            <option value="1">Physiotherapy</option>
                                            <option value="2">Physical Helth</option>
                                            <option value="2">Treatments</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control border-primary bg-transparent text-white" name="text" id="area-text" cols="30" rows="5" placeholder="Write Comments"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="button" className="btn btn-primary text-white w-100 py-3 px-5">SUBMIT NOW</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
