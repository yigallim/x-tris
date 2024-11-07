"use client";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { Music, musicList } from "@/constant/music/music-list";
import AudioPlayer from "react-h5-audio-player";
import useInteraction from "@/hooks/use-interaction";
import { useLocalStorage } from "react-use";
import "react-h5-audio-player/lib/styles.css";
import "./index.css";

type MusicPlayerProps = {
  className?: string;
};

const MusicPlayer = ({ className }: MusicPlayerProps) => {
  const ready = useInteraction();
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useLocalStorage("musicIndex", 0);
  const [music, setMusic] = useState<Music>();

  useEffect(() => {
    if (musicIndex !== undefined) {
      setMusic(musicList[musicIndex]);
    }
  }, [musicIndex]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleClickPrevious = () => {
    const newValue = musicIndex === 0 ? musicList.length - 1 : musicIndex! - 1;
    setMusicIndex(newValue);
  };

  const handleClickNext = () => {
    const newValue = musicIndex === musicList.length - 1 ? 0 : musicIndex! + 1;
    setMusicIndex(newValue);
  };

  const open = () => {
    if (isOpen) return;
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <motion.div
      id="music-player"
      className={cn(
        "glass-container rounded-full p-2 text-white text-sm flex items-center box-content overflow-hidden duration-300",
        className,
        isOpen || "hover:scale-90 cursor-pointer"
      )}
      onClick={open}
      style={{ width: isOpen ? "480px" : "64px" }}
      animate={{ width: isOpen ? "480px" : "64px" }}
      transition={{ ease: "easeInOut", duration: 0.14 }}
    >
      <div>
        <div className={cn("overflow-hidden rounded-full rotating-disc", isPlaying || "pause")}>
          <svg viewBox="0 0 64 64" width="64" height="64">
            <defs>
              <mask id="mask" x="0" y="0" width="64" height="64">
                <rect x="0" y="0" width="64" height="64" fill="#fff" />
                <circle cx="32" cy="32" r="9" fill="#000" />
              </mask>
            </defs>

            <image
              href={music?.imgSrc}
              x="0"
              y="0"
              width="64"
              height="64"
              mask="url(#mask)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>

      <div className="flex-1 min-w-[400px]">
        <p className="pr-5 pl-2.5 text-[13.2px] relative">
          {music?.title}
          <button
            className="absolute right-5 top-0 bg-neutral-700 rounded-full p-1.5"
            onClick={close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </button>
        </p>

        {ready && (
          <AudioPlayer
            className="!bg-transparent !text-white !pr-4 !pl-2.5 !py-0 !w-full"
            showSkipControls
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
            src={music?.audioSrc}
            autoPlay
            volume={0.3}
            onPlay={handlePlay}
            onPause={handlePause}
          />
        )}
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
