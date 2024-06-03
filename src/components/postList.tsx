import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchPosts, addPost } from "@/pages/api/hello";
import React from "react";

const PostList = () => {
  const {
    data: postData,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const {
    mutate,
    isError: isPostError,
    error: postError,
  } = useMutation({
    mutationFn: addPost,
  });

  function handleSubmit(e) {
    const formData = new FormData(e.target);
    const title = formData.get("Title");

    if (!title) return;

    mutate({ id: postData.length + 1, title });

    e.target.reset();
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Title"
          placeholder="Enter your book"
          className="postbox"
        />

        <button type="submit">Add Post</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}

      {postData?.map((post) => {
        return (
          <div key={post.id} className="post">
            <div>{post.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
