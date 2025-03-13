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

export default function BoardList({ id, title, content, updated }) {
  const date = new Date(updated);
  const updatedDate = date.toDateString();
  const updatedTime = date.toLocaleTimeString();
  const updatedFullDate = `${updatedDate} at ${updatedTime}`;

  const router = useRouter();

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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
    try {
      const res = await fetch(`/api/boards?id=${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        setError("Failed to delete board");
        return;
      }
      if(res.status === 404) {
        setError("Board not found");
        return;
      }
      if(res.status){
        setSuccess("Board deleted successfully");
        router.refresh();
        return;
      }
      setError("Failed to delete board");
    } catch (error) {
      setError("Failed to delete board");
      console.error(error);
    }
  }

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
              <button title="Double Click to Delete" onDoubleClick={() => handleDelete(id)}>
                <AiFillDelete size={32} className="hover:text-red-500" />
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
