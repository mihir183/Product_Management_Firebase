import React, { useEffect, useRef } from "react";
import { BlinkBlur } from "react-loading-indicators";

const Loading = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5; // 1.25, 1.5, 2.0
    }
  }, []);
  return (
    <>
      <div className="position-relative text-center d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
        {/* <video src="/loading.mp4" playbackRate={100} autoPlay muted loop></video>
         */}
        <BlinkBlur color="#3184ed" size="medium" text="" textColor="" />
      </div>
    </>
  );
};

export default Loading;
