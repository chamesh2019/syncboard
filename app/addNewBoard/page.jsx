"use client";
import Error from "@/components/Error";
import Success from "@/components/Success";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import useFirebaseBoards from "@/hooks/useFirebaseBoards";

export default function addNewBoard() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const { createBoard } = useFirebaseBoards();

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
      await createBoard({ title, content });
      setSuccess("Board added successfully!");
      
      // Reset form
      setTitle("");
      setContent("");
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.error("Error creating board:", error);
      setError("Failed to add board");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    let autoTitle = content.slice(0, 20);
    setTitle(autoTitle);
  })

  const handleTextAreaChange = (e) => {
    setContent(e.target.value);
    if (e.target.value.length < 20) {
      setTitle(e.target.value);
    }
    setTitle(e.target.value.slice(0, 20));
  };

  const handlePasteSubmit = () => {
    if(!navigator.clipboard) {
      setError("Clipboard API not supported");
      return;
    }
    navigator.clipboard.readText().then((text) => {
      setContent(text);
    });
  };

  setTimeout(() => {
    setError("");
  }, 8000);

  setTimeout(() => {
    setSuccess("");
  }, 8000);

  return (
    <section className="max-w-[1200px] mx-auto mt-8">
      <h2 className="text-4xl font-bold flex items-center gap-4 text-slate-900 mb-6">
        Add New Board
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
            placeholder="Enter board content"
            className="w-full border-2 border-slate-300 p-2 rounded-md mt-2"
            onChange={(e) => handleTextAreaChange(e)}
            value={content}
            rows={15}
          />
        </div>
        <div>
          <label htmlFor="boardName" className="text-slate-900 font-semibold">
            Board Name
          </label>
          <input
            type="text"
            id="boardName"
            placeholder="Enter board name"
            className="w-full border-2 border-slate-300 p-2 rounded-md mt-2"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex gap-2 mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-500 text-slate-50 px-4 py-2 rounded-md hover:bg-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Adding..." : "Add Board"}
          </button>
          <button
            onClick={() => handlePasteSubmit()}
            type="button"
            disabled={isSubmitting}
            className="bg-yellow-500 animate-pulse flex gap-2 items-center text-slate-50 px-4 py-2 rounded-md hover:bg-yellow-600 transition-all disabled:opacity-50"
          >
            <AiTwotoneThunderbolt /> <span>Paste Content</span>
          </button>
        </div>
      </form>
      {error === "" ? null : <Error error={error} />}
      {success === "" ? null : <Success success={success} />}
    </section>
  );
}
