import TaskBar from "@/components/Taskbar";
import Image from "next/image";

export default function Home() {
   return (
      <div className="home-bg w-full relative h-screen bg-cover flex justify-center">
         <TaskBar />
      </div>
   );
}
