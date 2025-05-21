import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const VisitorFeedback = () => {
    const [rating, setRating] = useState(0);
    const [hoveredStar, setHoveredStar] = useState(0);

    return (
        <div className="flex justify-center items-center h-[30rem] w-86 flex-col ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full fit overflow-x-hidden overflow-y-auto element p-4"
            >
                <form className="flex flex-col items-center shadow-lg text-gray-300 w-full">
                    <h1 className=" font-bold ">I&apos;d Love Your Feedback</h1>
                    <p className="text-gray-400 text-sm font-medium">
                        Tell us what you think!
                    </p>

                    <div className="flex gap-2 mt-6">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <motion.div
                                key={num}
                                className="cursor-pointer relative"
                                whileHover={{ scale: 1.3, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setRating(num)}
                                onMouseEnter={() => setHoveredStar(num)}
                                onMouseLeave={() => setHoveredStar(0)}
                            >
                                <Star
                                    className={cn(
                                        "h-8 w-8 transition-colors duration-200",
                                        num <= rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300",
                                        num <= hoveredStar &&
                                            "fill-yellow-300 text-yellow-300",
                                    )}
                                />
                                <AnimatePresence>
                                    {num <= hoveredStar && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{
                                                opacity: 0.2,
                                                scale: 1.5,
                                            }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            className="absolute inset-0 rounded-full bg-yellow-200 blur-md"
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <div className="w-full mt-5">
                        <section className="">
                            <label className="text-sm font-semibold text-gray-300">
                                Share Your Thoughts
                            </label>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Textarea
                                    placeholder="What did you love or what could be better?"
                                    className="resize-none w-full h-24 rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-gray-200 placeholder-gray-400"
                                    required
                                />
                            </motion.div>
                        </section>

                        <section className="">
                            <label className="text-sm font-semibold text-gray-300">
                                Your Name
                            </label>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Input
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-gray-300 placeholder-gray-400"
                                    required
                                />
                            </motion.div>
                        </section>

                        <motion.button
                            className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 shadow-md cursor-pointer mt-4 text-xs"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Share Your Feedback
                        </motion.button>
                    </div>
                </form>
                <div className="w-full flex flex-col gap-3 overflow-hidden mt-4">
                    {/* Example Feedback - map through actual feedback array later */}
                    {[
                        {
                            id: 1,
                            name: "Alice",
                            message: "Loved the animations and minimal look!",
                            rating: 5,
                        },
                        {
                            id: 2,
                            name: "Bob",
                            message: "Would love dark mode toggle 😄",
                            rating: 4,
                        },
                        {
                            id: 3,
                            name: "West",
                            message: "Absoulte trash ",
                            rating: 0,
                        },
                        {
                            id: 4,
                            name: "Bimesh",
                            message: "Good af",
                            rating: 3,
                        },
                    ].map(({ id, name, message, rating }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.1 }}
                            className=" rounded-xl p-4 shadow-sm border border-[#fafafa41] overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-sm font-semibold text-white">
                                    {name}
                                </h4>
                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${
                                                i < rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-gray-500"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm">{message}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default VisitorFeedback;
