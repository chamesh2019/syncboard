import BoardList from "@/components/BoardList";
import { AiFillAppstore } from "react-icons/ai";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

async function getBoards() {
  try {
    const res = await fetch(`${process.env.APP_URL_API}boards`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch boards");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return { boards: [] };
  }
}

export default async function Home() {

  const data = await getBoards();
  const boards = data?.boards || [];
  console.log(boards);

  return (
    <div className="max-w-[1200px] mx-auto mt-8">
      <h1 className="text-4xl font-bold flex items-center gap-4 text-slate-900">
        <AiFillAppstore />
        All Sync Boards
      </h1>
      {boards.length > 0 ? (
        boards.reverse().map((board)=>{
          return (
            <BoardList key={board._id} id={board._id} title={board.title} content={board.content} updated={board.updatedAt}/>
          )
        })
      ) : (
        <p className="text-gray-500 mt-4">No boards found.</p>
      )}
    </div>
  );
}
