import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";
import "./SocialEmotions.css";

const CameraAccess = ({ onError }) => {
  const webcamRef = useRef(null);
  const [deviceId, setDeviceId] = useState("");
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(null);

  // Device enumeration and event listener setup
  useEffect(() => {
    const getDevices = async () => {
      try {
        const mediaDevices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = mediaDevices.filter(
          ({ kind }) => kind === "videoinput"
        );
        setDevices(videoDevices);

        // Try to select the mobile front camera if available
        const mobileFrontCamera = videoDevices.find((device) =>
          device.label.toLowerCase().includes("front")
        );
        if (mobileFrontCamera) {
          setDeviceId(mobileFrontCamera.deviceId);
        }
      } catch (err) {
        console.error("Error enumerating devices:", err);
      }
    };

    const handleDeviceChange = () => {
      getDevices();
    };

    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      getDevices();
      if (navigator.mediaDevices.addEventListener) {
        navigator.mediaDevices.addEventListener(
          "devicechange",
          handleDeviceChange
        );
      }
    } else {
      setError("Camera API not supported");
    }

    return () => {
      if (
        navigator.mediaDevices &&
        navigator.mediaDevices.removeEventListener
      ) {
        navigator.mediaDevices.removeEventListener(
          "devicechange",
          handleDeviceChange
        );
      }
    };
  }, []);

  // Mobile-specific video constraints
  const mobileVideoConstraints = {
    deviceId: deviceId ? { exact: deviceId } : undefined,
    facingMode: { exact: "user" },
    width: { min: 480, ideal: 720 },
    height: { min: 640, ideal: 1280 },
    frameRate: { ideal: 60, min: 30 },
  };

  // Camera initialization using useCallback to avoid ESLint dependency warnings
  const startCamera = useCallback(async () => {
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("Camera API not supported");
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: /Mobile/.test(navigator.userAgent)
          ? mobileVideoConstraints
          : { facingMode: "user" },
      });

      if (webcamRef.current) {
        const video = webcamRef.current.video;
        video.srcObject = stream;
        await new Promise((resolve) => {
          video.onloadedmetadata = resolve;
        });
      }
    } catch (err) {
      setError(
        `Camera Error: ${
          err.name === "NotAllowedError"
            ? "Please enable camera permissions in browser settings"
            : err.message
        }`
      );
      onError();
    }
  }, [deviceId, mobileVideoConstraints, onError]);

  useEffect(() => {
    if (devices.length > 0) {
      startCamera();
    }
  }, [devices, deviceId, startCamera]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    console.log(imageSrc);
  }, []);

  return (
    <div className="camera-wrapper">
      {error ? (
        <div className="error-container">
          <p className="error-message">{error}</p>
          <button
            className="btn-retry"
            onClick={() => window.location.reload()}
          >
            Reload and Try Again
          </button>
        </div>
      ) : (
        <>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={mobileVideoConstraints}
            className="webcam-video" // Add this class
          />
          <button className="btn-capture" onClick={capture}>
            📸 Capture
          </button>
        </>
      )}
    </div>
  );
};

const SocialEmotions = () => {
  const [cameraOn, setCameraOn] = useState(false);
  const [hasCameraSupport, setHasCameraSupport] = useState(true);

  // Check if the browser supports the camera API
  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setHasCameraSupport(false);
    }
  }, []);

  const handleCameraError = () => {
    setCameraOn(false);
  };

  return (
    <div className="social-emotions-container">
      <h1 className="app-title">Emotion Recognition Helper</h1>
      <p className="app-description">
        Look at the camera and we'll help you understand the emotions!
      </p>

      {!hasCameraSupport ? (
        <div className="error-message">
          ⚠️ Camera access is not supported in your browser. Please try using a
          modern mobile device or computer.
        </div>
      ) : cameraOn ? (
        <>
          <button
            className="btn btn-control"
            onClick={() => setCameraOn(false)}
          >
            🚫 Stop Camera
          </button>
          <CameraAccess onError={handleCameraError} />
        </>
      ) : (
        <button
          className="btn btn-start"
          onClick={() => setCameraOn(true)}
          aria-label="Start emotion recognition session"
        >
          🎬 Start Recognition
        </button>
      )}

      <div className="safety-notice">
        🔒 We never store or share your camera feed. Everything stays private on
        your device.
      </div>
    </div>
  );
};

export default SocialEmotions;
