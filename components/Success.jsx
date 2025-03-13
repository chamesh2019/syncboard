'use client';
export default function Success({success}) {
  return (
    <div className="bg-green-200 mt-5 mb-2 p-4 rounded-md">
      <p>{success}</p>
    </div>
  );
}
