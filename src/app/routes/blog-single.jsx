import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AnnouncementBar from '@components/layout/announcement-bar';
import SimpleNavigation from '@components/layout/simple-navigation';
import CTASection from '@components/layout/cta-section';
import Footer from '@components/layout/footer';
import blogData from '@data/blog.json';

function BlogSinglePage() {
  const { slug } = useParams();

  // Find the blog post based on the slug
  const post = blogData.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - cuzin-fest`;
    } else {
      document.title = 'Blog Post Not Found - Flora&Fauna';
    }
  }, [post]);

  if (!post) {
    return (
      <div className="antialiased bg-body text-body font-body">
        <AnnouncementBar />
        <SimpleNavigation />

        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl mb-8">Post Not Found</h1>
              <p className="text-lg text-gray-600 mb-8">The blog post you're looking for doesn't exist or may have been moved.</p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors duration-200"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
        <Footer backgroundImage="images/footer-waves-left-bottom.png" />
      </div>
    );
  }

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
              <span>→</span>
              <Link to="/blog" className="hover:text-teal-600 transition-colors">Blog</Link>
              <span>→</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>

            {/* Category Badge */}
            {post.category && (
              <div className="inline-block px-4 py-2 bg-teal-100 text-teal-700 text-sm font-medium rounded-full mb-6">
                {post.category}
              </div>
            )}

            {/* Title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-3">
                <img
                  src={`/${post.author.avatar}`}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Excerpt */}
            <p className="text-gray-700 text-xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={`/${post.image}`}
                alt={post.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>
                  {post.content?.intro || `Welcome to this comprehensive guide where we dive deep into the topic of ${post.title.toLowerCase()}. In today's rapidly evolving energy landscape, understanding these concepts is crucial for building a sustainable future.`}
                </p>

                <p>
                  {post.excerpt} This article will provide you with actionable insights and practical knowledge
                  that you can apply to better understand renewable energy and sustainability practices.
                </p>

                {post.content?.keyTakeaways && (
                  <>
                    <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Key Takeaways</h2>
                    <ul className="space-y-3 text-gray-700">
                      {post.content.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {post.content?.sections?.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                )) || (
                  <>
                    <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Understanding the Impact</h2>
                    <p>
                      The transition to renewable energy sources represents one of the most significant challenges
                      and opportunities of our time. By understanding the principles and applications of sustainable
                      energy technologies, we can make informed decisions that benefit both our environment and economy.
                    </p>
                  </>
                )}

                {post.content?.proTip && (
                  <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8 my-8">
                    <h3 className="text-teal-700 text-xl font-semibold mb-4">💡 Pro Tip</h3>
                    <p className="text-gray-700 mb-0">
                      {post.content.proTip}
                    </p>
                  </div>
                )}

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Conclusion</h2>

                <p>
                  {post.content?.conclusion || `Understanding ${post.title.toLowerCase()} is essential for anyone interested in sustainable energy solutions. By embracing these technologies and practices, we can work together to create a cleaner, more sustainable future for generations to come.`}
                </p>

                <p>
                  The journey toward sustainable energy requires collective action, continued innovation, and
                  a commitment to environmental stewardship. Every step we take today shapes the world of tomorrow.
                </p>
              </div>
            </article>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-teal-50 to-lime-50 border border-teal-200 rounded-2xl p-8 mt-16">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Make a Difference?</h3>
                <p className="text-gray-700 mb-6">
                  Join the renewable energy revolution and help create a sustainable future for our planet.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-700 transition-colors duration-200"
                >
                  Get Started Today
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="text-center mt-16">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to All Posts
              </Link>
            </div>

            {/* Related Posts */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogData
                  .filter(relatedPost => relatedPost.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-300 transition-all duration-300"
                    >
                      <div className="relative">
                        <img
                          src={`/${relatedPost.image}`}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {relatedPost.category && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-teal-700 text-sm font-medium rounded-full">
                              {relatedPost.category}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold mb-3 leading-tight group-hover:text-teal-600 transition-colors duration-300">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="images/footer-waves-left-bottom.png" />
    </div>
  );
}

export default BlogSinglePage;