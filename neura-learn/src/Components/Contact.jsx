import '../Assets/CSS/Contact.css'

function Contact() {
    return (
            <section className="py-3 py-md-5">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 id = "h2-contact" className="mb-4 text-center">Contact us</h2>
                            <p id = "p-contact" className="text-secondary mb-5 text-center">The best way to contact us is to use our contact form below. Please
                                fill out all of the required fields and we will get back to you as soon as possible.</p>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-lg-center">
                        <div className="col-12 col-lg-9">
                            <div className="bg-white border rounded shadow-sm overflow-hidden">

                                <form action="#!">
                                    <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                        <div className="col-12">
                                            <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control" id="fullname" name="fullname" required />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-envelope"></i>
                                                </span>
                                                <input type="email" className="form-control" id="email" name="email" required />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <i className="bi bi-telephone"></i>
                                                </span>
                                                <input type="tel" className="form-control" id="phone" name="phone" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                                            <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button id = "button-contact"className="btn btn-primary btn-lg" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default Contact;