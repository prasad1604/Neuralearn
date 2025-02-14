import {Link} from 'react-router-dom';
import '../Assets/CSS/LearningModules.css';

function LearningModules() {
    return (
        <div className="body-learning">
            <div className="container">
                <h1 className="text-center mt-4">Select a Subject</h1>

                <div id="video-section-modules"className="video-section">
                    <p><strong>Before starting, please watch this video:</strong></p>
                    <a href="https://youtu.be/hU8xEH5yRnA?si=Qs1zRmXyzpDojYdG" target="_blank">Watch Introductory Video</a>
                </div>


                <div className="row subject-selection">
                    <div className="col-md-6 col-lg-3">
                        <div className="subject-card" onclick="selectSubject('math')">
                            <i className="fas fa-calculator"></i>
                            <h3>Math</h3>
                            <p>Learn numbers and counting!</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Link to="/learning-modules/alphabets" className="learning-modules-link">
                        <div className="subject-card" onclick="selectSubject('alpha')">
                            <i className="fas fa-font"></i>
                            <h3>Alphabet</h3>
                            <p>Explore letters and words!</p>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="subject-card" onclick="selectSubject('color')">
                            <i className="fas fa-paint-brush"></i>
                            <h3>Colors</h3>
                            <p>Learn about colors!</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="subject-card" onclick="selectSubject('shapes')">
                            <i className="fas fa-square"></i>
                            <h3>Shapes</h3>
                            <p>Discover shapes!</p>
                        </div>
                    </div>
                </div>


                <div id="feedback" className="feedback-message"></div>


                <div className="progress">
                    <div id="progressBar" className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                </div>
            </div>
        </div>

    )
}

{/*
<script>
    function selectSubject(subject) {
        const totalSubjects = 4;
        let completedSubjects = 1;

        const progressPercentage = (completedSubjects / totalSubjects) * 100;
        const progressBar = document.getElementById('progressBar');
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.setAttribute('aria-valuenow', progressPercentage);
        progressBar.innerText = `${Math.round(progressPercentage)}%`;

        const feedback = document.getElementById('feedback');
        feedback.innerText = `Great! You chose ${subject.charAt(0).toUpperCase() + subject.slice(1)}!`;

        setTimeout(() => {
            window.location.href = `${subject}.html`;
        }, 1000);
    }
</script>*/}
export default LearningModules;