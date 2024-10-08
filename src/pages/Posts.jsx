import Categories from "../components/Posts/Categories";
import Post from "../components/Posts/post";
import Pagination from "../components/Posts/Pagination";
import usePosts from "../hooks/usePosts";

const Posts = () => {
  const { posts, pages, setCurrentPage, currentPage } = usePosts();

  // renderUi
  const showPosts = posts?.map((post, index) => (
    <Post key={index} post={post} />
  ));

  return (
    <div className="px-3 md:px-10 py-3 flex flex-col items-center relative">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-9/12">
          <div>
            <span className="font-semibold text-2xl border-b-2 border-black py-2">
              posts
            </span>
            <div className="posts my-5 flex flex-col gap-10">{showPosts}</div>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center relative">
          <Categories posts={posts} />
        </div>
      </div>

      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Posts;
