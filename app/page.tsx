import TaskBar from "@/components/taskbarComponents/Taskbar";
// import CalculatorTools from "@/components/tools/Calculator";

export default function Home() {
   return (
      <div className="home-bg w-full relative h-screen bg-cover flex justify-center">
         <TaskBar />
         {/* <CalculatorTools /> */}
      </div>
   );
}
