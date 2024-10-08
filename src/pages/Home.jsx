import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import Post from "../components/Posts/post";
import Categories from "../components/Posts/Categories";
import useHome from "../hooks/useHome";

const Home = () => {
  const { posts } = useHome();

  // renderUi
  const showPosts = posts?.map((post, index) => (
    <Post key={index} post={post} />
  ));

  return (
    <>
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="px-3 md:px-10 py-3 h-[450px] bg-no-repeat bg-cover bg-center flex items-center justify-center"
      >
        <p className="bg-white capitalize shadow-lg shadow-[#6C63FF] md:text-2xl p-4 rounded text-center">
          <span className="block">Welcome!</span>
          You can enhance your{" "}
          <span className=" font-bold text-[#6C63FF]">knowledge</span> by
          reading posts.
        </p>
      </div>
      <div className="px-3 md:px-10 py-3 flex flex-col md:flex-row">
        <div className="w-full md:w-9/12">
          <div>
            <span className="font-semibold text-2xl border-b-2 border-black py-2">
              latest posts
            </span>
            <div className="posts my-5 flex flex-col gap-10">{showPosts}</div>
          </div>
        </div>
        <div className="w-full md:w-1/4 relative text-center">
          <Categories posts={posts} />
        </div>
      </div>
      <Link
        to="/posts"
        className="px-3 my-3 md:px-10 py-1 bg-green-500 w-full sm:w-60 mx-auto block text-center rounded capitalize text-white"
      >
        show all posts
      </Link>
    </>
  );
};

export default Home;
