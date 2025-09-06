"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiFillEdit,
  AiFillDelete,
  AiFillCopy,
  AiOutlineShareAlt,
} from "react-icons/ai";
import PopUp from "./PopUp";
import Success from "./Success";
import Error from "./Error";
import { useRouter } from "next/navigation";
import useFirebaseBoards from "@/hooks/useFirebaseBoards";

export default function BoardList({ id, title, content, updated }) {
  // Handle both Firestore timestamp and Date objects
  let date;
  if (updated && typeof updated.toDate === 'function') {
    // Firestore timestamp
    date = updated.toDate();
  } else if (updated) {
    // Regular date string or Date object
    date = new Date(updated);
  } else {
    date = new Date();
  }
  
  const updatedDate = date.toDateString();
  const updatedTime = date.toLocaleTimeString();
  const updatedFullDate = `${updatedDate} at ${updatedTime}`;

  const router = useRouter();
  const { deleteBoard } = useFirebaseBoards();

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
    if (!navigator.clipboard) {
      setMessage("Copy to clipboard not supported");
      return;
    }
    setMessage("Copied to clipboard");
  };

  const handleShare = (id) => {
    const url = window.location.origin + "/";
    navigator.clipboard.writeText(`${url}#${id}`);
    if (!navigator.clipboard) {
      setMessage("Share not supported");
      return;
    }
    setMessage("Link copied to clipboard");
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this board?")) {
      return;
    }
    
    setIsDeleting(true);
    try {
      await deleteBoard(id);
      setSuccess("Board deleted successfully!");
    } catch (error) {
      console.error("Error deleting board:", error);
      setError("Failed to delete board");
    } finally {
      setIsDeleting(false);
    }
  };

  setTimeout(() => {
    setMessage("");
    setSuccess("");
    setError("");
  }, 5000);

  return (
    <section className="max-w-[1200px] mx-auto mt-8" id={id}>
      {success && (
        <Success success={success} />
      )}
      {error && (
        <Error error={error} />
      )}
      <div className="relative">
        <div className="bg-slate-50 border-t-2 border-purple-500 p-4 rounded-md shadow-md">
          <div className="flex justify-between items-center gap-4 flex-wrap">
            <h2 className="text-2xl font-semibold text-slate-900">
              {title.slice(0, 20)}
            </h2>
            <div className="flex gap-2">
              <button title="Click to Copy" onClick={() => handleCopy(content)}>
                <AiFillCopy
                  size={38}
                  className="hover:text-purple-90 hover:scale-110 hover:animate-pulse text-purple-600"
                />
              </button>
              <button title="Click to Share" onClick={() => handleShare(id)}>
                <AiOutlineShareAlt size={38} className="hover:scale-110" />
              </button>
            </div>
          </div>
          <p className="text-slate-600 mt-2">{content.slice(0, 100)}</p>
          <div className="flex justify-between items-end mt-8">
            <div className="flex gap-4">
              <Link href={`/editBoard/${id}`}>
                <AiFillEdit size={32} className="hover:text-yellow-500" />
              </Link>
              <button 
                title="Double Click to Delete" 
                onDoubleClick={() => handleDelete(id)}
                disabled={isDeleting}
                className={isDeleting ? "opacity-50 cursor-not-allowed" : ""}
              >
                <AiFillDelete 
                  size={32} 
                  className={`hover:text-red-500 ${isDeleting ? 'animate-spin' : ''}`} 
                />
              </button>
            </div>
            <p className="text-xs text-end">{updatedFullDate}</p>
          </div>
        </div>
        {message && <PopUp message={message} />}
      </div>
    </section>
  );
}
