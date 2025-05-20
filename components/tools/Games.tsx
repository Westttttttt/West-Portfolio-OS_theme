import { RootState } from "@/lib/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CELL_SIZE = 20;
const GRID_SIZE = 20;
const SPEED = 100;

type Coord = { x: number; y: number };

const getRandomApple = (snake: Coord[], gridSize: number): Coord => {
    while (true) {
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);
        if (!snake.some((s) => s.x === x && s.y === y)) return { x, y };
    }
};

export default function Games() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [snake, setSnake] = useState<Coord[]>([
        { x: 5, y: 5 },
        { x: 4, y: 5 },
    ]);
    const [dir, setDir] = useState<Coord>({ x: 1, y: 0 });
    const currFullScreenTools = useSelector(
        (state: RootState) => state.toolState.fullScreenTools,
    );
    const gridSize = currFullScreenTools.includes("Games")
        ? GRID_SIZE + 5
        : GRID_SIZE;

    const [apple, setApple] = useState<Coord>(() =>
        getRandomApple(snake, gridSize),
    );
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(
        parseInt(localStorage.getItem("highScore") || "0"),
    );
    const [started, setStarted] = useState(false);

    const restart = () => {
        const initial = [
            { x: 5, y: 5 },
            { x: 4, y: 5 },
        ];
        setSnake(initial);
        setDir({ x: 1, y: 0 });
        setApple(getRandomApple(initial, gridSize));
        setGameOver(false);
        setScore(0);
        setStarted(false);
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!started && e.key === " ") {
                setStarted(true);
                return;
            }
            if (gameOver && e.key === " ") {
                setStarted(true);
                restart();
                return;
            }

            switch (e.key) {
                case "ArrowUp":
                    if (dir.y !== 1) setDir({ x: 0, y: -1 });
                    break;
                case "ArrowDown":
                    if (dir.y !== -1) setDir({ x: 0, y: 1 });
                    break;
                case "ArrowLeft":
                    if (dir.x !== 1) setDir({ x: -1, y: 0 });
                    break;
                case "ArrowRight":
                    if (dir.x !== -1) setDir({ x: 1, y: 0 });
                    break;
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [dir, gameOver, started]);

    useEffect(() => {
        if (!started || gameOver) return;

        const interval = setInterval(() => {
            setSnake((prev) => {
                const newHead = {
                    x: prev[0].x + dir.x,
                    y: prev[0].y + dir.y,
                };

                // Wall collision (no wrapping)
                if (
                    newHead.x < 0 ||
                    newHead.x >= gridSize ||
                    newHead.y < 0 ||
                    newHead.y >= gridSize
                ) {
                    setGameOver(true);
                    return prev;
                }

                // Collision with self
                if (prev.some((p) => p.x === newHead.x && p.y === newHead.y)) {
                    setGameOver(true);
                    return prev;
                }

                const newSnake = [newHead, ...prev];

                // Eat apple
                if (newHead.x === apple.x && newHead.y === apple.y) {
                    const newScore = score + 1;
                    setScore(newScore);
                    if (newScore > highScore) {
                        setHighScore(newScore);
                        localStorage.setItem("highScore", newScore.toString());
                    }
                    setApple(getRandomApple(newSnake, gridSize));
                } else {
                    newSnake.pop();
                }

                return newSnake;
            });
        }, SPEED);

        return () => clearInterval(interval);
    }, [started, dir, apple, gameOver, score, highScore, gridSize]);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;

        ctx.fillStyle = "#111";
        ctx.fillRect(0, 0, CELL_SIZE * gridSize, CELL_SIZE * gridSize);

        // Draw apple
        ctx.fillStyle = "red";
        ctx.fillRect(
            apple.x * CELL_SIZE,
            apple.y * CELL_SIZE,
            CELL_SIZE,
            CELL_SIZE,
        );

        // Draw snake (squares)
        ctx.fillStyle = "#00ff88";
        for (const s of snake) {
            ctx.fillRect(
                s.x * CELL_SIZE,
                s.y * CELL_SIZE,
                CELL_SIZE,
                CELL_SIZE,
            );
        }

        // Score
        ctx.fillStyle = "white";
        ctx.font = "16px monospace";
        ctx.fillText(`Score: ${score}`, 10, 20);
        ctx.fillText(`High Score: ${highScore}`, 10, 40);

        if (gameOver) {
            ctx.fillStyle = "white";
            ctx.font = "20px monospace";
            ctx.fillText(
                "Game Over! Press Space",
                20,
                (CELL_SIZE * gridSize) / 2,
            );
        } else if (!started) {
            ctx.fillStyle = "white";
            ctx.font = "20px monospace";
            ctx.fillText(
                "Press Space to Start",
                20,
                (CELL_SIZE * gridSize) / 2,
            );
        }
    }, [snake, apple, gameOver, score, highScore, started, gridSize]);

    const canvasWidth = gridSize * CELL_SIZE;

    return (
        <div style={{ textAlign: "center", marginTop: 20 }}>
            <canvas
                ref={canvasRef}
                width={canvasWidth}
                height={canvasWidth}
                style={{ border: "2px solid white", background: "#111" }}
            />
        </div>
    );
}
