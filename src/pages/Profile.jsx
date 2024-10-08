import { FaCamera } from "react-icons/fa";
import Post from "../components/Posts/post";
import UpdateUser from "../components/Users/UpdateUser";
import useProfile from "../hooks/useProfile";
import { memo } from "react";

const Profile = () => {
  const {
    user,
    file,
    setFile,
    uploadPhoto,
    toggle,
    setToggle,
    posts,
    token,
    userId,
    id,
    deleteUser,
  } = useProfile();

  return (
    <>
      <div className="flex flex-col py-10 bg-gray-200">
        <div className="infoUser bg-gray-200 py-10 flex flex-col items-center justify-center">
          <div className="relative">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src={file ? URL.createObjectURL(file) : user?.avatar?.url}
              alt="user"
            />
            <form onSubmit={uploadPhoto} encType="multipart/form-data">
              <label
                className="cursor-pointer absolute right-0 bottom-10"
                htmlFor="userPic"
              >
                <FaCamera className="bg-white p-1 rounded-full" size={25} />
              </label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                className="hidden"
                name="avatar"
                id="userPic"
              />
              <button
                className="p-1 bg-black text-white rounded capitalize my-2 text-sm"
                type="submit"
              >
                upload
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center gap-3 capitalize">
            <h3 className="font-bold md:text-3xl text-[#6C63FF]">
              {user?.username}
            </h3>
            <div>
              <strong>date joined: </strong>
              <span className="text-sm text-green-500">
                {user?.createdAt?.split("T")[0]}
              </span>
            </div>
            <button
              onClick={() => setToggle(!toggle)}
              className="bg-green-500 text-white p-2 capitalize rounded"
            >
              update profile
            </button>
          </div>
        </div>
        <div className="posts">
          <h4 className=" md:text-4xl font-bold text-center border-b-2 w-fit mx-auto my-2 py-2 capitalize border-[#6C63FF]">
            {user?.username} posts:
          </h4>
          {user?.posts !== null ? (
            <Post post={posts} />
          ) : (
            <div className="flex items-center justify-center capitalize text-4xl">
              no posts
            </div>
          )}
        </div>
      </div>
      {toggle ? (
        <UpdateUser
          toggle={toggle}
          setToggle={setToggle}
          user={user}
          token={token}
        />
      ) : (
        ""
      )}
      {userId === id ? (
        <button
          onClick={() => deleteUser(id)}
          className="bg-red-500 p-2 text-white capitalize sm:w-[300px] rounded"
        >
          delete profile
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default memo(Profile);
