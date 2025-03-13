import BoardList from "@/components/BoardList";
import { AiFillAppstore } from "react-icons/ai";

async function getBoards() {
  try {
    const boards = await fetch(`${process.env.APP_URL_API}boards`, {
      cache: "no-cache",
    });

    if (!boards.ok) {
      throw new Error("Failed to fetch boards");
    }

    return boards.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {

  const {boards} = await getBoards();
  console.log(boards);

  return (
    <div className="max-w-[1200px] mx-auto mt-8">
      <h1 className="text-4xl font-bold flex items-center gap-4 text-slate-900">
        <AiFillAppstore />
        All Sync Boards
      </h1>
      {boards.reverse().map((board)=>{
        return (
          <BoardList key={board._id} id={board._id} title={board.title} content={board.content} updated={board.updatedAt}/>
        )
      })}
    </div>
  );
}
