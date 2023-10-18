import PostCard from "./PostCard";
import useFetch from "./utils/useFetch";

export default function PostList() {
  const { data: posts, loading } = useFetch(`http://localhost:3004/posts`);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-list">
      {Array.isArray(posts) &&
        posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
