import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { BASEURL, COMMENTS } from "../../api/api";
import axios from "axios";
import { toast } from "react-toastify";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("token");

  // getUsers
  async function getComments() {
    try {
      let res = await axios.get(`${BASEURL}/${COMMENTS}`, {
        headers: { Authorization: "Bearer " + token },
      });
      setComments(res.data.comments);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  // deleteUser
  async function deleteComment(id) {
    try {
      await axios.delete(`${BASEURL}/${COMMENTS}/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      toast.success("deleted successfully");
      getComments();
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  useEffect(() => {
    getComments();
  }, []);

  // renderUi
  const showComments = comments.map((comment, index) => (
    <tr key={comment._id} className="text-center mx-auto even:bg-slate-200">
      <td className="border border-slate-300 p-2">{index + 1}</td>
      <td className="border border-slate-300 p-2">
        <div className="flex items-center justify-center gap-2">
          <img
            className="hidden sm:block h-12 w-12 rounded-full object-cover"
            src={comment.user.avatar.url}
            alt="user"
          />
          <span className="text-sm font-bold">{comment.user.username}</span>
        </div>
      </td>
      <td className="border border-slate-300 p-2">{comment.text}</td>
      <td className="border border-slate-300 p-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2">
          <button
            onClick={() => deleteComment(comment._id)}
            className="p-1 text-sm rounded capitalize font-semibold text-white bg-red-500"
          >
            delete comment
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="md:p-5">
      <h4 className="md:text-3xl capitalize font-bold border-b-2 border-black w-fit mb-3 pb-2">
        Comments
      </h4>
      <table className="w-full   table-auto lg:table-fixed border border-spacing-2 border-slate-400 border-collapse">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="border border-slate-300">#id</th>
            <th className="border border-slate-300">user</th>
            <th className="border border-slate-300">comment</th>
            <th className="border border-slate-300">action</th>
          </tr>
        </thead>
        <tbody className="">{showComments}</tbody>
      </table>
    </div>
  );
};

export default Comments;
