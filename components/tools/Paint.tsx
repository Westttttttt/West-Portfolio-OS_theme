import { BrushCleaning, PenTool, Redo, Undo } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";

const Paint = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState("#ffffff");
    const [brushSize, setBrushSize] = useState(2);
    const [history, setHistory] = useState<ImageData[]>([]);
    const [redoStack, setRedoStack] = useState<ImageData[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current!;
        canvas.width = window.innerWidth * 0.8;
        canvas.height = 500;

        const ctx = canvas.getContext("2d")!;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
        ctxRef.current = ctx;

        // Transparent bg, no need to fill
        saveState(); // save initial empty state
    }, []);

    useEffect(() => {
        if (ctxRef.current) {
            ctxRef.current.strokeStyle = color;
            ctxRef.current.lineWidth = brushSize;
        }
    }, [color, brushSize]);

    const saveState = () => {
        const canvas = canvasRef.current!;
        const data = ctxRef.current!.getImageData(
            0,
            0,
            canvas.width,
            canvas.height,
        );
        setHistory((prev) => [...prev, data]);
    };

    const startDrawing = (e: React.MouseEvent) => {
        ctxRef.current?.beginPath();
        ctxRef.current?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
    };

    const draw = (e: React.MouseEvent) => {
        if (!isDrawing) return;
        ctxRef.current?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctxRef.current?.stroke();
    };

    const stopDrawing = () => {
        if (isDrawing) {
            ctxRef.current?.closePath();
            setIsDrawing(false);
            saveState(); // save after draw
            setRedoStack([]); // clear redo history
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current!;
        ctxRef.current?.clearRect(0, 0, canvas.width, canvas.height);
        saveState();
        setRedoStack([]);
    };

    const undo = () => {
        if (history.length > 1) {
            const newHistory = [...history];
            const lastState = newHistory.pop()!;
            setRedoStack((prev) => [...prev, lastState]);
            const prevState = newHistory[newHistory.length - 1];
            ctxRef.current?.putImageData(prevState, 0, 0);
            setHistory(newHistory);
        }
    };

    const redo = () => {
        if (redoStack.length > 0) {
            const newRedo = [...redoStack];
            const state = newRedo.pop()!;
            setHistory((prev) => [...prev, state]);
            ctxRef.current?.putImageData(state, 0, 0);
            setRedoStack(newRedo);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4 text-white">
            <canvas
                ref={canvasRef}
                className="rounded-lg cursor-crosshair backdrop-blur-3xl border"
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
            />
            <div className="flex flex-wrap items-center gap-4">
                <label className="flex items-center ">
                    Color 🎨
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="ml-2 cursor-pointer"
                    />
                </label>
                <label className="flex items-center gap-2">
                    Size <PenTool className="size-4" />
                    <input
                        type="range"
                        min="1"
                        max="50"
                        value={brushSize}
                        onChange={(e) => setBrushSize(parseInt(e.target.value))}
                        className="ml-2 cursor-pointer"
                    />
                </label>
                <Button
                    onClick={undo}
                    className=" px-4 py-2 rounded flex items-center bg-blue-500 hover:bg-blue-600 cursor-pointer"
                >
                    Undo <Undo />
                </Button>
                <Button
                    onClick={redo}
                    className="cursor-pointer px-4 py-2 rounded flex items-center bg-green-500 hover:bg-green-600"
                >
                    Redo <Redo />
                </Button>
                <Button
                    onClick={clearCanvas}
                    className="cursor-pointer px-4 py-2 rounded flex items-center bg-red-600 hover:bg-red-700"
                >
                    Clear <BrushCleaning />
                </Button>
            </div>
        </div>
    );
};

export default Paint;
