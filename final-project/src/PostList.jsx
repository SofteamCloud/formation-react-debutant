import { Link } from 'react-router-dom';

const PostList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="card" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="card__title">{ blog.title }</h2>
            <p className="card__date">Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default PostList;