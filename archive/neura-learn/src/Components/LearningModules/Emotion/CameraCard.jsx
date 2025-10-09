import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const CameraCard = ({cameraAnswer, setShowCamera, response, task, setAttempts, chapter, totalChapters, setShowResult}) => {
    const [cameraOn, setCameraOn] = useState(true);
    const hasCameraSupport = !!navigator.mediaDevices?.getUserMedia;
    const webcamRef = useRef(null);
    const [emotion, setEmotion] = useState(null);
    const [error, setError] = useState(null);

    const videoConstraints = {
        facingMode: "user",
        width: { ideal: 720 },
        height: { ideal: 1280 },
    };

    const capture = useCallback(async () => {
        setAttempts(prev => prev + 1)
        const imageSrc = webcamRef.current?.getScreenshot();
        if (!imageSrc) return;

        try {
            // Convert base64 to binary
            const byteString = atob(imageSrc.split(",")[1]);
            const mimeString = imageSrc.split(",")[0].split(":")[1].split(";")[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([ab], { type: mimeString });

            // Send to FastAPI backend
            const formData = new FormData();
            formData.append("file", blob, "capture.jpg");

            const response = await axios.post("http://localhost:8000/model/predict-emotion", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            const temp = response.data.emotion
            setEmotion(temp);
            console.log(cameraAnswer)
            if (temp.toLowerCase() === cameraAnswer.toLowerCase()){
                alert("Correct Answer!!")
                setShowCamera(false)
                if (chapter === totalChapters){
                    setShowResult(true)
                }
            }

        } catch (err) {
            console.error("Error sending image to backend:", err);
            setError("Error analyzing emotion.");
        }
    }, []);
    return (

        <>
            <h1 className="app-title"><strong>Emotion Recognition</strong></h1>
            <p className="app-description">Look at the camera and press capture!<br/> we'll help you understand emotions!</p>
            {
                !hasCameraSupport ? (
                    <div className="error-message">⚠️ Camera access is not supported in your browser.</div>
                ) : cameraOn ? (
                    <>
                        <button id="btn-control-socialemotion" className="btn btn-control" onClick={() => setCameraOn(false)}>
                            🚫 Stop Camera
                        </button>
                        <div className="response-message-emotions">{response}</div>
                        <div className="response-message-questions">{task}</div>
                        <div className="camera-wrapper">
                            {error ? (
                                <div className="error-container">
                                    <p className="error-message">{error}</p>
                                </div>
                            ) : (
                                <>
                                    <Webcam
                                        ref={webcamRef}
                                        audio={false}
                                        screenshotFormat="image/jpeg"
                                        videoConstraints={videoConstraints}
                                        className="webcam-video"
                                        onUserMediaError={() => setError("Camera access denied. Please enable permissions.")}
                                    />
                                    <button id="btn-capture-socialemotion" className="btn-capture" onClick={capture}>
                                        📸 Capture
                                    </button>
                                    {emotion && (
                                        <div className="display-emotion">😊 Detected Emotion: <strong>{emotion}</strong></div>
                                    )}
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <button id="btn-start-socialemotion" className="btn btn-start" onClick={() => setCameraOn(true)}>
                        🎬 Start Camera
                    </button>
                )
            }
            <div className="safety-notice">
                🔒 We never store or share your camera feed. Everything stays private on your device.
            </div>
        </>

    );
}

export default CameraCard
