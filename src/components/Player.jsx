import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControle';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

const Player = ({ 
  currentSong, 
  playing, 
  toggle, 
  currentTime, 
  duration, 
  volume, 
  setVolume, 
  seek,
  onNext,
  onPrevious 
}) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 text-white">
      {/* Album Art */}
      <div className="w-64 h-64 mx-auto mb-6">
        <img 
          src={currentSong.cover} 
          alt={currentSong.title}
          className="w-full h-full object-cover rounded-xl shadow-2xl"
        />
      </div>

      {/* Song Info */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">{currentSong.title}</h2>
        <p className="text-gray-400">{currentSong.artist}</p>
      </div>

      {/* Progress Bar */}
      <ProgressBar 
        currentTime={currentTime} 
        duration={duration} 
        onSeek={seek} 
      />

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mb-6">
        <button 
          onClick={onPrevious}
          className="text-gray-400 hover:text-white transition-colors p-2"
        >
          <FaBackward size={24} />
        </button>
        
        <button 
          onClick={toggle}
          className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center transition-all"
        >
          {playing ? <FaPause size={20} /> : <FaPlay size={20} className="ml-1" />}
        </button>
        
        <button 
          onClick={onNext}
          className="text-gray-400 hover:text-white transition-colors p-2"
        >
          <FaForward size={24} />
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex justify-center">
        <VolumeControl 
          volume={volume} 
          onVolumeChange={setVolume} 
        />
      </div>
    </div>
  );
};

export default Player;