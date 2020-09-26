import React from 'react';
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <PostForm />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h2>Sincron Posts</h2>
                <Posts posts={[1,2,3]} />
            </div>
            <div className="col">
                <h2>Asincron Posts</h2>
                <FetchedPosts posts={[]} />
            </div>
        </div>
    </div>
  );
}

export default App;
