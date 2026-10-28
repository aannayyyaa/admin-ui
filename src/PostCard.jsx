import React, { useState } from "react";

const PostCard = ({ title, body }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected((prev) => !prev)}
      className={`cursor-pointer rounded-lg p-6 shadow transition hover:shadow-md ${
        selected ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="mb-2 text-xl font-semibold capitalize text-gray-800">
        {title}
      </h2>
      <p className="text-gray-600 leading-normal">{body}</p>
    </div>
  );
};

export default PostCard;