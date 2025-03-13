export default function () {
  return (
    <form>
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
        <label htmlFor="boardContent" className="text-slate-900 font-semibold">
          Board Content
        </label>
        <textarea
          id="boardContent"
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="Enter board content"
          className="w-full border-2 border-slate-300 p-2 rounded-md mt-2"
        />
      </div>
      <div className="mt-8">
        <button className="bg-purple-500 text-slate-50 px-4 py-2 rounded-md hover:bg-purple-600 transition-all">
          Update Board
        </button>
      </div>
    </form>
  );
}
