import React, { useState, useEffect, useRef } from "react";
import "./SocialEmotions.css";
import VideoSection from "../VideoSection";
import CameraCard from "./CameraCard";
import EmotionsCard from "./EmotionCard";
import NavigationButtons from "../NavigationButtons";

const SocialEmotions = () => {
  const [showCamera, setShowCamera] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [chapter, setChapter] = useState(1);
  const [responseMessage, setResponseMessage] = useState('');
  const [cameraTask, setCameraTask] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const submittedRef = useRef(false);
  const moduledata = [
    {
      desc: "Look at the picture below. Can you tell how this kid is feeling?",
      task: "What emotion do you see in this picture? Choose your answer below.",
      correctAnswer: "happiness",
      response: "Great! This is happiness! We feel happy when something good happens.",
      task2: "Smile! Look into the camera and show your happy face!",
      image: "/Images/happy.jpg"
    },
    {
      desc: "Look at the picture below! What feeling do you think this kid is showing?",
      task: "What emotion do you see in this picture? Choose your answer below.",
      correctAnswer: "anger",
      response: "Great! This is anger! We feel angry when we experience loss.",
      task2: "Grr! Look into the camera and show your angry face!",
      image: "/Images/angry.jpg"
    },
    {
      desc: "Look at the picture below! Can you guess how the kids are feeling?",
      task: "What emotion do you see in this group? Choose your answer below.",
      correctAnswer: "happiness",
      response: "Great! This is happiness! We feel happy when something good happens.",
      task2: "Smile! Look into the camera and show your happy face!",
      image: "/Images/happy2.jpg"
    },
    {
      desc: "Look at the picture below! What feeling do you think this kid is showing?",
      task: "What emotion do you see in this picture? Choose your answer below.",
      correctAnswer: "surprise",
      response: "Great! This is surprise! We feel surprised when something unexpected happens.",
      task2: "Whoa! Try making a surprised face like the kids in the picture!",
      image: "/Images/surprise.jpg"
    },
    {
      desc: "Look at the picture below! What feeling do you think this kid is showing?",
      task: "What emotion do you see in this picture? Choose your answer below.",
      correctAnswer: "sadness",
      response: "Great! This is sadness! We feel sad when something makes us unhappy.",
      task2: "Aww... Look into the camera and show your sad face!",
      image: "/Images/sad.jpg"
    },
  ];

  const totalChapters = moduledata.length;

  console.log(totalChapters, attempts)
  useEffect(() => {
    if (showCamera) {
      setChapter(prev => {
        if (prev < totalChapters) {
          return prev + 1;
        }
        return prev;
      });
    }
    else {
      setResponseMessage('')
    }
  }, [showCamera, totalChapters])

  const handleAnswer = (emotionAnswer) => {
    const currentModule = moduledata[chapter - 1];
    console.log(emotionAnswer)
    // Check if the answer matches the correct answer

    if (emotionAnswer.toLowerCase() === currentModule.correctAnswer) {
      setUserAnswer(emotionAnswer.toLowerCase())
      setResponseMessage(currentModule.response);
      setCameraTask(currentModule.task2);
      setShowCamera(true)

    } else {
      setResponseMessage("Oops! That’s not the right answer. Try again!");
    }
  }
  if (showResult) {

    const score = parseInt(Math.max(((totalChapters * 11) - attempts) / 10, 0))
    const scorePercentage = Math.max((totalChapters * 11) - attempts, 0) / (totalChapters * 10) * 100;
    const stars = Math.ceil(scorePercentage / 20); // Convert to 1-5 stars

    if (!submittedRef.current) {
      submittedRef.current = true;


      try {
        const response = fetch("/api/test", {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ module: "Emotions", marks: [score] }),
        });

        if (!response.ok) {

          console.error("Failed to save score:", response.status, response.text());
          return;
        }

        console.log("Score saved successfully!");
      } catch (err) {

        console.error("Network error while saving score:", err);
      }
    }
    return (
      <div className="test-container d-flex justify-content-center align-items-center vh-100">
        <div className="p-4 p-md-5 rounded-4 shadow-lg bg-white bg-opacity-85 backdrop-blur border border-white border-opacity-30"
          style={{ maxWidth: '600px' }}>

          <h1 className="text-center mb-4" style={{ color: '#d87c6b' }}>🎉 Quiz Completed!</h1>

          {/* Star Rating Animation */}
          <div className="d-flex justify-content-center mb-3">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`display-4 ${i < stars ? 'text-warning' : 'text-secondary opacity-25'} 
                           animate__animated ${i < stars ? 'animate__bounceIn' : ''}`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {i < stars ? '★' : '☆'}
              </span>
            ))}
          </div>

          <div className={`text-center display-3 fw-bold mb-3 ${scorePercentage === 100 ? 'text-success' :
            scorePercentage >= 50 ? 'text-warning' : 'text-danger'
            }`}>
            {score}/{totalChapters}
          </div>

          <p className="text-center h5 mb-4" style={{ color: '#7a6b8f' }}>
            {scorePercentage === 100 ? "Perfect! ✨" :
              scorePercentage >= 70 ? "Great job! 🌟" :
                scorePercentage >= 50 ? "Good effort! 💪" : "Keep practicing! 🔄"}
          </p>


          <div className="d-flex justify-content-center gap-3">
            <NavigationButtons
              buttons={[{ name: "🔄 Again", action: () => window.location.reload() }]}
            />

          </div>
        </div>
      </div >
    );
  }
  return (
    <div className="body-emotions">
      <div className="social-emotions-container">
        {showCamera ? (
          <CameraCard
            cameraAnswer={userAnswer}
            setShowCamera={setShowCamera}
            response={responseMessage}
            task={cameraTask}
            setAttempts={setAttempts}
            setShowResult={setShowResult}
            chapter={chapter}
            totalChapters={totalChapters}
          />
        ) :
          <>
            <EmotionsCard
              title="Guess the Emotion!"
              chapter={chapter}
              desc={moduledata[chapter - 1].desc}
              src={moduledata[chapter - 1].image}  // Toggle image based on chapter
              alt="A person expressing an emotion"
              task={moduledata[chapter - 1].task}
              emotionAnswer={handleAnswer}  // Handle answer submission
            />
            <div className="response-message-wrong">{responseMessage}</div>
          </>
        }

        <VideoSection
          title="Video Explaination"
          desc="Refer to this video for better understanding:"
          src="https://www.youtube.com/embed/jetoWelJJJk"
        />
      </div>
    </div>
  );
};

export default SocialEmotions;


