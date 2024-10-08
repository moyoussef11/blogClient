import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Cookies from "universal-cookie";
import { BASEURL, COMMENTS } from "../../api/api";
import { toast } from "react-toastify";

const Comments = ({ comments, getPost }) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const user = cookies.get("user");
  const loggedUser = user?._id;

  // handleDelete
  async function deleteComment(id) {
    try {
      let res = await axios.delete(`${BASEURL}/${COMMENTS}/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      toast.success(res.data.comment);
      getPost();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h3 className="md:text-3xl font-semibold border-b-2 border-black py-2">
        {comments?.length} Comments
      </h3>
      <div className="comments mt-3 flex flex-col gap-2 relative">
        {comments?.length == 0 ? (
          <div>No comments</div>
        ) : (
          comments?.map((comment) => (
            <div
              key={comment?._id}
              className="comment border border-gray-300 p-2 relative"
            >
              <div className="flex flex-col md:items-center md:flex-row justify-between">
                <h3 className="capitalize font-bold">{comment?.username}</h3>
                <span className="text-green-600 text-sm">
                  {comment?.createdAt?.split("T")[0]}
                </span>
              </div>
              <div className="mt-2 flex flex-col gap-3">
                <p>{comment?.text} </p>
                {loggedUser === comment?.user ? (
                  <div className="action flex items-center gap-3">
                    <FaEdit
                      size={20}
                      className="cursor-pointer text-green-500"
                    />
                    <MdDeleteForever
                      size={20}
                      className="cursor-pointer text-red-500"
                      onClick={() => deleteComment(comment?._id)}
                    />
                  </div>
                  
                ) : (
                  ""
                )}
                
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
