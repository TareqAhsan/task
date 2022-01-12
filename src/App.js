import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Posts from './Components/Posts';
import { lazy, Suspense, useEffect, useState } from "react";
import Pagination from "./Components/Pagination";
import Toggle from "./Components/Toggle";
const Posts = lazy(() => import("./Components/Posts"));
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [postPerpage, setPostPerpage] = useState(10);
  const [toggle,setToggle] = useState(true)

  const indexOfLastPost = page * postPerpage;
  const indexOfFirstPost = indexOfLastPost - postPerpage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (number) => setPage(number);
  const getPosts = async () => {
    try {
      setLoading(true);
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setPosts(data);
      setLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleCancel = (id) => {
    const remain = posts.filter((post) => post.id !== id);
    setPosts(remain);
  };

  return (
    <div className="App" style={{background:'lightgrey'}}>
      <Suspense fallback={<p>Loading...</p>}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 3fr'}}>
          <div><Toggle setToggle={setToggle}/></div>
          <div>
            <Posts
              toggle={toggle}
              post={currentPost}
              loading={loading}
              handleCancel={handleCancel}
            />
            <Pagination
              postPerpage={postPerpage}
              totalPost={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
