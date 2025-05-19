import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { songs } from "@/constants/constant";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";

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
                "w-96 h-96 overflow-y-auto p-4 space-y-4 element rounded-lg",
                currFullTools.includes("Mini Spotify") && "w-[40%] h-full",
            )}
        >
            {songs.map((song) => (
                <div
                    key={song.songName}
                    className="rounded-xl p-4 flex items-center space-x-4 border-b"
                >
                    <img
                        src={song.songCover}
                        alt={song.songName}
                        className="w-16 h-16 rounded-[10px] object-cover"
                    />
                    <div className="flex-1">
                        <p className="text-sm font-semibold">{song.songName}</p>
                    </div>
                    <button
                        onClick={() => togglePlay(song.songName)}
                        className="p-2 rounded-full transition-all cursor-pointer hover:bg-[#dadada24]"
                    >
                        {currentSong === song.songName ? (
                            <Pause size={20} />
                        ) : (
                            <Play size={20} />
                        )}
                    </button>
                    <audio
                        ref={(el) => {
                            audioRefs.current[song.songName] = el;
                        }}
                        src={song.songSrc}
                    />
                </div>
            ))}
        </div>
    );
};

export default MiniSpotify;
