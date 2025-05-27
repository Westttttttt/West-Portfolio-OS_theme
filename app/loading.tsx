"use client";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <TextHoverEffect text="west OS"/>
      </div>
    )
}
