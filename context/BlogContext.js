import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    { title: "React Native" },
    { title: "Javascript" },
  ]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: "Vue Js" }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
