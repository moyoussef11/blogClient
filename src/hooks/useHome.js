import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import actPostSlice from "../rtk/Slices/actPostSlice";
const useHome = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actPostSlice(1));
  }, [dispatch]);

  return {posts};
};

export default useHome;
