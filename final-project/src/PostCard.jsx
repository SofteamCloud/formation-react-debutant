import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  console.log(post);
  return (
    <div className="card">
      <Link to={`/posts/${post.id}`}>
        <h2 className="card__title">{post.title}</h2>
        <p className="card__date">Written by {post.author}</p>
      </Link>
    </div>
  );
}
