import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";
import "./Blogs.css";
export default function Blogs() {
  const {posts, loading} = useContext(AppContext);
  return (
    <div className="w-screen flex items-center justify-center">
    <div className="max-w-[670px] w-11/12 py-8 flex flex-col gap-y-7 mt-[50px] mb-[68px] justify-center items-center">      {loading ? (
        <Spinner/>
      ):posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ):( 
        posts.map((post) => (
          <BlogDetails key={post.id} post={post} />
        ))
      )}
    </div>
    </div>
  );
}
