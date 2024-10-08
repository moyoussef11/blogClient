import { useState } from "react";
import { BASEURL, COMMENTS } from "../../api/api";
import axios from "axios";
import { toast } from "react-toastify";

const AddComment = ({ username, userId, postId, token, getPost }) => {
  const [text, setText] = useState("");

  // HandleAddComment
  async function addComment(e) {
    e.preventDefault();
    if (!text) return toast.error("Please write comment not empty");
    try {
      let res = await axios.post(
        `${BASEURL}/${COMMENTS}`,
        {
          postId,
          user: userId,
          username,
          text,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
      toast.success(res.data.status);
      getPost();
      setText("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={addComment}
      className="mt-5 flex flex-col items-start gap-2"
    >
      <input
        name="text"
        type="text"
        className="w-full p-2 bg-slate-200 rounded"
        placeholder="Add comment"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="bg-black p-2 rounded-full text-white">
        Comment
      </button>
    </form>
  );
};

export default AddComment;
