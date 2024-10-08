import axios from "axios";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BASEURL, POSTS } from "../../api/api";
import { toast } from "react-toastify";

const UpdatePost = ({ setToggle, post, id, token, userId }) => {
  const [title, setTitle] = useState(post?.title);
  const [category, setCategory] = useState(post?.category);
  const [description, setDescription] = useState(post?.description);
  const [file, setFile] = useState(null);

  // updatePost
  async function updatePost(e) {
    e.preventDefault();
    if (!title) return toast.error("Title is required");
    if (!category) return toast.error("Category is required");
    if (!description) return toast.error("Description is required");
    if (!file) return toast.error("Image is required");
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("user", userId);
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      let res = await axios.put(`${BASEURL}/${POSTS}/${id}`, formData, {
        headers: { Authorization: "Bearer " + token },
      });
      toast.success(res.data.status + "Updated Done");
      setToggle(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 z-20 bg-slate-700 opacity-90 flex items-center justify-center">
      <div className="bg-white w-1/2 p-5 text-center capitalize rounded relative flex flex-col gap-3">
        <h4 className="text-2xl text-green-600">update post</h4>
        <span
          onClick={() => setToggle(false)}
          className="text-red-600 absolute right-2 top-2 cursor-pointer"
        >
          <IoIosCloseCircleOutline size={30} />
        </span>
        <form onSubmit={updatePost} className="flex flex-col w-full gap-10">
          <input
            type="text"
            className=" w-full border border-gray-400 rounded p-2"
            placeholder="Enter your title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className=" w-full border border-gray-400 rounded p-2"
            placeholder="Enter your category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <textarea
            className="w-full border border-gray-400 rounded p-2"
            name="description"
            placeholder="Enter your description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label
            className="flex items-center capitalize text-[#6C63FF] cursor-pointer"
            htmlFor="postImg"
          >
            <CiImageOn size={30} /> select new image
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
            type="file"
            name="image"
            id="postImg"
          />
          <button className="w-full p-1 bg-green-500 text-white" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
