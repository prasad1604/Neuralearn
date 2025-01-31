import '../Assets/CSS/HomeCarousel.css';

function HomeCarousel(){
    return (
        <>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Images/educational3.jpg" className="d-block w-100 img-fluid" alt="kid1"/>
            <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to NeuraLearn</h2>
              <p>Engaging learning experiences tailored for children with autism</p>
              <button className="btn btn-danger">Explore 🌟</button>
              <button className="btn btn-primary">Learn 📚</button>
              <button className="btn btn-success">Grow 🌱</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/educational2.jpg" className="d-block w-100 img-fluid" alt="kid2"/>
            <div className="carousel-caption d-none d-md-block">
                <h2 style={{ color: 'purple' }}>Welcome to NeuraLearn</h2>
                <p style={{ color: 'purple' }}>Engaging learning experiences tailored for children with autism</p>
                <button className="btn btn-danger">Explore 🌟</button>
                <button className="btn btn-primary">Learn 📚</button>
                <button className="btn btn-success">Grow 🌱</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/educational.jpg" className="d-block w-100 img-fluid" alt="kid2"/>
            <div className="carousel-caption d-none d-md-block">
                <h2 style={{ color: 'red' }}>Welcome to NeuraLearn</h2>
                <p style={{ color: 'red' }}>Engaging learning experiences tailored for children with autism</p>
                <button className="btn btn-danger">Explore 🌟</button>
                <button className="btn btn-primary">Learn 📚</button>
                <button className="btn btn-success">Grow 🌱</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </>
    );
}

export default HomeCarousel;