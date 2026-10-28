import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { getPosts } from "./Services";

const Exercise = () => {
  const [listPost, setListPost] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getPosts().then((data) => {
      if (isMounted) setListPost(data);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-700">
        Post Cards
      </h1>
      <section className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listPost.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </section>
    </main>
  );
};

export default Exercise;