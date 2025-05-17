import { AlarmClock } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const formatTime = (ms: number): string => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    const pad = (n: number) => String(n).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
};

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elaspedTime, setElaspedTime] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number>(0);

    const start = () => {
        if (!isRunning) {
            startTimeRef.current = Date.now() - elaspedTime;
            timerRef.current = setInterval(() => {
                setElaspedTime(Date.now() - startTimeRef.current);
            }, 10);
            setIsRunning(true);
        }
    };

    const stop = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        setIsRunning(false);
    };

    const reset = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            setElaspedTime(0);
            setIsRunning(false);
        }
    };

    return (
        <div className="w-96 h-96 flex items-center flex-col gap-12">
            <AlarmClock
                className={cn(
                    "size-26 mt-12 transition-all",
                    isRunning && "animate-bounce scale-110",
                )}
            />
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl">{formatTime(elaspedTime)}</h1>
                <div className="flex gap-4">
                    <Button className="px-6 cursor-pointer" onClick={start}>
                        Start
                    </Button>
                    <Button className="px-6 cursor-pointer" onClick={stop}>
                        Stop
                    </Button>
                    <Button className="px-6 cursor-pointer" onClick={reset}>
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;
