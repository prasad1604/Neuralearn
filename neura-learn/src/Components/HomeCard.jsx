import {Link} from 'react-router-dom';
import '../Assets/CSS/HomeCard.css'

function HomeCard() {
  return (
    <>
      <div className="container my-4">
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">🎮 Learn while playing!</strong>
                <h3 className="mb-0">Interactive Games</h3>
                <p className="card-text mb-auto">Fun and sensory-friendly games that help develop critical skills.</p>
                <Link className="icon-link gap-1 icon-link-hover stretched-link" to = "/ChooseGamesPage">Learn more 🎨</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="/Images/interactive-games.jpg" alt="Interactive Games" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">🎥 Learn from our expert tutors!</strong>
                <h3 className="mb-0">Educational Videos</h3>
                <p className="mb-auto">Engaging videos designed to capture attention and teach key concepts.</p>
               {/* <a href="#" className="icon-link gap-1 icon-link-hover stretched-link"> 
                  Watch now 🎥

                </a>*/}
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="/Images/educational-videos.jpg" alt="Educational Videos" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success-emphasis">🎨 Fun activities!</strong>
                <h3 className="mb-0">Printable Activities</h3>
                <p className="mb-auto">Download and print activities for hands-on learning and fun.</p>
                <Link className="icon-link gap-1 icon-link-hover stretched-link" to = "/PrintableActivitiesPage">Get Started ✏️</Link>
              {/* <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                  Get Started ✏️ 

                </a> */}
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="/Images/printable.jpg" alt="Printable Activities" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard;