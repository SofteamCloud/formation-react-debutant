import { useParams } from "react-router-dom";

import useFetch from "./utils/useFetch";

export default function PostItem() {
  const { postId } = useParams();
  const { data: post, loading } = useFetch(
    `http://localhost:3004/posts/${postId}`
  );

  console.log(post);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-details card">
      <article>
        <h2>{post.title}</h2>
        <p>Written by {post.author}</p>
        <div>
          {post.body}
          {/* <button>Delete</button> */}
        </div>
      </article>
    </div>
  );
}
