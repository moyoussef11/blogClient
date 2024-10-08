import useCreatePost from "../../hooks/useCreatePost";

const CreatePost = () => {
  const { setTitle, setFile, setCategory, setDescription, addPost } =
    useCreatePost();

  return (
    <div className="w-full py-10 px-4 flex flex-col items-center justify-center">
      <h4 className="md:text-3xl capitalize my-3">create new post</h4>
      <form
        onSubmit={addPost}
        encType="multipart/form-data"
        className="flex flex-col gap-2 w-full md:w-[650px]"
      >
        <input
          className="p-2 w-full placeholder:capitalize border border-gray-300 rounded"
          type="text"
          placeholder="title post"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="p-2 w-full placeholder:capitalize border border-gray-300 rounded"
          type="text"
          placeholder="category post"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          className="px-2 h-[200px] placeholder:capitalize border border-gray-300 rounded resize-none"
          placeholder="post description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 bg-slate-200 rounded"
          name="image"
          type="file"
        />
        <button
          type="submit"
          className="bg-[#6C63FF] p-2 capitalize text-white rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
