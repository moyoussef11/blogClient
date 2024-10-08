import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actPostSlice from "../rtk/Slices/actPostSlice";
import axios from "axios";
import { BASEURL, COUNT, POSTS } from "../api/api";

const POST_PER_PAGE = 3;

const usePosts = () => {
  const posts = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const pages = Math.ceil(count / POST_PER_PAGE);

  // getCount
  async function getCount() {
    try {
      let res = await axios.get(`${BASEURL}/${POSTS}/${COUNT}`);
      setCount(res.data.count);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(actPostSlice(currentPage));
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    getCount();
  }, []);

  return { posts, pages, currentPage, setCurrentPage };
};

export default usePosts;
