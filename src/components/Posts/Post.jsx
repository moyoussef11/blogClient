import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post bg-gray-100 py-2 px-4 rounded flex flex-col gap-2 relative">
      <div className="mx-auto py-2">
        <img
          className="h-[400px] bg-center bg-contain"
          src={post?.image?.url}
          alt="post"
        />
      </div>
      <div className="personal flex items-center justify-between border-b border-black py-1">
        <p className="capitalize">
          author:
          <span className="text-green-500">
            {post?.user?.username}
          </span>
        </p>
        <span className="text-green-500 font-semibold">
          {post?.createdAt?.split("T")[0]}
        </span>
      </div>
      <div className="info relative flex flex-col gap-4">
        <span className=" absolute right-1 bg-[#6C63FF] p-1 text-sm text-white rounded-full capitalize">
          {post?.category}
        </span>
        <h2 className="md:text-2xl font-bold capitalize">{post?.title}</h2>
        <p className="font-semibold text-sm text-gray-500">
          {post?.description?.slice(0, 300)}...
        </p>
        <Link to={`/posts/post-details/${post?._id}`}>
          <button className=" w-full bg-[#6C63FF] p-1 text-white capitalize rounded">
            read more...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
