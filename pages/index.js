import axios from 'axios';
import React from 'react'
import Push from "push.js";


const Home = () => {
  return (
    <div>
      <h1>{posts[0].attributes.title}</h1>
      <h1>{posts[1].attributes.title}</h1>
      <button onClick={function notifyMe(){Push.create("hello world")}}>create</button>
      <button onClick={function Checkpermission(){Push.Permission.has()}}>Checkpermission</button>
    </div>
  )
}

export default Home;

// export async function getStaticProps(){

// const postsRes = await fetch("http://localhost:1337/api/posts/");

// 

// const Data = await postsRes.json();

//   return {
//     props: {
//       posts:Data.data,
//     }
//   }
// };