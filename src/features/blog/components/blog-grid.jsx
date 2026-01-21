import BlogCard from './blog-card';

const BlogGrid = ({ posts, showAllContent }) => {
  if (!posts || posts.length === 0) return null;

  const sidebarPosts = posts.slice(1, 4); // Show first 3 sidebar posts initially
  const additionalPosts = posts.slice(4); // Additional posts for "see all"

  return (
    <>
      <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
        <div className="max-w-lg">
          {sidebarPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {showAllContent && additionalPosts.length > 0 && (
        <div className="flex flex-wrap mt-16 -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="max-w-lg">
              {additionalPosts.slice(0, 2).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-lg">
              {additionalPosts.slice(2, 4).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogGrid;