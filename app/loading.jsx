import { AiTwotoneTool, AiTwotoneThunderbolt } from "react-icons/ai";

export default function Loading() {
  const icons = [
    <AiTwotoneTool size={105} className="animate-pulse text-purple-800" />,
    <AiTwotoneThunderbolt size={105} className="animate-pulse text-purple-800" />,
  ];

  return (
    <div>
      <div className="absolute top-0 left-0 w-full flex bg-purple-200 gap-12 justify-center items-center h-screen z-50">
        {icons[Math.floor(Math.random() * icons.length)]}
      </div>
    </div>
  );
}
