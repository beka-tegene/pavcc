import React from 'react';

export const VideoMedia = ({
  src,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  width = '100%',
  height = 'auto',
  className = '',
}) => {
  return (
    <div className={`video-container ${className}`} style={{ width, height }}>
      <video
        src={src}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
