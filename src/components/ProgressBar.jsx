import { useState } from 'react';

const ProgressBar = ({ currentTime, duration, onSeek }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.clientWidth;
    const newTime = (clickPosition / progressBarWidth) * duration;
    onSeek(newTime);
  };

  const handleDrag = (e) => {
    if (isDragging) {
      handleProgressClick(e);
    }
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between text-sm text-gray-400 mb-2">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
      <div
        className="w-full bg-gray-700 rounded-full h-2 cursor-pointer relative group"
        onClick={handleProgressClick}
        onMouseMove={handleDrag}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-100 relative"
          style={{ width: `${progressPercentage}%` }}
        >
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md" />
        </div>
      </div>
    </div>
  );
};

const formatTime = (seconds) => {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export default ProgressBar;