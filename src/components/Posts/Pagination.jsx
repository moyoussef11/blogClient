
const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  let generatedPage = [];
  for (let i = 1; i <= pages; i++) {
    generatedPage.push(i);
    }
    

  return (
    <div className="pagination">
      <div className="flex">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`mx-1 px-3 py-2 bg-gray-200 text-gray-700  hover:bg-[#6C63FF] font-medium rounded-md ${
            currentPage === 1 ? "activeBtn" : ""
          }`}
        >
          Previous
        </button>

        {generatedPage.map((page) => (
          <span
            onClick={() => setCurrentPage(page)}
            key={page}
            className="mx-1 cursor-pointer px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-[#6C63FF] hover:text-gray-200 rounded-md"
          >
            {page}
          </span>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`mx-1 px-3 py-2 bg-gray-200 text-gray-700 font-medium hover:bg-[#6C63FF] hover:text-gray-200 rounded-md ${
            currentPage === generatedPage.length ? "activeBtn" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
