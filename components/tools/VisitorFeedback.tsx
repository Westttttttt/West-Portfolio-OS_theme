import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import axios from "axios";

interface FeedbackShape {
    _id: number;
    goodName: string;
    rating: number;
    feedback: string;
    createdAt: Date;
}

interface GetFeedbackType {
    feedbacks: FeedbackShape[];
    success: boolean;
}

interface ResponseData {
    data: GetFeedbackType;
}

interface FormData {
    goodName: string;
    rating?: number;
    feedback: string;
}

const VisitorFeedback = () => {
    const [hoveredStar, setHoveredStar] = useState(0);
    const [userfeedback, setuserFeedback] = useState<FeedbackShape[] | []>([]);
    const [formData, setFormData] = useState<FormData>({
        goodName: "",
        rating: 0,
        feedback: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res: { data: { feedback: FeedbackShape; success: boolean } } =
            await axios.post("/api/feedback", formData);

        if (res.data.success) {
            setuserFeedback([...userfeedback, res.data.feedback]);
            setFormData({
                goodName: "",
                rating: 0,
                feedback: "",
            });
        }
    };

    useEffect(() => {
        const fetchFeedback = async () => {
            const res: ResponseData = await axios.get("/api/feedback");

            if (res.data.success) {
                setuserFeedback(res.data.feedbacks);
            }
        };

        fetchFeedback();
    }, []);

    const dateConvert = (createdAt: Date) => {
        const isoDate = createdAt;
        const date = new Date(isoDate);

        return date.toLocaleString();
    };

    return (
        <div className="flex justify-center items-center h-[30rem] w-86 flex-col ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full fit overflow-x-hidden overflow-y-auto element p-4"
            >
                <form
                    className="flex flex-col items-center shadow-lg text-gray-300 w-full"
                    onSubmit={handleSubmit}
                >
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
                                onClick={() =>
                                    setFormData({
                                        ...formData,
                                        rating: num,
                                    })
                                }
                                onMouseEnter={() => setHoveredStar(num)}
                                onMouseLeave={() => setHoveredStar(0)}
                            >
                                <Star
                                    className={cn(
                                        "h-8 w-8 transition-colors duration-200",
                                        num <= formData.rating!
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
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            feedback: e.target.value,
                                        })
                                    }
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
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            goodName: e.target.value,
                                        })
                                    }
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

                <div className="w-full flex flex-col gap-4 mt-6 max-h-[40vh] px-2 mb-4">
                    {/* Example Feedback - map through actual feedback array later */}
                    {userfeedback.map(
                        ({ _id, goodName, feedback, rating, createdAt }) => (
                            <motion.div
                                key={_id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                whileHover={{ scale: 1.03, y: -2 }}
                                className="px-3 py-2 shadow-md border border-[#fafafa1a] hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-base font-semibold text-white tracking-tight">
                                        {goodName}
                                    </h4>
                                    <p className="text-xs text-gray-400 font-medium">
                                        {dateConvert(createdAt)}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                                        {feedback}
                                    </p>
                                    <div className="flex shrink-0">
                                        {Array.from({ length: 5 }).map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-3 w-3 transition-colors duration-200 ${
                                                        i < rating
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "text-gray-500"
                                                    }`}
                                                />
                                            ),
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ),
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default VisitorFeedback;
