import { useState, useEffect } from 'react';
import Player from './components/Player';
import SongList from './components/SongList';
import { songs as initialSongs } from './data/songs'; // import renamed
import useAudio from './hooks/useAudio';

function App() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(initialSongs[0]);

  const { playing, toggle, currentTime, duration, volume, setVolume, seek } =
    useAudio(currentSong.url);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
  };

  // load durations automatically
  useEffect(() => {
    const loadDurations = async () => {
      const updatedSongs = await Promise.all(
        initialSongs.map(async (song) => {
          try {
            const duration = await getAudioDuration(song.url);
            return { ...song, duration };
          } catch (error) {
            return { ...song, duration: 180 }; // fallback: 3min
          }
        })
      );

      setSongs(updatedSongs);
      setCurrentSong(updatedSongs[0]);
    };

    loadDurations();
  }, []);

  // helper function
  const getAudioDuration = (filePath) => {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.src = filePath;
      audio.addEventListener('loadedmetadata', () => {
        resolve(Math.floor(audio.duration));
      });
      audio.addEventListener('error', () => {
        resolve(180); // fallback
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">React Music Player</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Player */}
          <div className="lg:col-span-2">
            <Player
              currentSong={currentSong}
              playing={playing}
              toggle={toggle}
              currentTime={currentTime}
              duration={duration}
              volume={volume}
              setVolume={setVolume}
              seek={seek}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </div>

          {/* Song List Sidebar */}
          <div className="lg:col-span-1">
            <SongList
              songs={songs}
              currentSong={currentSong}
              onSelectSong={handleSongSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;