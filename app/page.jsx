'use client';

import BoardList from "@/components/BoardList";
import { AiFillAppstore } from "react-icons/ai";
import useFirebaseBoards from "@/hooks/useFirebaseBoards";

export default function Home() {
  const { boards, loading, error } = useFirebaseBoards();

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto mt-8">
        <h1 className="text-4xl font-bold flex items-center gap-4 text-slate-900">
          <AiFillAppstore />
          All Sync Boards
        </h1>
        <div className="flex justify-center items-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-gray-600">Loading boards...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[1200px] mx-auto mt-8">
        <h1 className="text-4xl font-bold flex items-center gap-4 text-slate-900">
          <AiFillAppstore />
          All Sync Boards
        </h1>
        <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto mt-8">
      <h1 className="text-4xl font-bold flex items-center gap-4 text-slate-900">
        <AiFillAppstore />
        All Sync Boards ({boards.length})
      </h1>
      {boards.length > 0 ? (
        boards.map((board) => {
          return (
            <BoardList 
              key={board.id} 
              id={board.id} 
              title={board.title} 
              content={board.content} 
              updated={board.updatedAt}
            />
          );
        })
      ) : (
        <div className="mt-8 text-center">
          <p className="text-gray-500 mb-4">No boards found. Create your first board!</p>
          <a 
            href="/addNewBoard" 
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create First Board
          </a>
        </div>
      )}
    </div>
  );
}
