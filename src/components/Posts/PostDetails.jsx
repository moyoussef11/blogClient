import AddComment from "../Comments/AddComment";
import Comments from "../Comments/Comments";
import { SlLike } from "react-icons/sl";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import UpdatePost from "./UpdatePost";
import usePostDetails from "../../hooks/usePostDetails";

const PostDetails = () => {
  const {
    post,
    user,
    toggleLike,
    loggedUser,
    userId,
    setToggle,
    deletePost,
    token,
    getPost,
    id,
    toggle,
  } = usePostDetails();

  return (
    <div className="px-5 md:mx-20 lg:mx-52 py-5 flex flex-col">
      <div>
        <img
          className="h-full w-full object-cover rounded"
          src={post?.image?.url}
          alt="postImg"
        />
      </div>
      <div className="postDetails">
        <h3 className="text-center my-2 md:text-5xl capitalize">
          {post?.title}
        </h3>
        <div className="person flex items-center justify-center gap-3 my-10">
          <img
            className="h-16 w-16 rounded-full"
            src={post?.user?.avatar?.url}
            alt="author"
          />
          <div className=" capitalize">
            <h5 className="font-bold text-[#6C63FF]">{post?.user?.username}</h5>
            <span className="text-sm text-gray-500">
              {post?.createdAt?.split("T")[0]}
            </span>
          </div>
        </div>
        <div className="info">
          <p>{post?.description}</p>
          <div className="flex items-center justify-between mt-5">
            <div className="likes flex items-center gap-1 text-blue-600">
              <SlLike
                onClick={() => toggleLike()}
                className={`cursor-pointer font-bold text-3xl ${
                  post?.likes?.includes(loggedUser)
                    ? "text-blue-500"
                    : "text-gray-500"
                }`}
              />
              <span>{post?.likes?.length} likes</span>
            </div>
            {loggedUser === userId ? (
              <div className="action flex items-center gap-3">
                <FaEdit
                  onClick={() => setToggle(true)}
                  size={20}
                  className="cursor-pointer text-green-500"
                />
                <MdDeleteForever
                  onClick={() => deletePost(post?._id)}
                  size={20}
                  className="cursor-pointer text-red-500"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {token ? (
        <AddComment
          username={user?.username}
          userId={loggedUser}
          token={token}
          postId={id}
          getPost={getPost}
        />
      ) : (
        ""
      )}
      <Comments getPost={getPost} comments={post?.comments} />
      {toggle ? (
        <UpdatePost
          post={post}
          token={token}
          userId={loggedUser}
          id={id}
          toggle={toggle}
          setToggle={setToggle}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PostDetails;
