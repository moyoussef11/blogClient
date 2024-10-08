const Categories = ({ posts }) => {
  const showPostsCats = posts?.map((post, index) => (
    <div key={index} className="cat bg-slate-300 capitalize font-semibold">
      <p>{post.category}</p>
    </div>
  ));

  return (
    <div className="px-2 py-[55px]">
      <span className="capitalize md:text-2xl font-bold block text-center border-b-2 border-t-2 py-1 border-[#6C63FF]">
        category
      </span>
      <div className="cats py-5 flex flex-col gap-4">{showPostsCats}</div>
    </div>
  );
};

export default Categories;
