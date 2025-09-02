import { FaPlay } from "react-icons/fa";

const SongList = ({ songs, currentSong, onSelectSong }) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 h-full overflow-y-auto">
      <h2 className="text-xl font-bold text-white mb-4">Playlist</h2>
      <div className="space-y-2 max-h-[494px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 hover:scrollbar-thumb-gray-500">
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() => onSelectSong(song)}
            className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
              currentSong.id === song.id
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-12 h-12 rounded-md object-cover"
                />
                {currentSong.id === song.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md flex items-center justify-center">
                    <FaPlay className="text-green-400 text-xs" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm truncate">{song.title}</h3>
                <p className="text-xs text-gray-400 truncate">{song.artist}</p>
              </div>
              <div className="text-xs text-gray-400">
                {formatTime(song.duration)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to format duration
const formatTime = (seconds) => {
  if (!seconds) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default SongList;