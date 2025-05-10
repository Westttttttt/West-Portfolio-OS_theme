import ToolsRender from "@/components/common/ToolsRender";
import TaskBar from "@/components/taskbarComponents/Taskbar";

export default function Home() {
   return (
      <div className="home-bg w-full h-screen bg-cover">
         <TaskBar />
         <ToolsRender />
      </div>
   );
}
