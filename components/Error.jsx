'use client';
export default function Error({error}) {
  return (
    <div className="bg-red-200 mt-5 mb-2 p-4 rounded-md">
      <p>{error}</p>
    </div>
  );
}
