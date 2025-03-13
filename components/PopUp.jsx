import { AiTwotonePushpin } from "react-icons/ai";

export default function PopUp({message}) {
  return (
    <div className="flex rounded-md justify-center items-center gap-3 absolute bottom-0 left-0 right-0 bg-purple-200/90 p-4 text-center">
      <AiTwotonePushpin size={28}/>{message}
    </div>
  )
}
