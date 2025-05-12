import IconsAndTooltipWrapper from "./IconsAndTooltipWrapper";

const TaskBar = () => {
   return (
      <div className="backdrop-blur-sm w-fit px-6 fixed h-fit bottom-3 rounded-[9px] border border-[#ffffff46] flex gap-6 items-center justify-center py-2 left-1/2  -translate-x-1/2 max-sm:flex-wrap max-sm:w-full shadow-2xl shadow-[#ffffff7a] z-50">
         <IconsAndTooltipWrapper />
      </div>
   );
};

export default TaskBar;
