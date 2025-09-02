import { useState, useEffect, useRef } from 'react';

const useAudio = (url) => {
  const audioRef = useRef(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const toggle = () => setPlaying(!playing);
  const seek = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    audioRef.current.src = url;
    audioRef.current.load();
    setCurrentTime(0);
    if (playing) {
      audioRef.current.play();
    }
  }, [url, playing]);

  return {
    playing,
    toggle,
    currentTime,
    duration,
    volume,
    setVolume,
    seek
  };
};

export default useAudio;