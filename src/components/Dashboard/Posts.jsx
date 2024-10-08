import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL, POSTS } from "../../api/api";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");
  // getPosts
  async function getPosts() {
    try {
      let res = await axios.get(`${BASEURL}/${POSTS}`);
      setPosts(res.data.posts);
    } catch (error) {
      return toast.error(error.response.data.msg);
    }
  }
  // deletePost
  async function deletePost(id) {
    try {
      await axios.delete(`${BASEURL}/${POSTS}/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      toast.success("deleted successfully");
      getPosts();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  // renderUi
  const showPosts = posts.map((post, index) => {
    return (
      <tr key={post._id} className="text-center mx-auto even:bg-slate-200">
        <td className="border border-slate-300 p-2">{index + 1}</td>
        <td className="border border-slate-300 p-2">
          <div className="flex items-center justify-center gap-2">
            <img
              className="hidden sm:block h-12 w-12 rounded-full object-cover"
              src={post.image.url}
              alt="user"
            />
            <span className="text-sm font-bold">{post.user.username}</span>
          </div>
        </td>
        <td className="border border-slate-300 p-2">{post.title}</td>
        <td className="border border-slate-300 p-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2">
            <Link
              to={`/posts/post-details/${post._id}`}
              className="p-1 text-sm rounded capitalize font-semibold text-white bg-green-500"
            >
              view post
            </Link>
            <button
              onClick={() => deletePost(post._id)}
              className="p-1 text-sm rounded capitalize font-semibold text-white bg-red-500"
            >
              delete post
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="md:p-5">
      <h4 className="md:text-3xl capitalize font-bold border-b-2 border-black w-fit mb-3 pb-2">
        posts
      </h4>
      <table className="w-full  table-auto lg:table-fixed border border-spacing-2 border-slate-400 border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="border border-slate-300">#id</th>
            <th className="border border-slate-300">user</th>
            <th className="border border-slate-300">title</th>
            <th className="border border-slate-300">action</th>
          </tr>
        </thead>
        <tbody className="">{showPosts}</tbody>
      </table>
    </div>
  );
};

export default Posts;
