import { useState } from 'react';
import { FaVolumeUp, FaVolumeMute, FaVolumeDown } from 'react-icons/fa';

const VolumeControl = ({ volume, onVolumeChange }) => {
  const [previousVolume, setPreviousVolume] = useState(volume);
  const [isMuted, setIsMuted] = useState(false);

  const handleMuteToggle = () => {
    if (volume > 0) {
      setPreviousVolume(volume);
      onVolumeChange(0);
      setIsMuted(true);
    } else {
      onVolumeChange(previousVolume);
      setIsMuted(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
    setIsMuted(newVolume === 0);
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <FaVolumeMute />;
    if (volume < 0.5) return <FaVolumeDown />;
    return <FaVolumeUp />;
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleMuteToggle}
        className="text-gray-400 hover:text-white transition-colors p-2"
      >
        {getVolumeIcon()}
      </button>
      
      <div className="w-24 relative group">
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer" style={{
            background: `linear-gradient(to right, #10b981 0%, #10b981 ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
          }}
        />
        
        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black text-white text-xs py-1 px-2 rounded">
            {Math.round(volume * 100)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeControl;