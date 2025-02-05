import '../Assets/CSS/PrintableActivities.css'

function PrintableActivities() {
    return (
            <div className="background-printable">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div id="card-printable" className="card">
                            <div className="card-body">
                                <img className = "img-printable" src="/Images/print1.jpeg" alt="Coloring Page 1"/>
                                    <h5 className="card-title">🎨 Fun Coloring Page 1</h5>
                                    <p className="card-text">Download and color this page!</p>
                                    <a href="/Images/print1.jpeg" className="btn-printable btn btn-primary" download="coloring1.jpg">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
  
                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <div id="card-printable" className="card">
                            <div className="card-body">
                                <img className = "img-printable" src="/Images/print2.jpg" alt="Coloring Page 2"/>
                                    <h5 className="card-title">🎨 Fun Coloring Page 2</h5>
                                    <p className="card-text">Download and color this page!</p>
                                    <a href="/Images/print2.jpg" className="btn-printable btn btn-primary" download="coloring2.jpg">Download</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <div id="card-printable" className="card">
                            <div className="card-body">
                                <img className = "img-printable" src="/Images/print3.jpg" alt="Coloring Page 3"/>
                                    <h5 className="card-title">🎨 Fun Coloring Page 3</h5>
                                    <p className="card-text">Download and color this page!</p>
                                    <a href="/Images/print3.jpg" className="btn-printable btn btn-primary" download="coloring3.jpg">Download</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-md-6">
                        <div id="card-printable" className="card">
                            <div className="card-body">
                                <img className = "img-printable" src="/Images/print4.webp" alt="Coloring Page 4"/>
                                    <h5 className="card-title">🎨 Fun Coloring Page 4</h5>
                                    <p className="card-text">Download and color this page!</p>
                                    <a href="/Images/print4.webp" className="btn-printable btn btn-primary" download="coloring4.jpg">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    )
}

export default PrintableActivities;