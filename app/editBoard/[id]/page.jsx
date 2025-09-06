"use client";
import Error from "@/components/Error";
import Success from "@/components/Success";
import React, { useEffect, useState } from "react";
import useFirebaseBoards from "@/hooks/useFirebaseBoards";
import { useRouter } from "next/navigation";

export default function editBoard({ params }) {
  const { id } = React.use(params);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { getBoardById, updateBoard } = useFirebaseBoards();

  useEffect(() => {
    async function getBoard() {
      try {
        setIsLoading(true);
        const boardData = await getBoardById(id);

        if (!boardData) {
          setError("Board not found");
          return;
        }

        setTitle(boardData.title);
        setContent(boardData.content);
      } catch (error) {
        console.error(error);
        setError("Failed to get board. Try Again");
      } finally {
        setIsLoading(false);
      }
    }
    getBoard();
  }, [id, getBoardById]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Please fill in all fields");
      return;
    }
    if (content.length > 1000) {
      setError("Content is too long");
      return;
    }

    if (title.length > 20) {
      setError("Title is too long");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await updateBoard(id, { title, content });
      setSuccess("Board Updated Successfully!");
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.error("Error updating board:", error);
      setError("Failed to update board. Try Again");
    } finally {
      setIsSubmitting(false);
    }
  };

  setTimeout(() => {
    setError("");
    setSuccess("");
  }, 8000);

  if (isLoading) {
    return (
      <section className="max-w-[1200px] mx-auto mt-8">
        <h2 className="text-4xl font-bold flex items-center gap-4 text-slate-900">
          Edit Board
        </h2>
        <div className="flex justify-center items-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-gray-600">Loading board...</span>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-[1200px] mx-auto mt-8">
      <h2 className="text-4xl font-bold flex items-center gap-4 text-slate-900">
        Edit Board
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-8">
          <label
            htmlFor="boardContent"
            className="text-slate-900 font-semibold"
          >
            Board Content <span className="text-sm font-normal">({content.length} of 1000 characters)</span>
          </label>
          <textarea
            id="boardContent"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="Enter board content"
            className="w-full border-2 border-slate-300 p-2 rounded-md mt-2"
            rows={15}
          />
        </div>
        <div className="mt-8">
          <label htmlFor="boardName" className="text-slate-900 font-semibold">
            Board Name
          </label>
          <input
            type="text"
            id="boardName"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter board name"
            className="w-full border-2 border-slate-300 p-2 rounded-md mt-2"
          />
        </div>
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-500 text-slate-50 px-4 py-2 rounded-md hover:bg-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Updating..." : "Update Board"}
          </button>
        </div>
      </form>
      {error === "" ? null : <Error error={error} />}
      {success === "" ? null : <Success success={success} />}
    </section>
  );
}
