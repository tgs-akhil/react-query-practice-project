// // // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: "John Doe" });
// }

export async function fetchPosts() {
  const response = await fetch(`http://localhost:3001/posts`);

  const postData = await response.json();

  return postData;
}

// export async function fetchTags() {
//   const tagResponse = await fetch("http://localhost:3001/tags");

//   const tagData = await tagResponse.json();
//   return tagData;
// }

export async function addPost(post) {
  const response = await fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(post),
  });

  return response.json();
}
