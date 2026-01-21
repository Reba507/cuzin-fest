import React, { useState } from 'react';

const BlogHeader = ({ onShowAll }) => {
  const [showAllContent, setShowAllContent] = useState(false);

  const handleShowAll = () => {
    setShowAllContent(true);
    if (onShowAll) {
      onShowAll(true);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between mb-20 -mx-4">
      <div className="w-full sm:w-1/2 px-4 mb-10 sm:mb-0">
        <h1 className="font-heading text-5xl sm:text-6xl">Blog</h1>
      </div>
      <div className="w-full sm:w-1/2 px-4 sm:text-right">
        <button
          className={`inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-300 ${showAllContent ? 'hidden' : ''}`}
          onClick={handleShowAll}
        >
          <span className="mr-2">See all</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.75 10H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 4.75L15.25 10L10 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogHeader;