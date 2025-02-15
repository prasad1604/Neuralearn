import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import "./SocialEmotions.css"

const CameraAccess = () => {

  // To capture a pic/screenshot
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          width: 720,
          height: 560,
        }}
        style={{ width: '100%', maxWidth: '720px' }}
      />
      <button onClick={capture}>Capture Photo</button>
    </>
  );
};

const SocialEmotions = () => {
  const [cameraOn, setCameraOn] = useState(false)
  return (
    <div>

      <h1>Camera Test</h1>
      {cameraOn ? 
      <>
      <button className="btn btn-success" onClick={()=> setCameraOn(false)}>Turn off Camera</button>
      <CameraAccess /> 
      </>
      : <button className="btn btn-danger" onClick={()=> setCameraOn(true)}>Turn on Camera</button>}

    </div>
  )
}


export default SocialEmotions;
