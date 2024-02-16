import React from 'react';
import './App.css';
import CreatePost from './CreatePost';
// import DisplayPosts from './DisplayPosts';
import UpdatePost from './UpdatePost';
import DeletePost from './DeletePost';


function App() {
  return (
    <div className="App">
       <h1>Ipsum fake data</h1>
    <CreatePost />
    <UpdatePost />
    <DeletePost />
    {/* <DisplayPosts/> */}
 
    </div>
  );
}

export default App;
