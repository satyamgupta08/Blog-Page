import React from "react";
import {NavLink} from "react-router-dom";
import "./Blogs.css";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
// import { Button } from "react-bootstrap/lib/InputGroup";
const BlogDetails=({post})=>{
  // const {setCurrent} = useContext(AppContext);
  return(
    <div className="mt-[5px]">
 <NavLink to={`/blog/${post.id}`}>
        <span className  ="title font-bold text-sm">{post.title}</span>
      </NavLink>
 <p className="text-sm"> 
By 
 <span className="italic">{post.author}</span>
 on{" "} 
 <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
 <span className="underline font-bold"> <button >{post.category}</button></span>
        </NavLink>
      </p>
      <p className="text-[10px] mt-[4px]">Posted on {post.date}</p>
 <p className="text-md mt-[14px]">

 {post.content}</p>
 <div>
 {post.tags.map((tag, index) => (
 <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
 <span className="text-blue-700 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
 </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
