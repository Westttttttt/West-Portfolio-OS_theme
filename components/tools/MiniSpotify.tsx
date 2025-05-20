import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { songs } from "@/constants/constant";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MiniSpotify = () => {
    const currFullTools = useSelector(
        (state: RootState) => state.toolState.fullScreenTools,
    );

    const [currentSong, setCurrentSong] = useState<string | null>(null);
    const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

    const togglePlay = (songName: string) => {
        const audio = audioRefs.current[songName];
        if (!audio) return;

        if (currentSong === songName) {
            audio.pause();
            setCurrentSong(null);
        } else {
            Object.values(audioRefs.current).forEach((ref) => {
                if (ref && !ref.paused) ref.pause();
            });
            audio.play();
            setCurrentSong(songName);
        }
    };

    return (
        <div
            className={cn(
                "w-96 h-96 overflow-y-auto p-6 space-y-4 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 shadow-xl element",
                currFullTools.includes("Mini Spotify") && "w-full h-full",
            )}
        >
            {songs.map((song) => (
                <motion.div
                    key={song.songName}
                    className="rounded-xl p-4 flex items-center space-x-4  transition-all duration-300"
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 15px rgba(255,255,255,0.1)",
                    }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <motion.img
                        src={song.songCover}
                        alt={song.songName}
                        className="w-16 h-16 rounded-lg object-cover border border-gray-600/50"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-white">
                            {song.songName}
                        </p>
                    </div>
                    <motion.button
                        onClick={() => togglePlay(song.songName)}
                        className={cn(
                            "p-2 rounded-full transition-all cursor-pointer",
                            currentSong === song.songName
                                ? "animate-pulse bg-[#dadada29]"
                                : "hover:bg-[#dadada1b]",
                        )}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {currentSong === song.songName ? (
                                <motion.div
                                    key="pause"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Pause size={20} className="text-white" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="play"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Play size={20} className="text-white" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                    <audio
                        ref={(el) => {
                            audioRefs.current[song.songName] = el;
                        }}
                        src={song.songSrc}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default MiniSpotify;
