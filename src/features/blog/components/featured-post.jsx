import { Link } from 'react-router-dom';

const FeaturedPost = ({ post }) => {
  if (!post) return null;

  return (
    <div className="w-full lg:w-1/2 xl:w-7/12 px-4 mb-8 lg:mb-0">
      <div>
        <img className="block w-full mb-8" src={post.image} alt={post.title} />
        <div className="mb-6">
          {post.tags && post.tags.map((tag, index) => (
            <span key={index} className="inline-block mr-2 px-3 py-1 text-sm font-medium bg-teal-100 text-teal-700 rounded-full">
              {tag}
            </span>
          ))}
          {post.category && !post.tags && (
            <span className="inline-block px-3 py-1 text-sm font-medium bg-teal-100 text-teal-700 rounded-full">
              {post.category}
            </span>
          )}
        </div>
        <Link className="block group max-w-2xl" to={`/blog/${post.slug}`}>
          <h3 className="text-3xl font-medium group-hover:text-teal-600 transition duration-200 mb-4">
            {post.title}
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src={post.author.avatar} alt={post.author.name} />
            <div className="flex items-center ml-4">
              <span className="text-sm font-medium">{post.author.name}</span>
              <span className="mx-2 sm:mx-4">
                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#929C9A" />
                </svg>
              </span>
              <span className="text-sm font-medium">{post.readTime}</span>
              {post.date && (
                <>
                  <span className="mx-2 sm:mx-4">
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#929C9A" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">{post.date}</span>
                </>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;