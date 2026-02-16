import { Link } from 'react-router-dom';
import './HomeCard.css'


function CardItem(props) {
  return (

    <div className="col-12 col-lg-6 mb-3">
      <div className="row g-0 border rounded overflow-hidden flex-nowrap mb-4 shadow-sm position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success-emphasis">{props.title}</strong>
          <h3 className="mb-0">{props.subtitle}</h3>
          <p className="mb-auto">{props.description}</p>
          <Link className="icon-link gap-1 icon-link-hover stretched-link" to={props.link}>{props.linkname}</Link>
        </div>
        <div className="col-auto">
          <img src={props.image} alt={props.imagealt} className="img-fluid" />
        </div>
      </div>
    </div>

  )
}

function HomeCard() {
  return (
    <div className="container my-4">
      <div className="row mb-2">

        <CardItem
          title="📚 Interactive Learning!"
          subtitle="Learning Modules"
          description="Engaging modules designed to teach key concepts."
          link="/learning-modules"
          linkname="Start Learning 📚"
          image="/Images/educational-videos.jpg"
          imagealt="Learning Modules"
        />

        <CardItem
          title="🎮 Learn while playing!"
          subtitle="Interactive Games"
          description="Fun and sensory-friendly games that help develop critical skills."
          link="/games"
          linkname="Learn more 🎨"
          image="/Images/interactive-games.jpg"
          imagealt="Interactive Games"
        />
      </div>

      <div className="row justify-content-center">
        <CardItem
          title="🎨 Fun activities!"
          subtitle="Printable Activities"
          description="Download and print activities for hands-on learning and fun."
          link="/printables"
          linkname="Get Started ✏️"
          image="/Images/printable.jpg"
          imagealt="Printable Activities"
        />
        <CardItem
          title="🎨 Fun Stories!"
          subtitle="Story Generation"
          description="Create fun and relatable social stories instantly."
          link="/story"
          linkname="Start Creating ✏️"
          image="/Images/story.jpg"
          imagealt="Story Generation"
        />
      </div>

    </div>
  )
}
export default HomeCard;