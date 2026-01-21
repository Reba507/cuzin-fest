import { useEffect, useState } from 'react';
import AnnouncementBar from '@components/layout/announcement-bar';
import SimpleNavigation from '@components/layout/simple-navigation';
import BlogHeader from '@features/blog/components/blog-header';
import FeaturedPost from '@features/blog/components/featured-post';
import BlogGrid from '@features/blog/components/blog-grid';
import CTASection from '@components/layout/cta-section';
import Footer from '@components/layout/footer';
import blogData from '@data/blog.json';

function BlogPage() {
  const [showAllContent, setShowAllContent] = useState(false);

  useEffect(() => {
    document.title = 'Blog - cuzin-fest';
  }, []);

  const featuredPost = blogData.find(post => post.featured);
  const otherPosts = blogData.filter(post => !post.featured);

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <section className="relative py-12 lg:py-24">
        <div className="container mx-auto px-4">
          <BlogHeader onShowAll={setShowAllContent} />

          <div className="flex flex-wrap -mx-4">
            <FeaturedPost post={featuredPost} />
            <BlogGrid posts={otherPosts} showAllContent={showAllContent} />
          </div>
        </div>
      </section>

      <CTASection />
      <Footer backgroundImage="images/footer-waves-left-bottom.png" />
    </div>
  );
}

export default BlogPage;