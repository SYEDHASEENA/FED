import "./index.css";
import React from 'react';
import BlogContextDemo from './BlogContextDemo'

const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Varun K"
  },
  NodeJS: {
    post: "Node Commands",
    author: "Veena M"
  }
};

export const BlogContext  = React.createContext();

export default function App() {
  return (
    <div className="App">
      <div>
      <h1>Hello All</h1>
      <BlogContext.Provider value={blogInfo}>
           <BlogContextDemo />
      </BlogContext.Provider>
      </div>
    </div>
  );
}
